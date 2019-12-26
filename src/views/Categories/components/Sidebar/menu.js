
// Dropdown of Car Name, BWM, Astron Martin
// Select Car e.g: BWM



export const placeholderCarFilter = {
    postedBy: [
        {
            name: "individual",
            displayName: 'Individual'
        },
        {
            name: "dealership",
            displayName: 'Dealership'
        }
    ],
    //TODO: In future... Do: cars -> make -> year. If they select 2019 and the model doesn't exist
    make: [
        {
            name: "bwm",
            displayName: "BWM",
            models: ['600', 'M2']
        },
        {
            name: "astronMartin",
            displayName: "Astron Martin",
            models: ['B6 COver', 'Covert']
        }
    ],
    year: [1960, 2020],
    mileage: [0, 300000],
    bodyStyle: [
        {
            name: "sedan",
            displayName: "Sedan",
            icon: "default"
        },
        {
            name: "hybrid",
            displayName: "Hybrid",
            icon: "default"
        },
        {
            name: "convertible",
            displayName: "Convertible",
            icon: "default"
        },
        {
            name: "truck",
            displayName: "Truck",
            icon: "default"
        },
        {
            name: "coupe",
            displayName: "Coupe",
            icon: "default"
        },
        {
            name: "hatchback",
            displayName: "Hatchback",
            icon: "default"
        },
        {
            name: "minivan",
            displayName: "Minivan",
            icon: "default"
        },
        {
            name: "wagon",
            displayName: "Wagon",
            icon: "default"
        },
        {
            name: "suv",
            displayName: "SUV",
            icon: "default"
        },
        {
            name: "others",
            displayName: "Others",
            icon: "default"
        }

    ],
    transmission: [
        {
            name: "automatic",
            displayName: "Automatic",
            icon: "default"
        },
        {
            name: "manual",
            displayName: "Manual",
            icon: "default"
        }
    ],
    fuel: [
        {
            name: "disel",
            displayName: "Disel",
            icon: "default"
        },
        {
            name: "electric",
            displayName: "Electric",
            icon: "default"
        },
        {
            name: "flex",
            displayName: "Flex",
            icon: "default"
        },
        {
            name: "gas",
            displayName: "Gas",
            icon: "default"
        },
        {
            name: "hybrid",
            displayName: "Hybrid",
            icon: "default"
        },
        {
            name: "others",
            displayName: "Others",
            icon: "default"
        }
    ],
    driveTrain: [
        {
            name: "4wd",
            displayName: "4WD",
            icon: "default"
        },
        {
            name: "aws",
            displayName: "AWD",
            icon: "default"
        },
        {
            name: "fwd",
            displayName: "FWD",
            icon: "default"
        },
        {
            name: "rwd",
            displayName: "RWD",
            icon: "default"
        }
    ],
    seats: [1, 9],

    // Location['Leicester', 'Manchester'] - perhaps later use google maps for proximity and such
    // Price[min, max], 
    // Sort By['Relevance', 'Date (most recent)', 'Price: low to high', 'Price: high to low', 'CLosest first']
    // postedWithin: ['All Listings', 'The last 24 hours', 'The last 7 days', 'The last 30days']
}