// All Possibilities
// 
// Posted By: ["All", "Individual", "Dealership"]
// Body Style: ["All", "Sedan", "Hybrid", "Convertible", "Truck", "Coupe", "Hatchback", "Minivan", "Wagon", "SUV", "Others"]
// Transmision: ["All", "Automatic", "Manual"]
// Fuel: ["Disel", "Electric", "Flex", "Gas", "Hybrid"]
// Drivetrain: ["4WD", "AWD", "FWD", "RWD"]
// 
// Car Post

// DB

// Users
// Posts
// Categories: Cars, Homes, etc
// Location? 





[
    {
        "id": Number,
        "author": UserId,
        "creationDate": Date,
        "title": String,
        "content": String,
        "location": LocationId,
        "car": CarId,
        "media": MediaId[]
    }

]

[
    {
        "userId": 1,
        "id": 5,
        "createdAt": 1575048230910,
        "coverImage": "https://thumbs.img-sprzedajemy.pl/1000x901c/0a/2e/52/mitsubishi-3000gt-gto-jdm-3000gt-malopolskie-tarnow-488612276.jpg",
        "info": {
            "title": "My fast GT car - 1year old",
            "description": "The car has been taken care of and used only for my commute to work. It has new knob and its really awesome to drive with. No crashes all clean, come and take it.",
            "price": 34000,
            "location": "UK, Manchester",
            "postedBy": "individual",
        },
        "details": {
            "brand": "Rolls-Royce",
            "model": "Silver Spur",
            "year": 2004,
            "mileage": 232049,
        },
        "properties": {
            "bodyStyle": "Truck",
            "transmision": "Automatic",
            "fuel": "Electric",
            "driveTrain": "4WD",
            "seats": 8
        },
        "media": [
            {
                "id": 1,
                "img": "https://thumbs.img-sprzedajemy.pl/1000x901c/0a/2e/52/mitsubishi-3000gt-gto-jdm-3000gt-malopolskie-tarnow-488612276.jpg"
            },
            {
                "id": 2,
                "img": "https://meganracing.com/media/catalog/product/cache/6e104eba86855cb02bc9374335d46b7c/m/r/mr-ls-m3gt-2.jpg"
            }
        ]
    },
]