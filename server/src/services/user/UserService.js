const bcrypt = require("bcryptjs");
const StatusError = require("./../../errors/StatusError");

const SALT_ROUNDS = 12;

class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        this.listUsers = this.listUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getUser = this.getUser.bind(this);
        this._extractFields = this._extractFields.bind(this);
    }

    async listUsers(offset = 0, limit = 0, fields = []) {
        const users = await this.UserModel.find({ deleted: false }, null, {
            skip: offset,
            limit
        })

        if (fields.length < 1) return users;

        return Array.from(users).map(user => {
            return this._extractFields(user, fields)
        })
    }

    async getUserByResetToken(token) {
        return await this.UserModel.findOne({
            passwordResetToken: token,
            passwordResetExpires: { $gt: Date.now() }

        });
    }

    async findByIdAndUpdate(a, b) {
        return this.UserModel.findByIdAndUpdate(a, b);
    }

    getUserByEmail(email) {
        return this.UserModel.findOne({ email })
    }

    async getUserById(userId) {
        return await this.UserModel.findById(userId)
    }

    // TODO: Refactor this HACK!
    async getUserByIdwithPassword(userId) {
        return await this.UserModel.findById(userId).select('+password')
    }

    async getUser(username, password) {
        return await this.UserModel.findOne({ username, password })
    }

    createUser(firstName, lastName, email, password) {
        const user = new this.UserModel({ firstName, lastName, email, password });
        return user.save();
    }

    async updateUser(userId, firstName, lastName) {

    }

    // async deleteUser(userId) {
    //     const user = await this.UserModel.findById(userId);
    //     user.deleted = true;
    //     return user.save();
    // }

    async deleteUser(userId) {
        const user = await this.UserModel.deleteOne(userId);
        return;
    }

    async login(email, password) {
        const maybeUser = await this.getUserByEmail(email);

        if (!maybeUser) {
            throw new StatusError("Invalid username or password", 401);
        }

        const passwordMatch = await bcrypt.compare(password, maybeUser.password);
        const token = ""
        if (!passwordMatch) {
            throw new StatusError("Invalid username or password", 401);
        }

        return maybeUser;
    }

    async registerUser(firstName, lastName, email, password) {
        const isUser = await this.getUserByEmail(email);

        if (isUser) {
            throw new StatusError("There is already a user with that email", 400);
        }

        const passwordEncrypted = await bcrypt.hash(password, 12);
        return this.createUser(firstName, lastName, email, passwordEncrypted);
    }

    _extractFields(user, fields) {
        if (fields.length < 1) return user;
        const result = fields.reduce((acc, field) => {
            acc[field] = user[field];
            return acc;
        }, {});

        return result;
    }
}

module.exports = UserService;