
// Dropdown of Car Name, BWM, Astron Martin
// Select Car e.g: BWM



export const placeholderCarFilter = {
    postedBy: [
        { name: 'Individual' },
        { name: 'Dealership' }
    ],
    //TODO: In future... Do: cars -> make -> year. If they select 2019 and the model doesn't exist
    make: [
        {
            name: "BWM",
            models: ['600', 'M2']
        },
        {
            name: "Astron Martin",
            models: ['B6 COver', 'Covert']
        }
    ],
    year: [1960, 2020],
    mileage: [0, 300000],
    bodyStyle: [
        {
            name: "Sedan",
            icon: "default"
        },
        {
            name: "Hybrid",
            icon: "default"
        },
        {
            name: "Convertible",
            icon: "default"
        },
        {
            name: "Truck",
            icon: "default"
        },
        {
            name: "Coupe",
            icon: "default"
        },
        {
            name: "Hatchback",
            icon: "default"
        },
        {
            name: "Minivan",
            icon: "default"
        },
        {
            name: "Wagon",
            icon: "default"
        },
        {
            name: "SUV",
            icon: "default"
        },
        {
            name: "Others",
            icon: "default"
        }

    ],
    transmission: [
        {
            name: "Automatic",
            icon: "default"
        },
        {
            name: "Manual",
            icon: "default"
        }
    ],
    fuel: [
        {
            name: "Disel",
            icon: "default"
        },
        {
            name: "Electric",
            icon: "default"
        },
        {
            name: "Flex",
            icon: "default"
        },
        {
            name: "Gas",
            icon: "default"
        },
        {
            name: "Hybrid",
            icon: "default"
        },
        {
            name: "Others",
            icon: "default"
        }
    ],
    driveTrain: [
        {
            name: "4WD",
            icon: "default"
        },
        {
            name: "AWD",
            icon: "default"
        },
        {
            name: "FWD",
            icon: "default"
        },
        {
            name: "RWD",
            icon: "default"
        }
    ],
    seats: [1, 9],

    // Location['Leicester', 'Manchester'] - perhaps later use google maps for proximity and such
    // Price[min, max], 
    // Sort By['Relevance', 'Date (most recent)', 'Price: low to high', 'Price: high to low', 'CLosest first']
    // postedWithin: ['All Listings', 'The last 24 hours', 'The last 7 days', 'The last 30days']
}