const API_URL = process.env.NODE_ENV === 'production' ? "https://ogloszenia-anglia.herokuapp.com/api/v1" : process.env.REACT_APP_API_URL;

export default {
    API_URL,
};