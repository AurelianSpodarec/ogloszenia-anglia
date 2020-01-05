//TODO in future:
// ford
//   2019
//     fusion
//       se
//       srt
//     escape
//       basic
//       limited
//   2018
//     fusion
//       se
//       srt
//     edge

// Result: 2019 Ford Fusion SE


export const INITIAL_CAR_STATE = {
    postedBy: [
        {
            slug: "individual",
            displayName: 'Individual'
        },
        {
            slug: "dealership",
            displayName: 'Dealership'
        }
    ],
    make: 
        [
            {
              "slug": "acura",
              "displayName": "Acura",
              "models": [
                {
                  "slug": "cl",
                  "displayName": "CL"
                },
                {
                  "slug": "csx",
                  "displayName": "CSX"
                },
                {
                  "slug": "el",
                  "displayName": "EL"
                },
                {
                  "slug": "ilx",
                  "displayName": "ILX"
                },
                {
                  "slug": "integra",
                  "displayName": "Integra"
                },
                {
                  "slug": "legend",
                  "displayName": "Legend"
                },
                {
                  "slug": "mdx",
                  "displayName": "MDX"
                },
                {
                  "slug": "nsx",
                  "displayName": "NSX"
                },
                {
                  "slug": "rdx",
                  "displayName": "RDX"
                },
                {
                  "slug": "rl",
                  "displayName": "RL"
                },
                {
                  "slug": "rlx",
                  "displayName": "RLX"
                },
                {
                  "slug": "rsx",
                  "displayName": "RSX"
                },
                {
                  "slug": "slx",
                  "displayName": "SLX"
                },
                {
                  "slug": "tl",
                  "displayName": "TL"
                },
                {
                  "slug": "tlx",
                  "displayName": "TLX"
                },
                {
                  "slug": "tsx",
                  "displayName": "TSX"
                },
                {
                  "slug": "vigor",
                  "displayName": "Vigor"
                },
                {
                  "slug": "zdx",
                  "displayName": "ZDX"
                }
              ]
            },
            {
              "slug": "alfa-romeo",
              "displayName": "Alfa Romeo",
              "models": [
                {
                  "slug": "75",
                  "displayName": "75"
                },
                {
                  "slug": "90",
                  "displayName": "90"
                },
                {
                  "slug": "164",
                  "displayName": "164"
                },
                {
                  "slug": "1900",
                  "displayName": "1900"
                },
                {
                  "slug": "2000",
                  "displayName": "2000"
                },
                {
                  "slug": "2600",
                  "displayName": "2600"
                },
                {
                  "slug": "1750",
                  "displayName": "1750"
                },
                {
                  "slug": "2000",
                  "displayName": "2000"
                },
                {
                  "slug": "4c",
                  "displayName": "4C"
                },
                {
                  "slug": "sprint",
                  "displayName": "Sprint"
                },
                {
                  "slug": "alfetta",
                  "displayName": "Alfetta"
                },
                {
                  "slug": "spider",
                  "displayName": "Spider"
                },
                {
                  "slug": "gt",
                  "displayName": "GT"
                },
                {
                  "slug": "gtv",
                  "displayName": "GTV"
                },
                {
                  "slug": "spider",
                  "displayName": "Spider"
                },
                {
                  "slug": "stelvio",
                  "displayName": "Stelvio"
                },
                {
                  "slug": "giulia",
                  "displayName": "Giulia"
                }
              ]
            },
            {
              "slug": "amc",
              "displayName": "AMC",
              "models": [
                {
                  "slug": "ambassador",
                  "displayName": "Ambassador"
                },
                {
                  "slug": "amx",
                  "displayName": "AMX"
                },
                {
                  "slug": "concord",
                  "displayName": "Concord"
                },
                {
                  "slug": "eagle",
                  "displayName": "Eagle"
                },
                {
                  "slug": "gremlin",
                  "displayName": "Gremlin"
                },
                {
                  "slug": "hornet",
                  "displayName": "Hornet"
                },
                {
                  "slug": "javelin",
                  "displayName": "Javelin"
                },
                {
                  "slug": "matador",
                  "displayName": "Matador"
                },
                {
                  "slug": "pacer",
                  "displayName": "Pacer"
                },
                {
                  "slug": "rebel",
                  "displayName": "Rebel"
                },
                {
                  "slug": "spirit",
                  "displayName": "Spirit"
                }
              ]
            },
            {
              "slug": "anadol",
              "displayName": "Anadol",
              "models": [
                {
                  "slug": "a1",
                  "displayName": "A1"
                },
                {
                  "slug": "a2",
                  "displayName": "A2"
                }
              ]
            },
            {
              "slug": "aston-martin",
              "displayName": "Aston Martin",
              "models": [
                {
                  "slug": "db11",
                  "displayName": "DB11"
                },
                {
                  "slug": "db7",
                  "displayName": "DB7"
                },
                {
                  "slug": "db9",
                  "displayName": "DB9"
                },
                {
                  "slug": "lagonda",
                  "displayName": "Lagonda"
                },
                {
                  "slug": "rapide",
                  "displayName": "Rapide"
                },
                {
                  "slug": "v12-vanquish",
                  "displayName": "V12 Vanquish"
                },
                {
                  "slug": "v8",
                  "displayName": "V8"
                },
                {
                  "slug": "dbs",
                  "displayName": "DBS"
                },
                {
                  "slug": "v12-vantage",
                  "displayName": "V12 Vantage"
                },
                {
                  "slug": "v8-vantage",
                  "displayName": "V8 Vantage"
                },
                {
                  "slug": "v8-vantage-roadster",
                  "displayName": "V8 Vantage Roadster"
                },
                {
                  "slug": "v8-vantage-roadster-sportshift",
                  "displayName": "V8 Vantage Roadster SPORTSHIFT"
                },
                {
                  "slug": "v8-vantage-sportshift",
                  "displayName": "V8 Vantage SPORTSHIFT"
                },
                {
                  "slug": "vanquish",
                  "displayName": "Vanquish"
                },
                {
                  "slug": "virage",
                  "displayName": "Virage"
                }
              ]
            },
            {
              "slug": "asuena",
              "displayName": "Asüna",
              "models": [
                {
                  "slug": "lemans",
                  "displayName": "LeMans"
                },
                {
                  "slug": "sunfire",
                  "displayName": "Sunfire"
                },
                {
                  "slug": "sunrunner",
                  "displayName": "Sunrunner"
                }
              ]
            },
            {
              "slug": "audi",
              "displayName": "Audi",
              "models": [
                {
                  "slug": "80",
                  "displayName": "80"
                },
                {
                  "slug": "100",
                  "displayName": "100"
                },
                {
                  "slug": "200",
                  "displayName": "200"
                },
                {
                  "slug": "80",
                  "displayName": "80"
                },
                {
                  "slug": "90",
                  "displayName": "90"
                },
                {
                  "slug": "a1",
                  "displayName": "A1"
                },
                {
                  "slug": "a2",
                  "displayName": "A2"
                },
                {
                  "slug": "a3",
                  "displayName": "A3"
                },
                {
                  "slug": "s3",
                  "displayName": "S3"
                },
                {
                  "slug": "rs3",
                  "displayName": "RS3"
                },
                {
                  "slug": "a4",
                  "displayName": "A4"
                },
                {
                  "slug": "s4",
                  "displayName": "S4"
                },
                {
                  "slug": "rs4",
                  "displayName": "RS4"
                },
                {
                  "slug": "s2",
                  "displayName": "S2"
                },
                {
                  "slug": "s8",
                  "displayName": "S8"
                },
                {
                  "slug": "a5",
                  "displayName": "A5"
                },
                {
                  "slug": "s5",
                  "displayName": "S5"
                },
                {
                  "slug": "rs5",
                  "displayName": "RS5"
                },
                {
                  "slug": "a6",
                  "displayName": "A6"
                },
                {
                  "slug": "s6",
                  "displayName": "S6"
                },
                {
                  "slug": "rs6",
                  "displayName": "RS6"
                },
                {
                  "slug": "a7",
                  "displayName": "A7"
                },
                {
                  "slug": "s7",
                  "displayName": "S7"
                },
                {
                  "slug": "rs7",
                  "displayName": "RS7"
                },
                {
                  "slug": "a8",
                  "displayName": "A8"
                },
                {
                  "slug": "cabriolet",
                  "displayName": "Cabriolet"
                },
                {
                  "slug": "coupe",
                  "displayName": "Coupé"
                },
                {
                  "slug": "q2",
                  "displayName": "Q2"
                },
                {
                  "slug": "q3",
                  "displayName": "Q3"
                },
                {
                  "slug": "q3-rs",
                  "displayName": "Q3 RS"
                },
                {
                  "slug": "q5",
                  "displayName": "Q5"
                },
                {
                  "slug": "sq5",
                  "displayName": "SQ5"
                },
                {
                  "slug": "q7",
                  "displayName": "Q7"
                },
                {
                  "slug": "quattro",
                  "displayName": "Quattro"
                },
                {
                  "slug": "r8",
                  "displayName": "R8"
                },
                {
                  "slug": "tt",
                  "displayName": "TT"
                },
                {
                  "slug": "tts",
                  "displayName": "TTS"
                },
                {
                  "slug": "tt-rs",
                  "displayName": "TT RS"
                },
                {
                  "slug": "v8",
                  "displayName": "V8"
                },
                {
                  "slug": "a3-cabriolet",
                  "displayName": "A3 Cabriolet"
                },
                {
                  "slug": "a3-sedan",
                  "displayName": "A3 Sedan"
                },
                {
                  "slug": "a3-sportback-e-tronr",
                  "displayName": "A3 Sportback e-tron®"
                },
                {
                  "slug": "a5-cabriolet",
                  "displayName": "A5 Cabriolet"
                },
                {
                  "slug": "a5-coupe",
                  "displayName": "A5 Coupe"
                },
                {
                  "slug": "a5-sportback",
                  "displayName": "A5 Sportback"
                },
                {
                  "slug": "allroad",
                  "displayName": "allroad"
                },
                {
                  "slug": "allroad-quattro",
                  "displayName": "Allroad quattro"
                },
                {
                  "slug": "e-tron",
                  "displayName": "e-tron"
                },
                {
                  "slug": "q8",
                  "displayName": "Q8"
                },
                {
                  "slug": "rs-3",
                  "displayName": "RS 3"
                },
                {
                  "slug": "rs-5",
                  "displayName": "RS 5"
                },
                {
                  "slug": "rs-5-cabriolet",
                  "displayName": "RS 5 Cabriolet"
                },
                {
                  "slug": "rs-5-coupe",
                  "displayName": "RS 5 Coupe"
                },
                {
                  "slug": "rs-5-sportback",
                  "displayName": "RS 5 Sportback"
                },
                {
                  "slug": "rs-7",
                  "displayName": "RS 7"
                },
                {
                  "slug": "s5-cabriolet",
                  "displayName": "S5 Cabriolet"
                },
                {
                  "slug": "s5-coupe",
                  "displayName": "S5 Coupe"
                },
                {
                  "slug": "s5-sportback",
                  "displayName": "S5 Sportback"
                },
                {
                  "slug": "tt-coupe",
                  "displayName": "TT Coupe"
                },
                {
                  "slug": "tt-roadster",
                  "displayName": "TT Roadster"
                },
                {
                  "slug": "tts-coupe",
                  "displayName": "TTS Coupe"
                }
              ]
            },
            {
              "slug": "austin",
              "displayName": "Austin",
              "models": [
                {
                  "slug": "1100",
                  "displayName": "1100"
                },
                {
                  "slug": "1800",
                  "displayName": "1800"
                },
                {
                  "slug": "2000",
                  "displayName": "2000"
                },
                {
                  "slug": "ambassador",
                  "displayName": "Ambassador"
                },
                {
                  "slug": "metro",
                  "displayName": "Metro"
                }
              ]
            },
            {
              "slug": "austin-healey",
              "displayName": "Austin-Healey",
              "models": [
                {
                  "slug": "100",
                  "displayName": "100"
                },
                {
                  "slug": "3000",
                  "displayName": "3000"
                },
                {
                  "slug": "100-6",
                  "displayName": "100-6"
                },
                {
                  "slug": "sprite",
                  "displayName": "Sprite"
                }
              ]
            },
            {
              "slug": "auto-union",
              "displayName": "Auto-Union",
              "models": [
                {
                  "slug": "1000",
                  "displayName": "1000"
                }
              ]
            },
            {
              "slug": "bentley",
              "displayName": "Bentley",
              "models": [
                {
                  "slug": "arnage",
                  "displayName": "Arnage"
                },
                {
                  "slug": "azure",
                  "displayName": "Azure"
                },
                {
                  "slug": "bentayga",
                  "displayName": "Bentayga"
                },
                {
                  "slug": "brooklands",
                  "displayName": "Brooklands"
                },
                {
                  "slug": "continental",
                  "displayName": "Continental"
                },
                {
                  "slug": "continental-gt",
                  "displayName": "Continental GT"
                },
                {
                  "slug": "corniche",
                  "displayName": "Corniche"
                },
                {
                  "slug": "eight",
                  "displayName": "Eight"
                },
                {
                  "slug": "mark-vi",
                  "displayName": "Mark VI"
                },
                {
                  "slug": "mulsanne",
                  "displayName": "Mulsanne"
                },
                {
                  "slug": "s2",
                  "displayName": "S2"
                },
                {
                  "slug": "s3",
                  "displayName": "S3"
                },
                {
                  "slug": "turbo-r",
                  "displayName": "Turbo R"
                },
                {
                  "slug": "continental-flying-spur",
                  "displayName": "Continental Flying Spur"
                },
                {
                  "slug": "continental-gtc",
                  "displayName": "Continental GTC"
                },
                {
                  "slug": "continental-supersports",
                  "displayName": "Continental Supersports"
                },
                {
                  "slug": "turbo",
                  "displayName": "Turbo"
                }
              ]
            },
            {
              "slug": "bmw",
              "displayName": "BMW",
              "models": [
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "m2",
                  "displayName": "M2"
                },
                {
                  "slug": "3-series",
                  "displayName": "3-Series"
                },
                {
                  "slug": "m3",
                  "displayName": "M3"
                },
                {
                  "slug": "4-series",
                  "displayName": "4-Series"
                },
                {
                  "slug": "m4",
                  "displayName": "M4"
                },
                {
                  "slug": "5-series",
                  "displayName": "5-Series"
                },
                {
                  "slug": "m5",
                  "displayName": "M5"
                },
                {
                  "slug": "6-series",
                  "displayName": "6-Series"
                },
                {
                  "slug": "m6",
                  "displayName": "M6"
                },
                {
                  "slug": "7-series",
                  "displayName": "7-Series"
                },
                {
                  "slug": "8-series",
                  "displayName": "8-Series"
                },
                {
                  "slug": "i3",
                  "displayName": "i3"
                },
                {
                  "slug": "i8",
                  "displayName": "i8"
                },
                {
                  "slug": "new-class",
                  "displayName": "New Class "
                },
                {
                  "slug": "new-six",
                  "displayName": "New Six"
                },
                {
                  "slug": "x1",
                  "displayName": "X1"
                },
                {
                  "slug": "x3",
                  "displayName": "X3"
                },
                {
                  "slug": "x4",
                  "displayName": "X4"
                },
                {
                  "slug": "x5",
                  "displayName": "X5"
                },
                {
                  "slug": "x6",
                  "displayName": "X6"
                },
                {
                  "slug": "z3",
                  "displayName": "Z3"
                },
                {
                  "slug": "z3-m",
                  "displayName": "Z3 M"
                },
                {
                  "slug": "z4",
                  "displayName": "Z4"
                },
                {
                  "slug": "z4-m",
                  "displayName": "Z4 M"
                },
                {
                  "slug": "z8",
                  "displayName": "Z8"
                },
                {
                  "slug": "1-series",
                  "displayName": "1 Series"
                },
                {
                  "slug": "2-series",
                  "displayName": "2 Series"
                },
                {
                  "slug": "3-series",
                  "displayName": "3 Series"
                },
                {
                  "slug": "4-series",
                  "displayName": "4 Series"
                },
                {
                  "slug": "5-series",
                  "displayName": "5 Series"
                },
                {
                  "slug": "6-series",
                  "displayName": "6 Series"
                },
                {
                  "slug": "6-series-convertible",
                  "displayName": "6 Series Convertible"
                },
                {
                  "slug": "6-series-coupe",
                  "displayName": "6 Series Coupe"
                },
                {
                  "slug": "6-series-gran-coupe",
                  "displayName": "6 Series Gran Coupe"
                },
                {
                  "slug": "6-series-gran-turismo",
                  "displayName": "6 Series Gran Turismo"
                },
                {
                  "slug": "7-series",
                  "displayName": "7 Series"
                },
                {
                  "slug": "8-series",
                  "displayName": "8 Series"
                },
                {
                  "slug": "alpina-b6-gran-coupe",
                  "displayName": "ALPINA B6 Gran Coupe"
                },
                {
                  "slug": "m",
                  "displayName": "M"
                },
                {
                  "slug": "m-series",
                  "displayName": "M Series"
                },
                {
                  "slug": "m2-coupe",
                  "displayName": "M2 Coupe"
                },
                {
                  "slug": "m3-sedan",
                  "displayName": "M3 Sedan"
                },
                {
                  "slug": "m4-convertible",
                  "displayName": "M4 Convertible"
                },
                {
                  "slug": "m4-coupe",
                  "displayName": "M4 Coupe"
                },
                {
                  "slug": "m5-sedan",
                  "displayName": "M5 Sedan"
                },
                {
                  "slug": "m6-convertible",
                  "displayName": "M6 Convertible"
                },
                {
                  "slug": "m6-coupe",
                  "displayName": "M6 Coupe"
                },
                {
                  "slug": "m6-gran-coupe",
                  "displayName": "M6 Gran Coupe"
                },
                {
                  "slug": "x2",
                  "displayName": "X2"
                },
                {
                  "slug": "x2-m",
                  "displayName": "X2 M"
                },
                {
                  "slug": "x3-m",
                  "displayName": "X3 M"
                },
                {
                  "slug": "x4-m",
                  "displayName": "X4 M"
                },
                {
                  "slug": "x5-m",
                  "displayName": "X5 M"
                },
                {
                  "slug": "x6-m",
                  "displayName": "X6 M"
                },
                {
                  "slug": "x7",
                  "displayName": "X7"
                }
              ]
            },
            {
              "slug": "bristol",
              "displayName": "Bristol",
              "models": [
                {
                  "slug": "400",
                  "displayName": "400"
                },
                {
                  "slug": "403",
                  "displayName": "403"
                },
                {
                  "slug": "404",
                  "displayName": "404"
                },
                {
                  "slug": "405",
                  "displayName": "405"
                }
              ]
            },
            {
              "slug": "bugatti",
              "displayName": "Bugatti",
              "models": [
                {
                  "slug": "16c-galibier",
                  "displayName": "16C Galibier"
                },
                {
                  "slug": "chiron",
                  "displayName": "Chiron"
                },
                {
                  "slug": "eb-164-veyron",
                  "displayName": "EB 16.4 Veyron"
                },
                {
                  "slug": "eb110",
                  "displayName": "EB110"
                }
              ]
            },
            {
              "slug": "buick",
              "displayName": "Buick",
              "models": [
                {
                  "slug": "apollo",
                  "displayName": "Apollo"
                },
                {
                  "slug": "cascada",
                  "displayName": "Cascada"
                },
                {
                  "slug": "centurion",
                  "displayName": "Centurion"
                },
                {
                  "slug": "century",
                  "displayName": "Century"
                },
                {
                  "slug": "electra",
                  "displayName": "Electra"
                },
                {
                  "slug": "enclave",
                  "displayName": "Enclave"
                },
                {
                  "slug": "encore",
                  "displayName": "Encore"
                },
                {
                  "slug": "envision",
                  "displayName": "Envision"
                },
                {
                  "slug": "estate",
                  "displayName": "Estate"
                },
                {
                  "slug": "invicta",
                  "displayName": "Invicta"
                },
                {
                  "slug": "lacrosse",
                  "displayName": "LaCrosse"
                },
                {
                  "slug": "lesabre",
                  "displayName": "LeSabre"
                },
                {
                  "slug": "lucerne",
                  "displayName": "Lucerne"
                },
                {
                  "slug": "park-avenue",
                  "displayName": "Park Avenue"
                },
                {
                  "slug": "rainier",
                  "displayName": "Rainier"
                },
                {
                  "slug": "reatta",
                  "displayName": "Reatta"
                },
                {
                  "slug": "regal",
                  "displayName": "Regal"
                },
                {
                  "slug": "rendezvous",
                  "displayName": "Rendezvous"
                },
                {
                  "slug": "riviera",
                  "displayName": "Riviera"
                },
                {
                  "slug": "roadmaster",
                  "displayName": "Roadmaster"
                },
                {
                  "slug": "roadmaster-estate",
                  "displayName": "Roadmaster Estate"
                },
                {
                  "slug": "skyhawk",
                  "displayName": "Skyhawk"
                },
                {
                  "slug": "skylark",
                  "displayName": "Skylark"
                },
                {
                  "slug": "somerset",
                  "displayName": "Somerset"
                },
                {
                  "slug": "special",
                  "displayName": "Special"
                },
                {
                  "slug": "super",
                  "displayName": "Super"
                },
                {
                  "slug": "terraza",
                  "displayName": "Terraza"
                },
                {
                  "slug": "verano",
                  "displayName": "Verano"
                },
                {
                  "slug": "wildcat",
                  "displayName": "Wildcat"
                },
                {
                  "slug": "eb-110",
                  "displayName": "EB 110"
                },
                {
                  "slug": "regal-sportback",
                  "displayName": "Regal Sportback"
                },
                {
                  "slug": "regal-tourx",
                  "displayName": "Regal TourX"
                }
              ]
            },
            {
              "slug": "cadillac",
              "displayName": "Cadillac",
              "models": [
                {
                  "slug": "6200",
                  "displayName": "6200"
                },
                {
                  "slug": "allante",
                  "displayName": "Allanté"
                },
                {
                  "slug": "ats",
                  "displayName": "ATS"
                },
                {
                  "slug": "brougham",
                  "displayName": "Brougham"
                },
                {
                  "slug": "calais",
                  "displayName": "Calais"
                },
                {
                  "slug": "catera",
                  "displayName": "Catera"
                },
                {
                  "slug": "cimarron",
                  "displayName": "Cimarron"
                },
                {
                  "slug": "coupe-de-ville",
                  "displayName": "Coupe de Ville"
                },
                {
                  "slug": "ct6",
                  "displayName": "CT6"
                },
                {
                  "slug": "cts",
                  "displayName": "CTS"
                },
                {
                  "slug": "dts",
                  "displayName": "DTS"
                },
                {
                  "slug": "eldorado",
                  "displayName": "Eldorado"
                },
                {
                  "slug": "elr",
                  "displayName": "ELR"
                },
                {
                  "slug": "escalade",
                  "displayName": "Escalade"
                },
                {
                  "slug": "fleetwood",
                  "displayName": "Fleetwood"
                },
                {
                  "slug": "sedan-de-ville",
                  "displayName": "Sedan de Ville"
                },
                {
                  "slug": "series-60",
                  "displayName": "Series 60"
                },
                {
                  "slug": "series-61",
                  "displayName": "Series 61"
                },
                {
                  "slug": "series-62",
                  "displayName": "Series 62"
                },
                {
                  "slug": "series-65",
                  "displayName": "Series 65"
                },
                {
                  "slug": "series-75",
                  "displayName": "Series 75"
                },
                {
                  "slug": "seville",
                  "displayName": "Seville"
                },
                {
                  "slug": "srx",
                  "displayName": "SRX"
                },
                {
                  "slug": "sts",
                  "displayName": "STS"
                },
                {
                  "slug": "xlr",
                  "displayName": "XLR"
                },
                {
                  "slug": "xt5",
                  "displayName": "XT5"
                },
                {
                  "slug": "xts",
                  "displayName": "XTS"
                },
                {
                  "slug": "ats-coupe",
                  "displayName": "ATS Coupe"
                },
                {
                  "slug": "ats-sedan",
                  "displayName": "ATS Sedan"
                },
                {
                  "slug": "ats-v-coupe",
                  "displayName": "ATS-V Coupe"
                },
                {
                  "slug": "ats-v-sedan",
                  "displayName": "ATS-V Sedan"
                },
                {
                  "slug": "cts-coupe",
                  "displayName": "CTS Coupe"
                },
                {
                  "slug": "cts-sedan",
                  "displayName": "CTS Sedan"
                },
                {
                  "slug": "cts-sport-sedan",
                  "displayName": "CTS Sport Sedan"
                },
                {
                  "slug": "cts-sport-wagon",
                  "displayName": "CTS Sport Wagon"
                },
                {
                  "slug": "cts-v-coupe",
                  "displayName": "CTS-V Coupe"
                },
                {
                  "slug": "cts-v-sedan",
                  "displayName": "CTS-V Sedan"
                },
                {
                  "slug": "cts-v-sport-sedan",
                  "displayName": "CTS-V Sport Sedan"
                },
                {
                  "slug": "cts-v-sport-wagon",
                  "displayName": "CTS-V Sport Wagon"
                },
                {
                  "slug": "deville",
                  "displayName": "DeVille"
                },
                {
                  "slug": "escalade-esv",
                  "displayName": "Escalade ESV"
                },
                {
                  "slug": "escalade-ext",
                  "displayName": "Escalade EXT"
                },
                {
                  "slug": "xt4",
                  "displayName": "XT4"
                },
                {
                  "slug": "xt6",
                  "displayName": "XT6"
                }
              ]
            },
            {
              "slug": "checker",
              "displayName": "Checker",
              "models": [
                {
                  "slug": "a1",
                  "displayName": "A1"
                },
                {
                  "slug": "a11a12",
                  "displayName": "A11/A12"
                },
                {
                  "slug": "a2",
                  "displayName": "A2"
                },
                {
                  "slug": "a3a4",
                  "displayName": "A3/A4"
                },
                {
                  "slug": "a6a7",
                  "displayName": "A6/A7"
                },
                {
                  "slug": "a8",
                  "displayName": "A8"
                },
                {
                  "slug": "a9a10",
                  "displayName": "A9/A10"
                },
                {
                  "slug": "aerobus",
                  "displayName": "Aerobus"
                },
                {
                  "slug": "marathon",
                  "displayName": "Marathon"
                },
                {
                  "slug": "superba",
                  "displayName": "Superba"
                }
              ]
            },
            {
              "slug": "chevrolet",
              "displayName": "Chevrolet",
              "models": [
                {
                  "slug": "150",
                  "displayName": "150"
                },
                {
                  "slug": "210",
                  "displayName": "210"
                },
                {
                  "slug": "advance-design",
                  "displayName": "Advance Design"
                },
                {
                  "slug": "alero",
                  "displayName": "Alero"
                },
                {
                  "slug": "astro",
                  "displayName": "Astro"
                },
                {
                  "slug": "avalanche",
                  "displayName": "Avalanche"
                },
                {
                  "slug": "aveo",
                  "displayName": "Aveo"
                },
                {
                  "slug": "aveo",
                  "displayName": "Aveo "
                },
                {
                  "slug": "beauville",
                  "displayName": "Beauville"
                },
                {
                  "slug": "bel-air",
                  "displayName": "Bel Air"
                },
                {
                  "slug": "blazer",
                  "displayName": "Blazer"
                },
                {
                  "slug": "bolt",
                  "displayName": "Bolt"
                },
                {
                  "slug": "brookwood",
                  "displayName": "Brookwood"
                },
                {
                  "slug": "byscaine",
                  "displayName": "Byscaine"
                },
                {
                  "slug": "ck",
                  "displayName": "C/K"
                },
                {
                  "slug": "camaro",
                  "displayName": "Camaro"
                },
                {
                  "slug": "caprice",
                  "displayName": "Caprice"
                },
                {
                  "slug": "cavalier",
                  "displayName": "Cavalier"
                },
                {
                  "slug": "celebrity",
                  "displayName": "Celebrity"
                },
                {
                  "slug": "chevelle-malibu",
                  "displayName": "Chevelle Malibu"
                },
                {
                  "slug": "chevette",
                  "displayName": "Chevette"
                },
                {
                  "slug": "chevy-ii-nova",
                  "displayName": "Chevy II Nova"
                },
                {
                  "slug": "citation",
                  "displayName": "Citation"
                },
                {
                  "slug": "cobalt",
                  "displayName": "Cobalt"
                },
                {
                  "slug": "colorado",
                  "displayName": "Colorado"
                },
                {
                  "slug": "corsica",
                  "displayName": "Corsica"
                },
                {
                  "slug": "beretta",
                  "displayName": "Beretta"
                },
                {
                  "slug": "corvair",
                  "displayName": "Corvair"
                },
                {
                  "slug": "corvette",
                  "displayName": "Corvette"
                },
                {
                  "slug": "cruze",
                  "displayName": "Cruze"
                },
                {
                  "slug": "delray",
                  "displayName": "Delray"
                },
                {
                  "slug": "deluxe",
                  "displayName": "Deluxe"
                },
                {
                  "slug": "el-camino",
                  "displayName": "El Camino"
                },
                {
                  "slug": "equinox",
                  "displayName": "Equinox"
                },
                {
                  "slug": "express",
                  "displayName": "Express"
                },
                {
                  "slug": "fleetline",
                  "displayName": "Fleetline"
                },
                {
                  "slug": "hhr",
                  "displayName": "HHR"
                },
                {
                  "slug": "impala",
                  "displayName": "Impala"
                },
                {
                  "slug": "k5-blazer",
                  "displayName": "K5 Blazer"
                },
                {
                  "slug": "kalos",
                  "displayName": "Kalos"
                },
                {
                  "slug": "kingswood",
                  "displayName": "Kingswood"
                },
                {
                  "slug": "lakewood",
                  "displayName": "Lakewood"
                },
                {
                  "slug": "lumina",
                  "displayName": "Lumina"
                },
                {
                  "slug": "luv",
                  "displayName": "LUV"
                },
                {
                  "slug": "malibu",
                  "displayName": "Malibu"
                },
                {
                  "slug": "metro",
                  "displayName": "Metro"
                },
                {
                  "slug": "monte-carlo",
                  "displayName": "Monte Carlo"
                },
                {
                  "slug": "monza",
                  "displayName": "Monza"
                },
                {
                  "slug": "nomad",
                  "displayName": "Nomad"
                },
                {
                  "slug": "nova",
                  "displayName": "Nova"
                },
                {
                  "slug": "nubira",
                  "displayName": "Nubira"
                },
                {
                  "slug": "parkwood",
                  "displayName": "Parkwood"
                },
                {
                  "slug": "prizm",
                  "displayName": "Prizm"
                },
                {
                  "slug": "s-10",
                  "displayName": "S-10"
                },
                {
                  "slug": "s-10-blazer",
                  "displayName": "S-10 Blazer"
                },
                {
                  "slug": "silverado",
                  "displayName": "Silverado"
                },
                {
                  "slug": "sonic",
                  "displayName": "Sonic"
                },
                {
                  "slug": "special",
                  "displayName": "Special"
                },
                {
                  "slug": "spectrum",
                  "displayName": "Spectrum"
                },
                {
                  "slug": "sprint",
                  "displayName": "Sprint"
                },
                {
                  "slug": "styleline",
                  "displayName": "Styleline"
                },
                {
                  "slug": "suburban",
                  "displayName": "Suburban"
                },
                {
                  "slug": "tahoe",
                  "displayName": "Tahoe"
                },
                {
                  "slug": "task-force",
                  "displayName": "Task Force"
                },
                {
                  "slug": "townsman",
                  "displayName": "Townsman"
                },
                {
                  "slug": "tracker",
                  "displayName": "Tracker"
                },
                {
                  "slug": "trailblazer",
                  "displayName": "Trailblazer"
                },
                {
                  "slug": "trans-sport",
                  "displayName": "Trans Sport"
                },
                {
                  "slug": "traverse",
                  "displayName": "Traverse"
                },
                {
                  "slug": "uplander",
                  "displayName": "Uplander"
                },
                {
                  "slug": "van",
                  "displayName": "Van"
                },
                {
                  "slug": "vega",
                  "displayName": "Vega"
                },
                {
                  "slug": "venture",
                  "displayName": "Venture"
                },
                {
                  "slug": "volt",
                  "displayName": "Volt"
                },
                {
                  "slug": "yeoman",
                  "displayName": "Yeoman"
                },
                {
                  "slug": "astro-cargo",
                  "displayName": "Astro Cargo"
                },
                {
                  "slug": "astro-passenger",
                  "displayName": "Astro Passenger"
                },
                {
                  "slug": "aveo5",
                  "displayName": "Aveo5"
                },
                {
                  "slug": "bolt-ev",
                  "displayName": "Bolt EV"
                },
                {
                  "slug": "c1500",
                  "displayName": "C1500"
                },
                {
                  "slug": "c2500",
                  "displayName": "C2500"
                },
                {
                  "slug": "c3500",
                  "displayName": "C3500"
                },
                {
                  "slug": "captiva-sport",
                  "displayName": "Captiva Sport"
                },
                {
                  "slug": "chevy-van",
                  "displayName": "Chevy Van"
                },
                {
                  "slug": "city-express",
                  "displayName": "City Express"
                },
                {
                  "slug": "classic",
                  "displayName": "Classic"
                },
                {
                  "slug": "cruze-limited",
                  "displayName": "Cruze Limited"
                },
                {
                  "slug": "express-cargo",
                  "displayName": "Express Cargo"
                },
                {
                  "slug": "express-cutaway",
                  "displayName": "Express Cutaway"
                },
                {
                  "slug": "express-passenger",
                  "displayName": "Express Passenger"
                },
                {
                  "slug": "impala-limited",
                  "displayName": "Impala Limited"
                },
                {
                  "slug": "k1500",
                  "displayName": "K1500"
                },
                {
                  "slug": "k2500",
                  "displayName": "K2500"
                },
                {
                  "slug": "k3500",
                  "displayName": "K3500"
                },
                {
                  "slug": "low-cab-forward",
                  "displayName": "Low Cab Forward"
                },
                {
                  "slug": "lumina-minivan",
                  "displayName": "Lumina Minivan"
                },
                {
                  "slug": "malibu-classic",
                  "displayName": "Malibu Classic"
                },
                {
                  "slug": "malibu-limited",
                  "displayName": "Malibu Limited"
                },
                {
                  "slug": "malibu-maxx",
                  "displayName": "Malibu Maxx"
                },
                {
                  "slug": "silverado-1500",
                  "displayName": "Silverado 1500"
                },
                {
                  "slug": "silverado-1500-ld",
                  "displayName": "Silverado 1500 LD"
                },
                {
                  "slug": "silverado-1500hd",
                  "displayName": "Silverado 1500HD"
                },
                {
                  "slug": "silverado-2500",
                  "displayName": "Silverado 2500"
                },
                {
                  "slug": "silverado-2500hd",
                  "displayName": "Silverado 2500HD"
                },
                {
                  "slug": "silverado-3500",
                  "displayName": "Silverado 3500"
                },
                {
                  "slug": "silverado-3500-chassis-cab",
                  "displayName": "Silverado 3500 Chassis Cab"
                },
                {
                  "slug": "silverado-3500hd",
                  "displayName": "Silverado 3500HD"
                },
                {
                  "slug": "silverado-4500-medium-duty-chassis-cab",
                  "displayName": "Silverado 4500 Medium Duty Chassis Cab"
                },
                {
                  "slug": "silverado-classic-1500",
                  "displayName": "Silverado Classic 1500"
                },
                {
                  "slug": "silverado-classic-1500hd",
                  "displayName": "Silverado Classic 1500HD"
                },
                {
                  "slug": "silverado-classic-2500hd",
                  "displayName": "Silverado Classic 2500HD"
                },
                {
                  "slug": "silverado-classic-3500",
                  "displayName": "Silverado Classic 3500"
                },
                {
                  "slug": "silverado-classic-3500-chassis-cab",
                  "displayName": "Silverado Classic 3500 Chassis Cab"
                },
                {
                  "slug": "spark",
                  "displayName": "Spark"
                },
                {
                  "slug": "sportvan",
                  "displayName": "Sportvan"
                },
                {
                  "slug": "ss",
                  "displayName": "SS"
                },
                {
                  "slug": "ssr",
                  "displayName": "SSR"
                },
                {
                  "slug": "trax",
                  "displayName": "Trax"
                },
                {
                  "slug": "venture-cargo",
                  "displayName": "Venture Cargo"
                }
              ]
            },
            {
              "slug": "chrysler",
              "displayName": "Chrysler",
              "models": [
                {
                  "slug": "200",
                  "displayName": "200"
                },
                {
                  "slug": "300",
                  "displayName": "300"
                },
                {
                  "slug": "300m",
                  "displayName": "300M"
                },
                {
                  "slug": "airflow",
                  "displayName": "Airflow"
                },
                {
                  "slug": "airstream",
                  "displayName": "Airstream"
                },
                {
                  "slug": "aspen",
                  "displayName": "Aspen"
                },
                {
                  "slug": "cirrus",
                  "displayName": "Cirrus"
                },
                {
                  "slug": "concorde",
                  "displayName": "Concorde"
                },
                {
                  "slug": "cordoba",
                  "displayName": "Cordoba"
                },
                {
                  "slug": "crossfire",
                  "displayName": "Crossfire"
                },
                {
                  "slug": "daytona",
                  "displayName": "Daytona"
                },
                {
                  "slug": "es",
                  "displayName": "ES"
                },
                {
                  "slug": "fifth-avenue",
                  "displayName": "Fifth Avenue"
                },
                {
                  "slug": "gs",
                  "displayName": "GS"
                },
                {
                  "slug": "imperial",
                  "displayName": "Imperial"
                },
                {
                  "slug": "lebaron",
                  "displayName": "LeBaron"
                },
                {
                  "slug": "lhs",
                  "displayName": "LHS"
                },
                {
                  "slug": "neon",
                  "displayName": "Neon"
                },
                {
                  "slug": "new-yorker",
                  "displayName": "New Yorker"
                },
                {
                  "slug": "newport",
                  "displayName": "Newport"
                },
                {
                  "slug": "pacifica",
                  "displayName": "Pacifica"
                },
                {
                  "slug": "prowler",
                  "displayName": "Prowler"
                },
                {
                  "slug": "pt-cruiser",
                  "displayName": "PT Cruiser"
                },
                {
                  "slug": "saratoga",
                  "displayName": "Saratoga"
                },
                {
                  "slug": "sebring",
                  "displayName": "Sebring"
                },
                {
                  "slug": "stratus",
                  "displayName": "Stratus"
                },
                {
                  "slug": "town-and-country",
                  "displayName": "Town and Country"
                },
                {
                  "slug": "voyager",
                  "displayName": "Voyager"
                },
                {
                  "slug": "vision",
                  "displayName": "Vision"
                },
                {
                  "slug": "windsor",
                  "displayName": "Windsor"
                },
                {
                  "slug": "horizon",
                  "displayName": "Horizon"
                },
                {
                  "slug": "avenger",
                  "displayName": "Avenger"
                },
                {
                  "slug": "pacifica-hybrid",
                  "displayName": "Pacifica Hybrid"
                },
                {
                  "slug": "town-and-country",
                  "displayName": "Town & Country"
                }
              ]
            },
            {
              "slug": "citroen",
              "displayName": "Citroen",
              "models": [
                {
                  "slug": "2cv",
                  "displayName": "2CV"
                },
                {
                  "slug": "ami",
                  "displayName": "Ami"
                },
                {
                  "slug": "ds",
                  "displayName": "DS"
                },
                {
                  "slug": "gs",
                  "displayName": "GS"
                },
                {
                  "slug": "sm",
                  "displayName": "SM"
                },
                {
                  "slug": "traction-avant",
                  "displayName": "Traction Avant"
                }
              ]
            },
            {
              "slug": "dacia",
              "displayName": "Dacia",
              "models": [
                {
                  "slug": "duster",
                  "displayName": "Duster"
                }
              ]
            },
            {
              "slug": "daewoo",
              "displayName": "Daewoo",
              "models": [
                {
                  "slug": "kalos",
                  "displayName": "Kalos"
                },
                {
                  "slug": "lacetti-premiere",
                  "displayName": "Lacetti Premiere"
                },
                {
                  "slug": "lanos",
                  "displayName": "Lanos"
                },
                {
                  "slug": "leganza",
                  "displayName": "Leganza"
                },
                {
                  "slug": "lemans",
                  "displayName": "LeMans"
                },
                {
                  "slug": "racer",
                  "displayName": "Racer"
                },
                {
                  "slug": "nubira",
                  "displayName": "Nubira"
                },
                {
                  "slug": "korando",
                  "displayName": "Korando"
                }
              ]
            },
            {
              "slug": "daf",
              "displayName": "DAF",
              "models": [
                {
                  "slug": "600",
                  "displayName": "600"
                }
              ]
            },
            {
              "slug": "daihatsu",
              "displayName": "Daihatsu",
              "models": [
                {
                  "slug": "charade",
                  "displayName": "Charade"
                },
                {
                  "slug": "rocky",
                  "displayName": "Rocky"
                }
              ]
            },
            {
              "slug": "datsun",
              "displayName": "Datsun",
              "models": [
                {
                  "slug": "210",
                  "displayName": "210"
                },
                {
                  "slug": "211",
                  "displayName": "211"
                },
                {
                  "slug": "240z",
                  "displayName": "240Z"
                },
                {
                  "slug": "260z",
                  "displayName": "260Z"
                },
                {
                  "slug": "280z",
                  "displayName": "280Z"
                },
                {
                  "slug": "280zx",
                  "displayName": "280ZX"
                },
                {
                  "slug": "b10",
                  "displayName": "B10"
                },
                {
                  "slug": "1000",
                  "displayName": "1000"
                },
                {
                  "slug": "b110",
                  "displayName": "B110"
                },
                {
                  "slug": "1200",
                  "displayName": "1200"
                },
                {
                  "slug": "b210",
                  "displayName": "B210"
                },
                {
                  "slug": "bluebird",
                  "displayName": "Bluebird"
                },
                {
                  "slug": "sunny",
                  "displayName": "Sunny"
                },
                {
                  "slug": "210",
                  "displayName": "210"
                },
                {
                  "slug": "truck",
                  "displayName": "Truck"
                },
                {
                  "slug": "violet-710",
                  "displayName": "Violet 710"
                },
                {
                  "slug": "stanza-510",
                  "displayName": "Stanza 510"
                }
              ]
            },
            {
              "slug": "de-tomaso",
              "displayName": "De Tomaso",
              "models": [
                {
                  "slug": "mangusta",
                  "displayName": "Mangusta"
                },
                {
                  "slug": "pantera",
                  "displayName": "Pantera"
                }
              ]
            },
            {
              "slug": "delorean",
              "displayName": "DeLorean",
              "models": [
                {
                  "slug": "dmc-12",
                  "displayName": "DMC-12"
                }
              ]
            },
            {
              "slug": "desoto",
              "displayName": "DeSoto",
              "models": [
                {
                  "slug": "adventurer",
                  "displayName": "Adventurer"
                },
                {
                  "slug": "airflow",
                  "displayName": "Airflow"
                },
                {
                  "slug": "airstream",
                  "displayName": "Airstream"
                },
                {
                  "slug": "custom",
                  "displayName": "Custom"
                },
                {
                  "slug": "deluxe",
                  "displayName": "Deluxe"
                },
                {
                  "slug": "firedome",
                  "displayName": "Firedome"
                },
                {
                  "slug": "fireflite",
                  "displayName": "Fireflite"
                },
                {
                  "slug": "firesweep",
                  "displayName": "Firesweep"
                },
                {
                  "slug": "powermaster",
                  "displayName": "Powermaster"
                },
                {
                  "slug": "series-k-sa",
                  "displayName": "Series K-SA"
                },
                {
                  "slug": "series-s",
                  "displayName": "Series S"
                },
                {
                  "slug": "series-sc-sd",
                  "displayName": "Series SC-SD"
                }
              ]
            },
            {
              "slug": "dodge",
              "displayName": "Dodge",
              "models": [
                {
                  "slug": "330",
                  "displayName": "330"
                },
                {
                  "slug": "400",
                  "displayName": "400"
                },
                {
                  "slug": "440",
                  "displayName": "440"
                },
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "880",
                  "displayName": "880"
                },
                {
                  "slug": "a100",
                  "displayName": "A100"
                },
                {
                  "slug": "aries",
                  "displayName": "Aries"
                },
                {
                  "slug": "aspen",
                  "displayName": "Aspen"
                },
                {
                  "slug": "avenger",
                  "displayName": "Avenger"
                },
                {
                  "slug": "caliber",
                  "displayName": "Caliber"
                },
                {
                  "slug": "caravan",
                  "displayName": "Caravan"
                },
                {
                  "slug": "challenger",
                  "displayName": "Challenger"
                },
                {
                  "slug": "charger",
                  "displayName": "Charger"
                },
                {
                  "slug": "colt",
                  "displayName": "Colt"
                },
                {
                  "slug": "coronet",
                  "displayName": "Coronet"
                },
                {
                  "slug": "custom-royal",
                  "displayName": "Custom Royal"
                },
                {
                  "slug": "d50",
                  "displayName": "D50"
                },
                {
                  "slug": "dakota",
                  "displayName": "Dakota"
                },
                {
                  "slug": "dart",
                  "displayName": "Dart"
                },
                {
                  "slug": "daytona",
                  "displayName": "Daytona"
                },
                {
                  "slug": "diplomat",
                  "displayName": "Diplomat"
                },
                {
                  "slug": "d-series",
                  "displayName": "D-Series"
                },
                {
                  "slug": "durango",
                  "displayName": "Durango"
                },
                {
                  "slug": "dynasty",
                  "displayName": "Dynasty"
                },
                {
                  "slug": "intrepid",
                  "displayName": "Intrepid"
                },
                {
                  "slug": "journey",
                  "displayName": "Journey"
                },
                {
                  "slug": "la-femme",
                  "displayName": "La Femme"
                },
                {
                  "slug": "magnum",
                  "displayName": "Magnum"
                },
                {
                  "slug": "matador",
                  "displayName": "Matador"
                },
                {
                  "slug": "meadowbrook",
                  "displayName": "Meadowbrook"
                },
                {
                  "slug": "mirada",
                  "displayName": "Mirada"
                },
                {
                  "slug": "monaco",
                  "displayName": "Monaco"
                },
                {
                  "slug": "neon",
                  "displayName": "Neon"
                },
                {
                  "slug": "nitro",
                  "displayName": "Nitro"
                },
                {
                  "slug": "omni",
                  "displayName": "Omni"
                },
                {
                  "slug": "omni-024",
                  "displayName": "Omni 024"
                },
                {
                  "slug": "polara",
                  "displayName": "Polara"
                },
                {
                  "slug": "ram",
                  "displayName": "Ram"
                },
                {
                  "slug": "ram-van",
                  "displayName": "Ram Van"
                },
                {
                  "slug": "ramcharger",
                  "displayName": "Ramcharger"
                },
                {
                  "slug": "rampage",
                  "displayName": "Rampage"
                },
                {
                  "slug": "royal",
                  "displayName": "Royal"
                },
                {
                  "slug": "shadow",
                  "displayName": "Shadow"
                },
                {
                  "slug": "spirit",
                  "displayName": "Spirit"
                },
                {
                  "slug": "st-regis",
                  "displayName": "St. Regis"
                },
                {
                  "slug": "stealth",
                  "displayName": "Stealth"
                },
                {
                  "slug": "stratus",
                  "displayName": "Stratus"
                },
                {
                  "slug": "super-bee",
                  "displayName": "Super Bee"
                },
                {
                  "slug": "tradesman",
                  "displayName": "Tradesman"
                },
                {
                  "slug": "viper",
                  "displayName": "Viper"
                },
                {
                  "slug": "grand-caravan",
                  "displayName": "Grand Caravan"
                },
                {
                  "slug": "ram-1500-pickup",
                  "displayName": "Ram 1500 Pickup"
                },
                {
                  "slug": "ram-2500-pickup",
                  "displayName": "Ram 2500 Pickup"
                },
                {
                  "slug": "ram-3500-pickup",
                  "displayName": "Ram 3500 Pickup"
                },
                {
                  "slug": "ram-pickup",
                  "displayName": "Ram Pickup"
                },
                {
                  "slug": "ram-srt-10",
                  "displayName": "Ram SRT-10"
                },
                {
                  "slug": "ram-wagon",
                  "displayName": "Ram Wagon"
                },
                {
                  "slug": "sprinter",
                  "displayName": "Sprinter"
                },
                {
                  "slug": "sprinter-van",
                  "displayName": "Sprinter Van"
                },
                {
                  "slug": "sprinter-wagon",
                  "displayName": "Sprinter Wagon"
                }
              ]
            },
            {
              "slug": "eagle",
              "displayName": "Eagle",
              "models": [
                {
                  "slug": "medallion",
                  "displayName": "Medallion"
                },
                {
                  "slug": "premier",
                  "displayName": "Premier"
                },
                {
                  "slug": "summit",
                  "displayName": "Summit"
                },
                {
                  "slug": "summit-wagon",
                  "displayName": "Summit Wagon"
                },
                {
                  "slug": "talon",
                  "displayName": "Talon"
                },
                {
                  "slug": "vision",
                  "displayName": "Vision"
                },
                {
                  "slug": "vista",
                  "displayName": "Vista"
                },
                {
                  "slug": "vista-wagon",
                  "displayName": "Vista Wagon"
                },
                {
                  "slug": "wagon",
                  "displayName": "Wagon"
                }
              ]
            },
            {
              "slug": "edsel",
              "displayName": "Edsel",
              "models": [
                {
                  "slug": "bermuda",
                  "displayName": "Bermuda"
                },
                {
                  "slug": "citation",
                  "displayName": "Citation"
                },
                {
                  "slug": "corsair",
                  "displayName": "Corsair"
                },
                {
                  "slug": "pacer",
                  "displayName": "Pacer"
                },
                {
                  "slug": "ranger",
                  "displayName": "Ranger"
                },
                {
                  "slug": "roundup",
                  "displayName": "Roundup"
                },
                {
                  "slug": "villager",
                  "displayName": "Villager"
                }
              ]
            },
            {
              "slug": "ferrari",
              "displayName": "Ferrari",
              "models": [
                {
                  "slug": "348",
                  "displayName": "348"
                },
                {
                  "slug": "360",
                  "displayName": "360"
                },
                {
                  "slug": "488",
                  "displayName": "488"
                },
                {
                  "slug": "208",
                  "displayName": "208"
                },
                {
                  "slug": "308",
                  "displayName": "308"
                },
                {
                  "slug": "328",
                  "displayName": "328"
                },
                {
                  "slug": "456-gt",
                  "displayName": "456 GT"
                },
                {
                  "slug": "456-m-gt",
                  "displayName": "456 M GT"
                },
                {
                  "slug": "458-italia",
                  "displayName": "458 Italia"
                },
                {
                  "slug": "550-m-maranello",
                  "displayName": "550 M Maranello"
                },
                {
                  "slug": "575-m-maranello",
                  "displayName": "575 M Maranello"
                },
                {
                  "slug": "599-gtb-fiorano",
                  "displayName": "599 GTB Fiorano"
                },
                {
                  "slug": "612-scaglietti",
                  "displayName": "612 Scaglietti"
                },
                {
                  "slug": "california",
                  "displayName": "California"
                },
                {
                  "slug": "california-t",
                  "displayName": "California T"
                },
                {
                  "slug": "enzo",
                  "displayName": "Enzo"
                },
                {
                  "slug": "f12-berlinetta",
                  "displayName": "F12 Berlinetta"
                },
                {
                  "slug": "f355",
                  "displayName": "F355"
                },
                {
                  "slug": "f40",
                  "displayName": "F40"
                },
                {
                  "slug": "f430",
                  "displayName": "F430"
                },
                {
                  "slug": "f50",
                  "displayName": "F50"
                },
                {
                  "slug": "ff",
                  "displayName": "FF"
                },
                {
                  "slug": "gtc4lusso",
                  "displayName": "GTC4Lusso"
                },
                {
                  "slug": "laferrari",
                  "displayName": "LaFerrari"
                },
                {
                  "slug": "mondial",
                  "displayName": "Mondial"
                },
                {
                  "slug": "testarossa-512",
                  "displayName": "Testarossa 512"
                },
                {
                  "slug": "456",
                  "displayName": "456"
                },
                {
                  "slug": "456m",
                  "displayName": "456M"
                },
                {
                  "slug": "458-speciale",
                  "displayName": "458 Speciale"
                },
                {
                  "slug": "458-speciale-a",
                  "displayName": "458 Speciale A"
                },
                {
                  "slug": "458-spider",
                  "displayName": "458 Spider"
                },
                {
                  "slug": "488-gtb",
                  "displayName": "488 GTB"
                },
                {
                  "slug": "488-spider",
                  "displayName": "488 Spider"
                },
                {
                  "slug": "512-tr",
                  "displayName": "512 TR"
                },
                {
                  "slug": "550-maranello",
                  "displayName": "550 Maranello"
                },
                {
                  "slug": "575m-maranello",
                  "displayName": "575M Maranello"
                },
                {
                  "slug": "599",
                  "displayName": "599"
                },
                {
                  "slug": "612",
                  "displayName": "612"
                },
                {
                  "slug": "812",
                  "displayName": "812"
                },
                {
                  "slug": "f12berlinetta",
                  "displayName": "F12berlinetta"
                },
                {
                  "slug": "superamerica",
                  "displayName": "Superamerica"
                }
              ]
            },
            {
              "slug": "fiat",
              "displayName": "Fiat",
              "models": [
                {
                  "slug": "124",
                  "displayName": "124"
                },
                {
                  "slug": "128",
                  "displayName": "128"
                },
                {
                  "slug": "131",
                  "displayName": "131"
                },
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "850",
                  "displayName": "850"
                },
                {
                  "slug": "1100",
                  "displayName": "1100"
                },
                {
                  "slug": "1100",
                  "displayName": "1100"
                },
                {
                  "slug": "1200",
                  "displayName": "1200"
                },
                {
                  "slug": "124-coupe",
                  "displayName": "124 Coupé"
                },
                {
                  "slug": "124-spider",
                  "displayName": "124 Spider"
                },
                {
                  "slug": "1300-1500",
                  "displayName": "1300 / 1500"
                },
                {
                  "slug": "1800",
                  "displayName": "1800"
                },
                {
                  "slug": "500-topolino",
                  "displayName": "500 Topolino"
                },
                {
                  "slug": "500l",
                  "displayName": "500L"
                },
                {
                  "slug": "500x",
                  "displayName": "500X"
                },
                {
                  "slug": "coupe",
                  "displayName": "Coupé"
                },
                {
                  "slug": "nuova-500",
                  "displayName": "Nuova 500"
                },
                {
                  "slug": "ritmo",
                  "displayName": "Ritmo"
                },
                {
                  "slug": "x19",
                  "displayName": "X1/9"
                },
                {
                  "slug": "500",
                  "displayName": "500"
                },
                {
                  "slug": "500c",
                  "displayName": "500c"
                },
                {
                  "slug": "500e",
                  "displayName": "500e"
                }
              ]
            },
            {
              "slug": "fisker",
              "displayName": "Fisker",
              "models": [
                {
                  "slug": "karma",
                  "displayName": "Karma"
                }
              ]
            },
            {
              "slug": "ford",
              "displayName": "Ford",
              "models": [
                {
                  "slug": "300",
                  "displayName": "300"
                },
                {
                  "slug": "deluxe",
                  "displayName": "Deluxe"
                },
                {
                  "slug": "mainline",
                  "displayName": "Mainline"
                },
                {
                  "slug": "aerostar",
                  "displayName": "Aerostar"
                },
                {
                  "slug": "aspire",
                  "displayName": "Aspire"
                },
                {
                  "slug": "bronco",
                  "displayName": "Bronco"
                },
                {
                  "slug": "bronco-ii",
                  "displayName": "Bronco II"
                },
                {
                  "slug": "capri",
                  "displayName": "Capri"
                },
                {
                  "slug": "c-max",
                  "displayName": "C-MAX"
                },
                {
                  "slug": "contour",
                  "displayName": "Contour"
                },
                {
                  "slug": "corsair",
                  "displayName": "Corsair"
                },
                {
                  "slug": "cougar",
                  "displayName": "Cougar"
                },
                {
                  "slug": "country-squire",
                  "displayName": "Country Squire"
                },
                {
                  "slug": "crown-victoria",
                  "displayName": "Crown Victoria"
                },
                {
                  "slug": "custom-500",
                  "displayName": "Custom 500"
                },
                {
                  "slug": "durango",
                  "displayName": "Durango"
                },
                {
                  "slug": "edge",
                  "displayName": "Edge"
                },
                {
                  "slug": "escape",
                  "displayName": "Escape"
                },
                {
                  "slug": "escort",
                  "displayName": "Escort"
                },
                {
                  "slug": "e-series",
                  "displayName": "E-Series"
                },
                {
                  "slug": "excursion",
                  "displayName": "Excursion"
                },
                {
                  "slug": "exp",
                  "displayName": "EXP"
                },
                {
                  "slug": "expedition",
                  "displayName": "Expedition"
                },
                {
                  "slug": "explorer",
                  "displayName": "Explorer"
                },
                {
                  "slug": "explorer-sport-trac",
                  "displayName": "Explorer Sport Trac"
                },
                {
                  "slug": "fairlane",
                  "displayName": "Fairlane"
                },
                {
                  "slug": "fairmont",
                  "displayName": "Fairmont"
                },
                {
                  "slug": "falcon",
                  "displayName": "Falcon"
                },
                {
                  "slug": "falcon-ranchero",
                  "displayName": "Falcon Ranchero"
                },
                {
                  "slug": "festiva",
                  "displayName": "Festiva"
                },
                {
                  "slug": "fiesta",
                  "displayName": "Fiesta"
                },
                {
                  "slug": "five-hundred",
                  "displayName": "Five Hundred"
                },
                {
                  "slug": "flex",
                  "displayName": "Flex"
                },
                {
                  "slug": "focus",
                  "displayName": "Focus"
                },
                {
                  "slug": "freestar",
                  "displayName": "Freestar"
                },
                {
                  "slug": "freestyle",
                  "displayName": "Freestyle"
                },
                {
                  "slug": "f-1",
                  "displayName": "F-1"
                },
                {
                  "slug": "f-2",
                  "displayName": "F-2"
                },
                {
                  "slug": "f-3",
                  "displayName": "F-3"
                },
                {
                  "slug": "f-4",
                  "displayName": "F-4"
                },
                {
                  "slug": "f-5",
                  "displayName": "F-5"
                },
                {
                  "slug": "f-6",
                  "displayName": "F-6"
                },
                {
                  "slug": "f-7",
                  "displayName": "F-7"
                },
                {
                  "slug": "f-8",
                  "displayName": "F-8"
                },
                {
                  "slug": "f-100",
                  "displayName": "F-100"
                },
                {
                  "slug": "f-110",
                  "displayName": "F-110"
                },
                {
                  "slug": "f-150",
                  "displayName": "F-150"
                },
                {
                  "slug": "f-250",
                  "displayName": "F-250"
                },
                {
                  "slug": "f-260",
                  "displayName": "F-260"
                },
                {
                  "slug": "f-350",
                  "displayName": "F-350"
                },
                {
                  "slug": "f-360",
                  "displayName": "F-360"
                },
                {
                  "slug": "f-600",
                  "displayName": "F-600"
                },
                {
                  "slug": "f-700",
                  "displayName": "F-700"
                },
                {
                  "slug": "f-superduty",
                  "displayName": "F-SuperDuty"
                },
                {
                  "slug": "fusion",
                  "displayName": "Fusion"
                },
                {
                  "slug": "galaxie",
                  "displayName": "Galaxie"
                },
                {
                  "slug": "gran-torino",
                  "displayName": "Gran Torino"
                },
                {
                  "slug": "granada",
                  "displayName": "Granada"
                },
                {
                  "slug": "gt",
                  "displayName": "GT"
                },
                {
                  "slug": "gt-ii",
                  "displayName": "GT II"
                },
                {
                  "slug": "ltd",
                  "displayName": "LTD"
                },
                {
                  "slug": "ltd-crown-victoria",
                  "displayName": "LTD Crown Victoria"
                },
                {
                  "slug": "ltd-fox",
                  "displayName": "LTD Fox"
                },
                {
                  "slug": "ltd-ii",
                  "displayName": "LTD II"
                },
                {
                  "slug": "maverick",
                  "displayName": "Maverick"
                },
                {
                  "slug": "mustang",
                  "displayName": "Mustang"
                },
                {
                  "slug": "pilot",
                  "displayName": "Pilot"
                },
                {
                  "slug": "pinto",
                  "displayName": "Pinto"
                },
                {
                  "slug": "probe",
                  "displayName": "Probe"
                },
                {
                  "slug": "ranchero",
                  "displayName": "Ranchero"
                },
                {
                  "slug": "ranger",
                  "displayName": "Ranger"
                },
                {
                  "slug": "scorpio",
                  "displayName": "Scorpio"
                },
                {
                  "slug": "sierra",
                  "displayName": "Sierra"
                },
                {
                  "slug": "taurus",
                  "displayName": "Taurus"
                },
                {
                  "slug": "taurus-x",
                  "displayName": "Taurus X"
                },
                {
                  "slug": "tempo",
                  "displayName": "Tempo"
                },
                {
                  "slug": "thunderbird",
                  "displayName": "Thunderbird"
                },
                {
                  "slug": "torino",
                  "displayName": "Torino"
                },
                {
                  "slug": "transit",
                  "displayName": "Transit"
                },
                {
                  "slug": "transit-connect",
                  "displayName": "Transit Connect"
                },
                {
                  "slug": "windstar",
                  "displayName": "Windstar"
                },
                {
                  "slug": "aerostar-van",
                  "displayName": "Aerostar Van"
                },
                {
                  "slug": "club-wagon",
                  "displayName": "Club Wagon"
                },
                {
                  "slug": "e-series-cutaway",
                  "displayName": "E-Series Cutaway"
                },
                {
                  "slug": "e-series-econoline-van",
                  "displayName": "E-Series Econoline Van"
                },
                {
                  "slug": "e-series-econoline-wagon",
                  "displayName": "E-Series Econoline Wagon"
                },
                {
                  "slug": "e-series-stripped-chassis",
                  "displayName": "E-Series Stripped Chassis"
                },
                {
                  "slug": "econoline-van",
                  "displayName": "Econoline Van"
                },
                {
                  "slug": "econoline-wagon",
                  "displayName": "Econoline Wagon"
                },
                {
                  "slug": "ecosport",
                  "displayName": "EcoSport"
                },
                {
                  "slug": "explorer-sport",
                  "displayName": "Explorer Sport"
                },
                {
                  "slug": "f-150-heritage",
                  "displayName": "F-150 Heritage"
                },
                {
                  "slug": "f-250-super-duty",
                  "displayName": "F-250 Super Duty"
                },
                {
                  "slug": "f-350-sd-chassis-cab",
                  "displayName": "F-350 SD Chassis Cab"
                },
                {
                  "slug": "f-350-super-duty",
                  "displayName": "F-350 Super Duty"
                },
                {
                  "slug": "f-350-super-duty-chassis-cab",
                  "displayName": "F-350 Super Duty Chassis Cab"
                },
                {
                  "slug": "f-450-super-duty",
                  "displayName": "F-450 Super Duty"
                },
                {
                  "slug": "f-450-super-duty-chassis-cab",
                  "displayName": "F-450 Super Duty Chassis Cab"
                },
                {
                  "slug": "f-550-super-duty-chassis-cab",
                  "displayName": "F-550 Super Duty Chassis Cab"
                },
                {
                  "slug": "freestar-van",
                  "displayName": "Freestar van"
                },
                {
                  "slug": "fusion-energi",
                  "displayName": "Fusion Energi"
                },
                {
                  "slug": "fusion-hybrid",
                  "displayName": "Fusion Hybrid"
                },
                {
                  "slug": "transit-chassis-cab",
                  "displayName": "Transit Chassis Cab"
                },
                {
                  "slug": "transit-cutaway",
                  "displayName": "Transit Cutaway"
                },
                {
                  "slug": "transit-passenger-van",
                  "displayName": "Transit Passenger Van"
                },
                {
                  "slug": "transit-van",
                  "displayName": "Transit Van"
                },
                {
                  "slug": "transit-wagon",
                  "displayName": "Transit Wagon"
                },
                {
                  "slug": "windstar-van",
                  "displayName": "Windstar Van"
                }
              ]
            },
            {
              "slug": "geo",
              "displayName": "Geo",
              "models": [
                {
                  "slug": "metro",
                  "displayName": "Metro"
                },
                {
                  "slug": "prizm",
                  "displayName": "Prizm"
                },
                {
                  "slug": "spectrum",
                  "displayName": "Spectrum"
                },
                {
                  "slug": "storm",
                  "displayName": "Storm"
                },
                {
                  "slug": "tracker",
                  "displayName": "Tracker"
                }
              ]
            },
            {
              "slug": "gmc",
              "displayName": "GMC",
              "models": [
                {
                  "slug": "acadia",
                  "displayName": "Acadia"
                },
                {
                  "slug": "ck",
                  "displayName": "C/K"
                },
                {
                  "slug": "caballero",
                  "displayName": "Caballero"
                },
                {
                  "slug": "canyon",
                  "displayName": "Canyon"
                },
                {
                  "slug": "envoy",
                  "displayName": "Envoy"
                },
                {
                  "slug": "g-series",
                  "displayName": "G-Series"
                },
                {
                  "slug": "jimmy",
                  "displayName": "Jimmy"
                },
                {
                  "slug": "s-15-sonoma",
                  "displayName": "S-15 Sonoma"
                },
                {
                  "slug": "safari",
                  "displayName": "Safari"
                },
                {
                  "slug": "savana",
                  "displayName": "Savana"
                },
                {
                  "slug": "sierra",
                  "displayName": "Sierra"
                },
                {
                  "slug": "sonoma",
                  "displayName": "Sonoma"
                },
                {
                  "slug": "spirit",
                  "displayName": "Spirit"
                },
                {
                  "slug": "suburban",
                  "displayName": "Suburban"
                },
                {
                  "slug": "terrain",
                  "displayName": "Terrain"
                },
                {
                  "slug": "typhoon-version-of-jimmy",
                  "displayName": "Typhoon (version of Jimmy)"
                },
                {
                  "slug": "yukon",
                  "displayName": "Yukon"
                },
                {
                  "slug": "yukon-xl",
                  "displayName": "Yukon XL"
                },
                {
                  "slug": "acadia-limited",
                  "displayName": "Acadia Limited"
                },
                {
                  "slug": "classic-sierra-1500",
                  "displayName": "Classic Sierra 1500"
                },
                {
                  "slug": "classic-sierra-2500hd",
                  "displayName": "Classic Sierra 2500HD"
                },
                {
                  "slug": "classic-sierra-3500",
                  "displayName": "Classic Sierra 3500"
                },
                {
                  "slug": "classic-sierra-denali",
                  "displayName": "Classic Sierra Denali"
                },
                {
                  "slug": "envoy-xl",
                  "displayName": "Envoy XL"
                },
                {
                  "slug": "envoy-xuv",
                  "displayName": "Envoy XUV"
                },
                {
                  "slug": "rally",
                  "displayName": "Rally"
                },
                {
                  "slug": "safari-cargo",
                  "displayName": "Safari Cargo"
                },
                {
                  "slug": "savana-cargo",
                  "displayName": "Savana Cargo"
                },
                {
                  "slug": "savana-cutaway",
                  "displayName": "Savana Cutaway"
                },
                {
                  "slug": "savana-passenger",
                  "displayName": "Savana Passenger"
                },
                {
                  "slug": "sierra-1500",
                  "displayName": "Sierra 1500"
                },
                {
                  "slug": "sierra-1500-denali",
                  "displayName": "Sierra 1500 Denali"
                },
                {
                  "slug": "sierra-1500-limited",
                  "displayName": "Sierra 1500 Limited"
                },
                {
                  "slug": "sierra-1500hd",
                  "displayName": "Sierra 1500HD"
                },
                {
                  "slug": "sierra-2500",
                  "displayName": "Sierra 2500"
                },
                {
                  "slug": "sierra-2500-denali-hd",
                  "displayName": "Sierra 2500 Denali HD"
                },
                {
                  "slug": "sierra-2500hd",
                  "displayName": "Sierra 2500HD"
                },
                {
                  "slug": "sierra-3500",
                  "displayName": "Sierra 3500"
                },
                {
                  "slug": "sierra-3500-chassis-cab",
                  "displayName": "Sierra 3500 Chassis Cab"
                },
                {
                  "slug": "sierra-3500-denali-hd",
                  "displayName": "Sierra 3500 Denali HD"
                },
                {
                  "slug": "sierra-3500hd",
                  "displayName": "Sierra 3500HD"
                },
                {
                  "slug": "sierra-classic-1500",
                  "displayName": "Sierra Classic 1500"
                },
                {
                  "slug": "sierra-classic-1500hd",
                  "displayName": "Sierra Classic 1500HD"
                },
                {
                  "slug": "sierra-classic-2500hd",
                  "displayName": "Sierra Classic 2500HD"
                },
                {
                  "slug": "sierra-classic-3500",
                  "displayName": "Sierra Classic 3500"
                },
                {
                  "slug": "sierra-classic-3500-chassis-cab",
                  "displayName": "Sierra Classic 3500 Chassis Cab"
                },
                {
                  "slug": "sierra-classic-denali",
                  "displayName": "Sierra Classic Denali"
                }
              ]
            },
            {
              "slug": "hillman",
              "displayName": "Hillman",
              "models": [
                {
                  "slug": "avenger",
                  "displayName": "Avenger"
                }
              ]
            },
            {
              "slug": "honda",
              "displayName": "Honda",
              "models": [
                {
                  "slug": "accord",
                  "displayName": "Accord"
                },
                {
                  "slug": "accord-crosstour",
                  "displayName": "Accord Crosstour"
                },
                {
                  "slug": "civic",
                  "displayName": "Civic"
                },
                {
                  "slug": "cr-v",
                  "displayName": "CR-V"
                },
                {
                  "slug": "crx",
                  "displayName": "CRX"
                },
                {
                  "slug": "crx-crx-del-sol",
                  "displayName": "CRX (CRX del Sol)"
                },
                {
                  "slug": "cr-z",
                  "displayName": "CR-Z"
                },
                {
                  "slug": "element",
                  "displayName": "Element"
                },
                {
                  "slug": "insight",
                  "displayName": "Insight"
                },
                {
                  "slug": "integra",
                  "displayName": "Integra"
                },
                {
                  "slug": "jazz-fit",
                  "displayName": "Jazz / Fit"
                },
                {
                  "slug": "legend",
                  "displayName": "Legend"
                },
                {
                  "slug": "n600",
                  "displayName": "N600"
                },
                {
                  "slug": "nsx",
                  "displayName": "NSX"
                },
                {
                  "slug": "odyssey-north-america",
                  "displayName": "Odyssey (North America)"
                },
                {
                  "slug": "passport",
                  "displayName": "Passport"
                },
                {
                  "slug": "pilot",
                  "displayName": "Pilot"
                },
                {
                  "slug": "prelude",
                  "displayName": "Prelude"
                },
                {
                  "slug": "ridgeline",
                  "displayName": "Ridgeline"
                },
                {
                  "slug": "s2000",
                  "displayName": "S2000"
                },
                {
                  "slug": "vezel-hr-v",
                  "displayName": "Vezel / HR-V"
                },
                {
                  "slug": "z600",
                  "displayName": "Z600"
                },
                {
                  "slug": "z",
                  "displayName": "Z"
                },
                {
                  "slug": "civic-hatchback",
                  "displayName": "Civic Hatchback"
                },
                {
                  "slug": "clarity",
                  "displayName": "Clarity"
                },
                {
                  "slug": "crosstour",
                  "displayName": "Crosstour"
                },
                {
                  "slug": "del-sol",
                  "displayName": "Del Sol"
                },
                {
                  "slug": "ev-plus",
                  "displayName": "EV Plus"
                },
                {
                  "slug": "fcx-clarity",
                  "displayName": "FCX Clarity"
                },
                {
                  "slug": "fit",
                  "displayName": "Fit"
                },
                {
                  "slug": "hr-v",
                  "displayName": "HR-V"
                },
                {
                  "slug": "odyssey",
                  "displayName": "Odyssey"
                },
                {
                  "slug": "s1999",
                  "displayName": "S1999"
                }
              ]
            },
            {
              "slug": "hudson",
              "displayName": "Hudson",
              "models": [
                {
                  "slug": "commodore",
                  "displayName": "Commodore"
                },
                {
                  "slug": "hornet",
                  "displayName": "Hornet"
                },
                {
                  "slug": "italia",
                  "displayName": "Italia"
                },
                {
                  "slug": "jet",
                  "displayName": "Jet"
                },
                {
                  "slug": "wasp",
                  "displayName": "Wasp"
                }
              ]
            },
            {
              "slug": "hummer",
              "displayName": "Hummer",
              "models": [
                {
                  "slug": "h1",
                  "displayName": "H1"
                },
                {
                  "slug": "h2",
                  "displayName": "H2"
                },
                {
                  "slug": "h3",
                  "displayName": "H3"
                },
                {
                  "slug": "h3t",
                  "displayName": "H3T"
                }
              ]
            },
            {
              "slug": "hyundai",
              "displayName": "Hyundai",
              "models": [
                {
                  "slug": "accent",
                  "displayName": "Accent"
                },
                {
                  "slug": "verna",
                  "displayName": "Verna"
                },
                {
                  "slug": "coupe",
                  "displayName": "Coupé"
                },
                {
                  "slug": "tiburon",
                  "displayName": "Tiburon"
                },
                {
                  "slug": "elantra-avante",
                  "displayName": "Elantra / Avante"
                },
                {
                  "slug": "elantra-avante-xd",
                  "displayName": "Elantra / Avante XD"
                },
                {
                  "slug": "entourage",
                  "displayName": "Entourage"
                },
                {
                  "slug": "equus",
                  "displayName": "Equus"
                },
                {
                  "slug": "excel",
                  "displayName": "Excel"
                },
                {
                  "slug": "genesis",
                  "displayName": "Genesis"
                },
                {
                  "slug": "grandeur-azera",
                  "displayName": "Grandeur / Azera"
                },
                {
                  "slug": "grandeur-xg",
                  "displayName": "Grandeur / XG"
                },
                {
                  "slug": "ix35-tucson",
                  "displayName": "ix35 / Tucson"
                },
                {
                  "slug": "lantra-elantra",
                  "displayName": "Lantra / Elantra"
                },
                {
                  "slug": "lantra-elantra-avante",
                  "displayName": "Lantra / Elantra / Avante"
                },
                {
                  "slug": "matrix",
                  "displayName": "Matrix"
                },
                {
                  "slug": "pony",
                  "displayName": "Pony"
                },
                {
                  "slug": "santa-fe",
                  "displayName": "Santa Fé"
                },
                {
                  "slug": "scoupe",
                  "displayName": "Scoupe"
                },
                {
                  "slug": "sonata",
                  "displayName": "Sonata"
                },
                {
                  "slug": "tucson",
                  "displayName": "Tucson"
                },
                {
                  "slug": "veloster",
                  "displayName": "Veloster"
                },
                {
                  "slug": "veracruz-ix55",
                  "displayName": "Veracruz / ix55"
                },
                {
                  "slug": "azera",
                  "displayName": "Azera"
                },
                {
                  "slug": "elantra",
                  "displayName": "Elantra"
                },
                {
                  "slug": "elantra-coupe",
                  "displayName": "Elantra Coupe"
                },
                {
                  "slug": "elantra-gt",
                  "displayName": "Elantra GT"
                },
                {
                  "slug": "elantra-touring",
                  "displayName": "Elantra Touring"
                },
                {
                  "slug": "genesis-coupe",
                  "displayName": "Genesis Coupe"
                },
                {
                  "slug": "ioniq",
                  "displayName": "Ioniq"
                },
                {
                  "slug": "kona",
                  "displayName": "Kona"
                },
                {
                  "slug": "kona-ev",
                  "displayName": "Kona EV"
                },
                {
                  "slug": "nexo",
                  "displayName": "Nexo"
                },
                {
                  "slug": "palisade",
                  "displayName": "Palisade"
                },
                {
                  "slug": "santa-fe",
                  "displayName": "Santa Fe"
                },
                {
                  "slug": "santa-fe-sport",
                  "displayName": "Santa Fe Sport"
                },
                {
                  "slug": "sonata-hybrid",
                  "displayName": "Sonata Hybrid"
                },
                {
                  "slug": "sonata-plug-in-hybrid",
                  "displayName": "Sonata Plug-in Hybrid"
                },
                {
                  "slug": "veracruz",
                  "displayName": "Veracruz"
                },
                {
                  "slug": "xg300",
                  "displayName": "XG300"
                },
                {
                  "slug": "xg350",
                  "displayName": "XG350"
                }
              ]
            },
            {
              "slug": "imperial",
              "displayName": "Imperial",
              "models": [
                {
                  "slug": "imperial",
                  "displayName": "Imperial"
                }
              ]
            },
            {
              "slug": "infiniti",
              "displayName": "Infiniti",
              "models": [
                {
                  "slug": "ex",
                  "displayName": "EX"
                },
                {
                  "slug": "qx-50",
                  "displayName": "QX 50"
                },
                {
                  "slug": "fx",
                  "displayName": "FX"
                },
                {
                  "slug": "qx-70",
                  "displayName": "QX 70"
                },
                {
                  "slug": "g",
                  "displayName": "G"
                },
                {
                  "slug": "i",
                  "displayName": "I"
                },
                {
                  "slug": "j-30",
                  "displayName": "J 30"
                },
                {
                  "slug": "jx-35",
                  "displayName": "JX 35"
                },
                {
                  "slug": "qx-60",
                  "displayName": "QX 60"
                },
                {
                  "slug": "m",
                  "displayName": "M"
                },
                {
                  "slug": "m-30",
                  "displayName": "M 30"
                },
                {
                  "slug": "q-70",
                  "displayName": "Q 70"
                },
                {
                  "slug": "q-45",
                  "displayName": "Q 45"
                },
                {
                  "slug": "q-30",
                  "displayName": "Q 30"
                },
                {
                  "slug": "qx-30",
                  "displayName": "QX 30"
                },
                {
                  "slug": "q-50",
                  "displayName": "Q 50"
                },
                {
                  "slug": "qx-56",
                  "displayName": "QX 56"
                },
                {
                  "slug": "qx-80",
                  "displayName": "QX 80"
                },
                {
                  "slug": "qx-4",
                  "displayName": "QX 4"
                },
                {
                  "slug": "q40",
                  "displayName": "Q40"
                },
                {
                  "slug": "q60",
                  "displayName": "Q60"
                },
                {
                  "slug": "fx35",
                  "displayName": "FX35"
                },
                {
                  "slug": "fx45",
                  "displayName": "FX45"
                },
                {
                  "slug": "g-convertible",
                  "displayName": "G Convertible"
                },
                {
                  "slug": "g-coupe",
                  "displayName": "G Coupe"
                },
                {
                  "slug": "g-sedan",
                  "displayName": "G Sedan"
                },
                {
                  "slug": "g20",
                  "displayName": "G20"
                },
                {
                  "slug": "g35",
                  "displayName": "G35"
                },
                {
                  "slug": "g35-coupe",
                  "displayName": "G35 Coupe"
                },
                {
                  "slug": "g35-sport-coupe",
                  "displayName": "G35 Sport Coupe"
                },
                {
                  "slug": "i30",
                  "displayName": "I30"
                },
                {
                  "slug": "i35",
                  "displayName": "I35"
                },
                {
                  "slug": "j30",
                  "displayName": "J30"
                },
                {
                  "slug": "jx",
                  "displayName": "JX"
                },
                {
                  "slug": "m45",
                  "displayName": "M45"
                },
                {
                  "slug": "q",
                  "displayName": "Q"
                },
                {
                  "slug": "q45",
                  "displayName": "Q45"
                },
                {
                  "slug": "qx",
                  "displayName": "QX"
                },
                {
                  "slug": "qx3",
                  "displayName": "QX3"
                },
                {
                  "slug": "qx4",
                  "displayName": "QX4"
                },
                {
                  "slug": "qx56",
                  "displayName": "QX56"
                },
                {
                  "slug": "q50",
                  "displayName": "Q50"
                },
                {
                  "slug": "q60-convertible",
                  "displayName": "Q60 Convertible"
                },
                {
                  "slug": "q60-coupe",
                  "displayName": "Q60 Coupe"
                },
                {
                  "slug": "q70",
                  "displayName": "Q70"
                },
                {
                  "slug": "q70l",
                  "displayName": "Q70L"
                },
                {
                  "slug": "qx30",
                  "displayName": "QX30"
                },
                {
                  "slug": "qx50",
                  "displayName": "QX50"
                },
                {
                  "slug": "qx60",
                  "displayName": "QX60"
                },
                {
                  "slug": "qx70",
                  "displayName": "QX70"
                },
                {
                  "slug": "qx80",
                  "displayName": "QX80"
                }
              ]
            },
            {
              "slug": "isdera",
              "displayName": "Isdera",
              "models": [
                {
                  "slug": "spyder",
                  "displayName": "Spyder"
                }
              ]
            },
            {
              "slug": "isuzu",
              "displayName": "Isuzu",
              "models": [
                {
                  "slug": "ascender",
                  "displayName": "Ascender"
                },
                {
                  "slug": "aska",
                  "displayName": "Aska"
                },
                {
                  "slug": "axiom",
                  "displayName": "Axiom"
                },
                {
                  "slug": "faster",
                  "displayName": "Faster"
                },
                {
                  "slug": "gemini",
                  "displayName": "Gemini"
                },
                {
                  "slug": "hombre",
                  "displayName": "Hombre"
                },
                {
                  "slug": "i-series",
                  "displayName": "i-Series"
                },
                {
                  "slug": "oasis",
                  "displayName": "Oasis"
                },
                {
                  "slug": "impulse",
                  "displayName": "Impulse"
                },
                {
                  "slug": "trooper",
                  "displayName": "Trooper"
                },
                {
                  "slug": "vehicross",
                  "displayName": "VehiCROSS"
                },
                {
                  "slug": "rodeo",
                  "displayName": "Rodeo"
                },
                {
                  "slug": "amigo",
                  "displayName": "Amigo"
                },
                {
                  "slug": "i-series",
                  "displayName": "i series"
                },
                {
                  "slug": "pickup",
                  "displayName": "Pickup"
                },
                {
                  "slug": "rodeo-sport",
                  "displayName": "Rodeo Sport"
                }
              ]
            },
            {
              "slug": "jaguar",
              "displayName": "Jaguar",
              "models": [
                {
                  "slug": "420",
                  "displayName": "420"
                },
                {
                  "slug": "daimler-sovereign",
                  "displayName": "Daimler Sovereign"
                },
                {
                  "slug": "c-type",
                  "displayName": "C-Type"
                },
                {
                  "slug": "d-type",
                  "displayName": "D-Type"
                },
                {
                  "slug": "e-type",
                  "displayName": "E-Type"
                },
                {
                  "slug": "f-pace",
                  "displayName": "F-PACE"
                },
                {
                  "slug": "f-type",
                  "displayName": "F-Type"
                },
                {
                  "slug": "mark-i",
                  "displayName": "Mark I"
                },
                {
                  "slug": "mark-ii",
                  "displayName": "Mark II"
                },
                {
                  "slug": "240-340",
                  "displayName": "240 / 340"
                },
                {
                  "slug": "mark-ix",
                  "displayName": "Mark IX"
                },
                {
                  "slug": "mark-v",
                  "displayName": "Mark V"
                },
                {
                  "slug": "mark-vii",
                  "displayName": "Mark VII"
                },
                {
                  "slug": "mark-viii",
                  "displayName": "Mark VIII"
                },
                {
                  "slug": "mark-x",
                  "displayName": "Mark X"
                },
                {
                  "slug": "s-type",
                  "displayName": "S-Type"
                },
                {
                  "slug": "xe",
                  "displayName": "XE"
                },
                {
                  "slug": "xf",
                  "displayName": "XF"
                },
                {
                  "slug": "xj",
                  "displayName": "XJ"
                },
                {
                  "slug": "xk",
                  "displayName": "XK"
                },
                {
                  "slug": "xk8",
                  "displayName": "XK8"
                },
                {
                  "slug": "xkr",
                  "displayName": "XKR"
                },
                {
                  "slug": "xk120",
                  "displayName": "XK120"
                },
                {
                  "slug": "xk140",
                  "displayName": "XK140"
                },
                {
                  "slug": "xk150",
                  "displayName": "XK150"
                },
                {
                  "slug": "xkss",
                  "displayName": "XKSS"
                },
                {
                  "slug": "x-type",
                  "displayName": "X-Type"
                },
                {
                  "slug": "e-pace",
                  "displayName": "E-PACE"
                },
                {
                  "slug": "i-pace",
                  "displayName": "I-PACE"
                },
                {
                  "slug": "xj-series",
                  "displayName": "XJ Series"
                },
                {
                  "slug": "xk-series",
                  "displayName": "XK Series"
                }
              ]
            },
            {
              "slug": "jeep",
              "displayName": "Jeep",
              "models": [
                {
                  "slug": "cherokee",
                  "displayName": "Cherokee"
                },
                {
                  "slug": "liberty",
                  "displayName": "Liberty"
                },
                {
                  "slug": "cj",
                  "displayName": "CJ"
                },
                {
                  "slug": "commander",
                  "displayName": "Commander"
                },
                {
                  "slug": "compass",
                  "displayName": "Compass"
                },
                {
                  "slug": "grand-cherokee",
                  "displayName": "Grand Cherokee"
                },
                {
                  "slug": "grand-wagoneer",
                  "displayName": "Grand Wagoneer"
                },
                {
                  "slug": "patriot",
                  "displayName": "Patriot"
                },
                {
                  "slug": "renegade",
                  "displayName": "Renegade"
                },
                {
                  "slug": "wagoneer",
                  "displayName": "Wagoneer"
                },
                {
                  "slug": "wrangler",
                  "displayName": "Wrangler"
                },
                {
                  "slug": "all-new-compass",
                  "displayName": "All-New Compass"
                },
                {
                  "slug": "all-new-wrangler",
                  "displayName": "All-New Wrangler"
                },
                {
                  "slug": "all-new-wrangler-unlimited",
                  "displayName": "All-New Wrangler Unlimited"
                },
                {
                  "slug": "gladiator",
                  "displayName": "Gladiator"
                },
                {
                  "slug": "wrangler-jk",
                  "displayName": "Wrangler JK"
                },
                {
                  "slug": "wrangler-jk-unlimited",
                  "displayName": "Wrangler JK Unlimited"
                },
                {
                  "slug": "wrangler-unlimited",
                  "displayName": "Wrangler Unlimited"
                }
              ]
            },
            {
              "slug": "jensen",
              "displayName": "Jensen",
              "models": [
                {
                  "slug": "541",
                  "displayName": "541"
                },
                {
                  "slug": "541r",
                  "displayName": "541R"
                },
                {
                  "slug": "541s",
                  "displayName": "541S"
                },
                {
                  "slug": "cv8",
                  "displayName": "CV8"
                },
                {
                  "slug": "ff",
                  "displayName": "FF"
                },
                {
                  "slug": "gt",
                  "displayName": "GT"
                },
                {
                  "slug": "interceptor",
                  "displayName": "Interceptor"
                },
                {
                  "slug": "jensen-healey",
                  "displayName": "Jensen-Healey"
                },
                {
                  "slug": "pw",
                  "displayName": "PW"
                },
                {
                  "slug": "s-type",
                  "displayName": "S-type"
                }
              ]
            },
            {
              "slug": "kia",
              "displayName": "Kia",
              "models": [
                {
                  "slug": "cadenza-k7",
                  "displayName": "Cadenza / K7"
                },
                {
                  "slug": "rondo",
                  "displayName": "Rondo"
                },
                {
                  "slug": "sedona",
                  "displayName": "Sedona"
                },
                {
                  "slug": "cerato-spectra",
                  "displayName": "Cerato / Spectra"
                },
                {
                  "slug": "forte",
                  "displayName": "Forte"
                },
                {
                  "slug": "forte-k3",
                  "displayName": "Forte / K3"
                },
                {
                  "slug": "magentis",
                  "displayName": "Magentis"
                },
                {
                  "slug": "optima",
                  "displayName": "Optima"
                },
                {
                  "slug": "borrego",
                  "displayName": "Borrego"
                },
                {
                  "slug": "amanti",
                  "displayName": "Amanti"
                },
                {
                  "slug": "quoris-k9-k900",
                  "displayName": "Quoris / K9 / K900"
                },
                {
                  "slug": "rio",
                  "displayName": "Rio"
                },
                {
                  "slug": "sephia",
                  "displayName": "Sephia"
                },
                {
                  "slug": "sorento",
                  "displayName": "Sorento"
                },
                {
                  "slug": "soul",
                  "displayName": "Soul"
                },
                {
                  "slug": "sportage",
                  "displayName": "Sportage"
                },
                {
                  "slug": "stinger",
                  "displayName": "Stinger"
                },
                {
                  "slug": "cadenza",
                  "displayName": "Cadenza"
                },
                {
                  "slug": "forte-koup",
                  "displayName": "Forte Koup"
                },
                {
                  "slug": "forte5",
                  "displayName": "Forte5"
                },
                {
                  "slug": "k900",
                  "displayName": "K900"
                },
                {
                  "slug": "new-optima",
                  "displayName": "New Optima"
                },
                {
                  "slug": "rio-5-door",
                  "displayName": "Rio 5-Door"
                },
                {
                  "slug": "spectra",
                  "displayName": "Spectra"
                },
                {
                  "slug": "telluride",
                  "displayName": "Telluride"
                },
                {
                  "slug": "niro",
                  "displayName": "Niro"
                }
              ]
            },
            {
              "slug": "koenigsegg",
              "displayName": "Koenigsegg",
              "models": [
                {
                  "slug": "agera",
                  "displayName": "Agera"
                },
                {
                  "slug": "agera-r",
                  "displayName": "Agera R"
                },
                {
                  "slug": "cc8s",
                  "displayName": "CC8S"
                },
                {
                  "slug": "ccr",
                  "displayName": "CCR"
                },
                {
                  "slug": "ccx",
                  "displayName": "CCX"
                },
                {
                  "slug": "ccxr",
                  "displayName": "CCXR"
                },
                {
                  "slug": "one1",
                  "displayName": "ONE:1"
                },
                {
                  "slug": "regera",
                  "displayName": "Regera"
                }
              ]
            },
            {
              "slug": "lagonda",
              "displayName": "Lagonda",
              "models": [
                {
                  "slug": "rapide",
                  "displayName": "Rapide"
                }
              ]
            },
            {
              "slug": "lamborghini",
              "displayName": "Lamborghini",
              "models": [
                {
                  "slug": "350gt",
                  "displayName": "350GT"
                },
                {
                  "slug": "400gt",
                  "displayName": "400GT"
                },
                {
                  "slug": "aventador",
                  "displayName": "Aventador"
                },
                {
                  "slug": "ceetah-lm002",
                  "displayName": "Ceetah LM002"
                },
                {
                  "slug": "countach",
                  "displayName": "Countach"
                },
                {
                  "slug": "diablo",
                  "displayName": "Diablo"
                },
                {
                  "slug": "espada",
                  "displayName": "Espada"
                },
                {
                  "slug": "gallardo",
                  "displayName": "Gallardo"
                },
                {
                  "slug": "huracan",
                  "displayName": "Huracán"
                },
                {
                  "slug": "islero",
                  "displayName": "Islero"
                },
                {
                  "slug": "jalpa",
                  "displayName": "Jalpa"
                },
                {
                  "slug": "jarama",
                  "displayName": "Jarama"
                },
                {
                  "slug": "miura",
                  "displayName": "Miura"
                },
                {
                  "slug": "murcielago",
                  "displayName": "Murciélago"
                },
                {
                  "slug": "silhouette",
                  "displayName": "Silhouette"
                },
                {
                  "slug": "urraco",
                  "displayName": "Urraco"
                },
                {
                  "slug": "huracan",
                  "displayName": "Huracan"
                },
                {
                  "slug": "murcielago",
                  "displayName": "Murcielago"
                },
                {
                  "slug": "urus",
                  "displayName": "Urus"
                }
              ]
            },
            {
              "slug": "lancia",
              "displayName": "Lancia",
              "models": [
                {
                  "slug": "appia",
                  "displayName": "Appia"
                },
                {
                  "slug": "aurelia",
                  "displayName": "Aurelia"
                },
                {
                  "slug": "beta",
                  "displayName": "Beta"
                },
                {
                  "slug": "flaminia",
                  "displayName": "Flaminia"
                },
                {
                  "slug": "fulvia",
                  "displayName": "Fulvia"
                },
                {
                  "slug": "montecarlo",
                  "displayName": "Montecarlo"
                },
                {
                  "slug": "stratos",
                  "displayName": "Stratos"
                },
                {
                  "slug": "voyager",
                  "displayName": "Voyager"
                }
              ]
            },
            {
              "slug": "land-rover",
              "displayName": "Land Rover",
              "models": [
                {
                  "slug": "defender",
                  "displayName": "Defender"
                },
                {
                  "slug": "discovery",
                  "displayName": "Discovery"
                },
                {
                  "slug": "discovery-sport",
                  "displayName": "Discovery Sport"
                },
                {
                  "slug": "freelander",
                  "displayName": "Freelander"
                },
                {
                  "slug": "range-rover",
                  "displayName": "Range Rover"
                },
                {
                  "slug": "range-rover-evoque",
                  "displayName": "Range Rover Evoque"
                },
                {
                  "slug": "range-rover-sport",
                  "displayName": "Range Rover Sport"
                },
                {
                  "slug": "lr2",
                  "displayName": "LR2"
                },
                {
                  "slug": "lr3",
                  "displayName": "LR3"
                },
                {
                  "slug": "lr4",
                  "displayName": "LR4"
                },
                {
                  "slug": "range-rover-velar",
                  "displayName": "Range Rover Velar"
                }
              ]
            },
            {
              "slug": "lexus",
              "displayName": "Lexus",
              "models": [
                {
                  "slug": "ct",
                  "displayName": "CT"
                },
                {
                  "slug": "es",
                  "displayName": "ES"
                },
                {
                  "slug": "gs",
                  "displayName": "GS"
                },
                {
                  "slug": "gx",
                  "displayName": "GX"
                },
                {
                  "slug": "hs",
                  "displayName": "HS"
                },
                {
                  "slug": "is",
                  "displayName": "IS"
                },
                {
                  "slug": "lfa",
                  "displayName": "LFA"
                },
                {
                  "slug": "ls",
                  "displayName": "LS"
                },
                {
                  "slug": "lx",
                  "displayName": "LX"
                },
                {
                  "slug": "nx",
                  "displayName": "NX"
                },
                {
                  "slug": "rx",
                  "displayName": "RX"
                },
                {
                  "slug": "sc",
                  "displayName": "SC"
                },
                {
                  "slug": "es-hybrid",
                  "displayName": "ES Hybrid"
                },
                {
                  "slug": "gs-f",
                  "displayName": "GS F"
                },
                {
                  "slug": "lc",
                  "displayName": "LC"
                },
                {
                  "slug": "lc-hybrid",
                  "displayName": "LC Hybrid"
                },
                {
                  "slug": "ls-hybrid",
                  "displayName": "LS Hybrid"
                },
                {
                  "slug": "nx-hybrid",
                  "displayName": "NX Hybrid"
                },
                {
                  "slug": "rc",
                  "displayName": "RC"
                },
                {
                  "slug": "rc-f",
                  "displayName": "RC F"
                },
                {
                  "slug": "rx-hybrid",
                  "displayName": "RX Hybrid"
                },
                {
                  "slug": "ux",
                  "displayName": "UX"
                },
                {
                  "slug": "ux-hybrid",
                  "displayName": "UX Hybrid"
                }
              ]
            },
            {
              "slug": "lincoln",
              "displayName": "Lincoln",
              "models": [
                {
                  "slug": "aviator",
                  "displayName": "Aviator"
                },
                {
                  "slug": "blackwood",
                  "displayName": "Blackwood"
                },
                {
                  "slug": "capri",
                  "displayName": "Capri"
                },
                {
                  "slug": "continental",
                  "displayName": "Continental"
                },
                {
                  "slug": "continental-mark-i",
                  "displayName": "Continental Mark I"
                },
                {
                  "slug": "continental-mark-ii",
                  "displayName": "Continental Mark II"
                },
                {
                  "slug": "continental-mark-iii",
                  "displayName": "Continental Mark III"
                },
                {
                  "slug": "continental-mark-iv",
                  "displayName": "Continental Mark IV"
                },
                {
                  "slug": "continental-mark-v",
                  "displayName": "Continental Mark V"
                },
                {
                  "slug": "continental-mark-vi",
                  "displayName": "Continental Mark VI"
                },
                {
                  "slug": "continental-mark-vii",
                  "displayName": "Continental Mark VII"
                },
                {
                  "slug": "continental-mark-viii",
                  "displayName": "Continental Mark VIII"
                },
                {
                  "slug": "continental-mark-ix",
                  "displayName": "Continental Mark IX"
                },
                {
                  "slug": "cosmopolitan",
                  "displayName": "Cosmopolitan"
                },
                {
                  "slug": "el-series",
                  "displayName": "EL-Series"
                },
                {
                  "slug": "h-series",
                  "displayName": "H-Series"
                },
                {
                  "slug": "ls",
                  "displayName": "LS"
                },
                {
                  "slug": "mark-lt",
                  "displayName": "Mark LT"
                },
                {
                  "slug": "mks",
                  "displayName": "MKS"
                },
                {
                  "slug": "mkt",
                  "displayName": "MKT"
                },
                {
                  "slug": "mkx",
                  "displayName": "MKX"
                },
                {
                  "slug": "mkz",
                  "displayName": "MKZ"
                },
                {
                  "slug": "navigator",
                  "displayName": "Navigator"
                },
                {
                  "slug": "premiere",
                  "displayName": "Premiere"
                },
                {
                  "slug": "town-car",
                  "displayName": "Town Car"
                },
                {
                  "slug": "versailles",
                  "displayName": "Versailles"
                },
                {
                  "slug": "corsair",
                  "displayName": "Corsair"
                },
                {
                  "slug": "mark-vii",
                  "displayName": "Mark VII"
                },
                {
                  "slug": "mkc",
                  "displayName": "MKC"
                },
                {
                  "slug": "nautilus",
                  "displayName": "Nautilus"
                },
                {
                  "slug": "zephyr",
                  "displayName": "Zephyr"
                }
              ]
            },
            {
              "slug": "lotus",
              "displayName": "Lotus",
              "models": [
                {
                  "slug": "eclat",
                  "displayName": "Eclat"
                },
                {
                  "slug": "elan",
                  "displayName": "Elan"
                },
                {
                  "slug": "elan-2",
                  "displayName": "Elan +2"
                },
                {
                  "slug": "elise",
                  "displayName": "Elise"
                },
                {
                  "slug": "elite",
                  "displayName": "Elite"
                },
                {
                  "slug": "elite-type-7583",
                  "displayName": "Elite Type 75/83"
                },
                {
                  "slug": "esprit",
                  "displayName": "Esprit"
                },
                {
                  "slug": "europa",
                  "displayName": "Europa"
                },
                {
                  "slug": "evora",
                  "displayName": "Evora"
                },
                {
                  "slug": "excel",
                  "displayName": "Excel"
                },
                {
                  "slug": "exige",
                  "displayName": "Exige"
                },
                {
                  "slug": "mark-vi",
                  "displayName": "Mark VI"
                },
                {
                  "slug": "seven",
                  "displayName": "Seven"
                }
              ]
            },
            {
              "slug": "maserati",
              "displayName": "Maserati",
              "models": [
                {
                  "slug": "3500-gt",
                  "displayName": "3500 GT"
                },
                {
                  "slug": "5000-gt",
                  "displayName": "5000 GT"
                },
                {
                  "slug": "a6",
                  "displayName": "A6"
                },
                {
                  "slug": "biturbo",
                  "displayName": "Biturbo"
                },
                {
                  "slug": "bora",
                  "displayName": "Bora"
                },
                {
                  "slug": "coupe",
                  "displayName": "Coupé"
                },
                {
                  "slug": "spyder",
                  "displayName": "Spyder"
                },
                {
                  "slug": "gransport-coupe",
                  "displayName": "GranSport Coupé"
                },
                {
                  "slug": "gransport-spyder",
                  "displayName": "GranSport Spyder"
                },
                {
                  "slug": "ghibli-am115",
                  "displayName": "Ghibli AM115"
                },
                {
                  "slug": "ghibli-m157",
                  "displayName": "Ghibli M157"
                },
                {
                  "slug": "granturismo-grancabrio",
                  "displayName": "GranTurismo / GranCabrio"
                },
                {
                  "slug": "indy",
                  "displayName": "Indy"
                },
                {
                  "slug": "khamsin",
                  "displayName": "Khamsin"
                },
                {
                  "slug": "kyalami",
                  "displayName": "Kyalami"
                },
                {
                  "slug": "levante",
                  "displayName": "Levante"
                },
                {
                  "slug": "merak",
                  "displayName": "Merak"
                },
                {
                  "slug": "mexico",
                  "displayName": "Mexico"
                },
                {
                  "slug": "mistral",
                  "displayName": "Mistral"
                },
                {
                  "slug": "quattroporte",
                  "displayName": "Quattroporte"
                },
                {
                  "slug": "sebring",
                  "displayName": "Sebring"
                },
                {
                  "slug": "coupe",
                  "displayName": "Coupe"
                },
                {
                  "slug": "ghibli",
                  "displayName": "Ghibli"
                },
                {
                  "slug": "gransport",
                  "displayName": "GranSport"
                },
                {
                  "slug": "granturismo",
                  "displayName": "GranTurismo"
                }
              ]
            },
            {
              "slug": "maybach",
              "displayName": "Maybach",
              "models": [
                {
                  "slug": "57-62",
                  "displayName": "57 / 62"
                },
                {
                  "slug": "maybach",
                  "displayName": "Maybach"
                }
              ]
            },
            {
              "slug": "mazda",
              "displayName": "Mazda",
              "models": [
                {
                  "slug": "3",
                  "displayName": "3"
                },
                {
                  "slug": "6",
                  "displayName": "6"
                },
                {
                  "slug": "b-series",
                  "displayName": "B-Series"
                },
                {
                  "slug": "rx-2",
                  "displayName": "RX-2"
                },
                {
                  "slug": "626",
                  "displayName": "626"
                },
                {
                  "slug": "rx-5",
                  "displayName": "RX-5"
                },
                {
                  "slug": "cx-3",
                  "displayName": "CX-3"
                },
                {
                  "slug": "cx-5",
                  "displayName": "CX-5"
                },
                {
                  "slug": "cx-7",
                  "displayName": "CX-7"
                },
                {
                  "slug": "cx-9",
                  "displayName": "CX-9"
                },
                {
                  "slug": "2",
                  "displayName": "2"
                },
                {
                  "slug": "familia",
                  "displayName": "Familia"
                },
                {
                  "slug": "323",
                  "displayName": "323"
                },
                {
                  "slug": "929",
                  "displayName": "929"
                },
                {
                  "slug": "mpv",
                  "displayName": "MPV"
                },
                {
                  "slug": "mx-3-autozam-az-3-eunos-presso",
                  "displayName": "MX-3 / Autozam AZ-3 / Eunos Presso"
                },
                {
                  "slug": "mx-5-miata",
                  "displayName": "MX-5 / Miata"
                },
                {
                  "slug": "mx-6",
                  "displayName": "MX-6"
                },
                {
                  "slug": "navajo",
                  "displayName": "Navajo"
                },
                {
                  "slug": "5",
                  "displayName": "5"
                },
                {
                  "slug": "rx-7",
                  "displayName": "RX-7"
                },
                {
                  "slug": "rx-8",
                  "displayName": "RX-8"
                },
                {
                  "slug": "sentia",
                  "displayName": "Sentia"
                },
                {
                  "slug": "tribute",
                  "displayName": "Tribute"
                },
                {
                  "slug": "millenia",
                  "displayName": "Millenia"
                },
                {
                  "slug": "mazda2",
                  "displayName": "MAZDA2"
                },
                {
                  "slug": "mazda3",
                  "displayName": "MAZDA3"
                },
                {
                  "slug": "mazda5",
                  "displayName": "MAZDA5"
                },
                {
                  "slug": "mazda6",
                  "displayName": "MAZDA6"
                },
                {
                  "slug": "miata",
                  "displayName": "Miata"
                },
                {
                  "slug": "mx-3",
                  "displayName": "MX-3"
                },
                {
                  "slug": "mx-5",
                  "displayName": "MX-5"
                },
                {
                  "slug": "mx-5-miata",
                  "displayName": "MX-5 Miata"
                },
                {
                  "slug": "mx-5-miata-rf",
                  "displayName": "MX-5 Miata RF"
                },
                {
                  "slug": "protege",
                  "displayName": "Protege"
                },
                {
                  "slug": "protege5",
                  "displayName": "Protege5"
                },
                {
                  "slug": "truck",
                  "displayName": "Truck"
                }
              ]
            },
            {
              "slug": "mercedes",
              "displayName": "Mercedes",
              "models": [
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "190-sl",
                  "displayName": "190 SL"
                },
                {
                  "slug": "300sl",
                  "displayName": "300SL"
                },
                {
                  "slug": "a",
                  "displayName": "A"
                },
                {
                  "slug": "amg-gt",
                  "displayName": "AMG GT"
                },
                {
                  "slug": "c",
                  "displayName": "C"
                },
                {
                  "slug": "clc",
                  "displayName": "CLC"
                },
                {
                  "slug": "cla",
                  "displayName": "CLA"
                },
                {
                  "slug": "cl",
                  "displayName": "CL"
                },
                {
                  "slug": "clk",
                  "displayName": "CLK"
                },
                {
                  "slug": "cls",
                  "displayName": "CLS"
                },
                {
                  "slug": "e",
                  "displayName": "E"
                },
                {
                  "slug": "g",
                  "displayName": "G"
                },
                {
                  "slug": "gla",
                  "displayName": "GLA"
                },
                {
                  "slug": "glc",
                  "displayName": "GLC"
                },
                {
                  "slug": "gl",
                  "displayName": "GL"
                },
                {
                  "slug": "gle",
                  "displayName": "GLE"
                },
                {
                  "slug": "glk",
                  "displayName": "GLK"
                },
                {
                  "slug": "gls",
                  "displayName": "GLS"
                },
                {
                  "slug": "m",
                  "displayName": "M"
                },
                {
                  "slug": "r107-sl",
                  "displayName": "R107 SL"
                },
                {
                  "slug": "r",
                  "displayName": "R"
                },
                {
                  "slug": "s",
                  "displayName": "S"
                },
                {
                  "slug": "cl",
                  "displayName": "CL"
                },
                {
                  "slug": "slc",
                  "displayName": "SLC"
                },
                {
                  "slug": "sl",
                  "displayName": "SL"
                },
                {
                  "slug": "slk",
                  "displayName": "SLK"
                },
                {
                  "slug": "slr-mclaren",
                  "displayName": "SLR McLaren"
                },
                {
                  "slug": "sls-amg",
                  "displayName": "SLS AMG"
                },
                {
                  "slug": "sprinter",
                  "displayName": "Sprinter"
                },
                {
                  "slug": "type-170v",
                  "displayName": "Type 170V"
                },
                {
                  "slug": "type-300",
                  "displayName": "Type 300"
                },
                {
                  "slug": "v",
                  "displayName": "V"
                },
                {
                  "slug": "w105",
                  "displayName": "W105"
                },
                {
                  "slug": "w108-w109",
                  "displayName": "W108 / W109"
                },
                {
                  "slug": "w110-w111-w112",
                  "displayName": "W110 / W111 / W112"
                },
                {
                  "slug": "w113-sl",
                  "displayName": "W113 SL"
                },
                {
                  "slug": "w114-w115",
                  "displayName": "W114 / W115"
                },
                {
                  "slug": "w116",
                  "displayName": "W116"
                },
                {
                  "slug": "w120-w121",
                  "displayName": "W120 / W121"
                },
                {
                  "slug": "w123-e",
                  "displayName": "W123 E"
                },
                {
                  "slug": "w124-e",
                  "displayName": "W124 E"
                },
                {
                  "slug": "w126",
                  "displayName": "W126"
                },
                {
                  "slug": "w128",
                  "displayName": "W128"
                },
                {
                  "slug": "w180",
                  "displayName": "W180"
                },
                {
                  "slug": "w201",
                  "displayName": "W201"
                },
                {
                  "slug": "c-class",
                  "displayName": "C-Class"
                },
                {
                  "slug": "cl-class",
                  "displayName": "CL Class"
                },
                {
                  "slug": "cl-class",
                  "displayName": "CL-Class"
                },
                {
                  "slug": "clk-class",
                  "displayName": "CLK-Class"
                },
                {
                  "slug": "e-class",
                  "displayName": "E-Class"
                },
                {
                  "slug": "g-class",
                  "displayName": "G-Class"
                },
                {
                  "slug": "m-class",
                  "displayName": "M-Class"
                },
                {
                  "slug": "s-class",
                  "displayName": "S-Class"
                },
                {
                  "slug": "sl-class",
                  "displayName": "SL-Class"
                },
                {
                  "slug": "slk-class",
                  "displayName": "SLK-Class"
                }
              ]
            },
            {
              "slug": "mercury",
              "displayName": "Mercury",
              "models": [
                {
                  "slug": "bobcat",
                  "displayName": "Bobcat"
                },
                {
                  "slug": "capri",
                  "displayName": "Capri"
                },
                {
                  "slug": "colony-park",
                  "displayName": "Colony Park"
                },
                {
                  "slug": "comet",
                  "displayName": "Comet"
                },
                {
                  "slug": "cougar",
                  "displayName": "Cougar"
                },
                {
                  "slug": "eight",
                  "displayName": "Eight"
                },
                {
                  "slug": "grand-marquis",
                  "displayName": "Grand Marquis"
                },
                {
                  "slug": "lynx",
                  "displayName": "Lynx"
                },
                {
                  "slug": "mariner",
                  "displayName": "Mariner"
                },
                {
                  "slug": "marquis",
                  "displayName": "Marquis"
                },
                {
                  "slug": "meteor",
                  "displayName": "Meteor"
                },
                {
                  "slug": "milan",
                  "displayName": "Milan"
                },
                {
                  "slug": "montclair",
                  "displayName": "Montclair"
                },
                {
                  "slug": "montegro",
                  "displayName": "Montegro"
                },
                {
                  "slug": "monterey",
                  "displayName": "Monterey"
                },
                {
                  "slug": "mountaineer",
                  "displayName": "Mountaineer"
                },
                {
                  "slug": "m-series",
                  "displayName": "M-Series"
                },
                {
                  "slug": "mystique",
                  "displayName": "Mystique"
                },
                {
                  "slug": "park-lane",
                  "displayName": "Park Lane"
                },
                {
                  "slug": "sable",
                  "displayName": "Sable"
                },
                {
                  "slug": "topaz",
                  "displayName": "Topaz"
                },
                {
                  "slug": "tracer",
                  "displayName": "Tracer"
                },
                {
                  "slug": "villager",
                  "displayName": "Villager"
                },
                {
                  "slug": "zephyr",
                  "displayName": "Zephyr"
                },
                {
                  "slug": "marauder",
                  "displayName": "Marauder"
                },
                {
                  "slug": "montego",
                  "displayName": "Montego"
                },
                {
                  "slug": "villager-van",
                  "displayName": "Villager Van"
                }
              ]
            },
            {
              "slug": "merkur",
              "displayName": "Merkur",
              "models": [
                {
                  "slug": "scorpio",
                  "displayName": "Scorpio"
                },
                {
                  "slug": "xr4ti",
                  "displayName": "XR4Ti"
                }
              ]
            },
            {
              "slug": "mg",
              "displayName": "MG",
              "models": [
                {
                  "slug": "tc",
                  "displayName": "TC"
                }
              ]
            },
            {
              "slug": "mini",
              "displayName": "Mini",
              "models": [
                {
                  "slug": "countryman",
                  "displayName": "Countryman"
                },
                {
                  "slug": "coupe",
                  "displayName": "Coupé"
                },
                {
                  "slug": "one",
                  "displayName": "One"
                },
                {
                  "slug": "one-d",
                  "displayName": "One D"
                },
                {
                  "slug": "clubman",
                  "displayName": "Clubman"
                },
                {
                  "slug": "paceman",
                  "displayName": "Paceman"
                },
                {
                  "slug": "roadster",
                  "displayName": "Roadster"
                },
                {
                  "slug": "convertible",
                  "displayName": "Convertible"
                },
                {
                  "slug": "cooper",
                  "displayName": "Cooper"
                },
                {
                  "slug": "hardtop-2-door",
                  "displayName": "Hardtop 2 Door"
                },
                {
                  "slug": "hardtop-4-door",
                  "displayName": "Hardtop 4 Door"
                },
                {
                  "slug": "mini",
                  "displayName": "MINI"
                }
              ]
            },
            {
              "slug": "mitsubishi",
              "displayName": "Mitsubishi",
              "models": [
                {
                  "slug": "3000gt",
                  "displayName": "3000GT"
                },
                {
                  "slug": "montero",
                  "displayName": "Montero"
                },
                {
                  "slug": "chariot-space-wagon",
                  "displayName": "Chariot / Space Wagon"
                },
                {
                  "slug": "colt",
                  "displayName": "Colt"
                },
                {
                  "slug": "cordia",
                  "displayName": "Cordia"
                },
                {
                  "slug": "diamante",
                  "displayName": "Diamante"
                },
                {
                  "slug": "eclipse",
                  "displayName": "Eclipse"
                },
                {
                  "slug": "endeavor",
                  "displayName": "Endeavor"
                },
                {
                  "slug": "galant",
                  "displayName": "Galant"
                },
                {
                  "slug": "i-miev",
                  "displayName": "i-MiEV"
                },
                {
                  "slug": "lancer",
                  "displayName": "Lancer"
                },
                {
                  "slug": "mirage",
                  "displayName": "Mirage"
                },
                {
                  "slug": "outlander",
                  "displayName": "Outlander"
                },
                {
                  "slug": "precis",
                  "displayName": "Precis"
                },
                {
                  "slug": "raider",
                  "displayName": "Raider"
                },
                {
                  "slug": "space-runner-expo-lrv",
                  "displayName": "Space Runner / Expo LRV"
                },
                {
                  "slug": "sigma",
                  "displayName": "Sigma"
                },
                {
                  "slug": "expo",
                  "displayName": "Expo"
                },
                {
                  "slug": "starion",
                  "displayName": "Starion"
                },
                {
                  "slug": "tredia",
                  "displayName": "Tredia"
                },
                {
                  "slug": "triton-mighty-max",
                  "displayName": "Triton / Mighty Max"
                },
                {
                  "slug": "3000-gt",
                  "displayName": "3000 GT"
                },
                {
                  "slug": "eclipse-cross",
                  "displayName": "Eclipse Cross"
                },
                {
                  "slug": "eclipse-spyder",
                  "displayName": "Eclipse Spyder"
                },
                {
                  "slug": "mighty-max",
                  "displayName": "Mighty Max"
                },
                {
                  "slug": "mirage-g4",
                  "displayName": "Mirage G4"
                },
                {
                  "slug": "montero-sport",
                  "displayName": "Montero Sport"
                },
                {
                  "slug": "outlander-sport",
                  "displayName": "Outlander Sport"
                }
              ]
            },
            {
              "slug": "morgan",
              "displayName": "Morgan",
              "models": [
                {
                  "slug": "roadster",
                  "displayName": "Roadster"
                }
              ]
            },
            {
              "slug": "nash",
              "displayName": "Nash",
              "models": [
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "ambassador",
                  "displayName": "Ambassador"
                },
                {
                  "slug": "metropolitan",
                  "displayName": "Metropolitan"
                },
                {
                  "slug": "rambler",
                  "displayName": "Rambler"
                },
                {
                  "slug": "statesman",
                  "displayName": "Statesman"
                }
              ]
            },
            {
              "slug": "nissan",
              "displayName": "Nissan",
              "models": [
                {
                  "slug": "300zx",
                  "displayName": "300ZX"
                },
                {
                  "slug": "350z",
                  "displayName": "350Z"
                },
                {
                  "slug": "370z",
                  "displayName": "370Z"
                },
                {
                  "slug": "altima",
                  "displayName": "Altima"
                },
                {
                  "slug": "armada",
                  "displayName": "Armada"
                },
                {
                  "slug": "bluebird",
                  "displayName": "Bluebird"
                },
                {
                  "slug": "cedric",
                  "displayName": "Cedric"
                },
                {
                  "slug": "cube",
                  "displayName": "Cube"
                },
                {
                  "slug": "gt-r",
                  "displayName": "GT-R"
                },
                {
                  "slug": "hardbody-truck",
                  "displayName": "Hardbody Truck"
                },
                {
                  "slug": "juke",
                  "displayName": "Juke"
                },
                {
                  "slug": "leaf",
                  "displayName": "Leaf"
                },
                {
                  "slug": "maxima",
                  "displayName": "Maxima"
                },
                {
                  "slug": "maxima-810",
                  "displayName": "Maxima 810"
                },
                {
                  "slug": "maxima-qx",
                  "displayName": "Maxima QX"
                },
                {
                  "slug": "micra",
                  "displayName": "Micra"
                },
                {
                  "slug": "murano",
                  "displayName": "Murano"
                },
                {
                  "slug": "frontier",
                  "displayName": "Frontier"
                },
                {
                  "slug": "nv200",
                  "displayName": "NV200"
                },
                {
                  "slug": "nx",
                  "displayName": "NX"
                },
                {
                  "slug": "pathfinder",
                  "displayName": "Pathfinder"
                },
                {
                  "slug": "pick-up-frontier",
                  "displayName": "Pick-Up / Frontier"
                },
                {
                  "slug": "stanza-wagon",
                  "displayName": "Stanza Wagon"
                },
                {
                  "slug": "multi",
                  "displayName": "Multi"
                },
                {
                  "slug": "quest",
                  "displayName": "Quest"
                },
                {
                  "slug": "rogue",
                  "displayName": "Rogue"
                },
                {
                  "slug": "sentra",
                  "displayName": "Sentra"
                },
                {
                  "slug": "silvia-180sx-200sx",
                  "displayName": "Silvia 180SX / 200SX"
                },
                {
                  "slug": "silvia-200sx-240sx",
                  "displayName": "Silvia 200SX / 240SX"
                },
                {
                  "slug": "silvia-240sx",
                  "displayName": "Silvia 240SX"
                },
                {
                  "slug": "sunny",
                  "displayName": "Sunny"
                },
                {
                  "slug": "terrano",
                  "displayName": "Terrano"
                },
                {
                  "slug": "tiida-versa",
                  "displayName": "Tiida / Versa"
                },
                {
                  "slug": "titan",
                  "displayName": "Titan"
                },
                {
                  "slug": "vanette",
                  "displayName": "Vanette"
                },
                {
                  "slug": "violet-stanza",
                  "displayName": "Violet / Stanza"
                },
                {
                  "slug": "xterra",
                  "displayName": "Xterra"
                },
                {
                  "slug": "x-trail",
                  "displayName": "X-Trail"
                },
                {
                  "slug": "200-sx",
                  "displayName": "200 SX"
                },
                {
                  "slug": "240-sx",
                  "displayName": "240 SX"
                },
                {
                  "slug": "300-zx",
                  "displayName": "300 ZX"
                },
                {
                  "slug": "350z-roadster",
                  "displayName": "350Z Roadster"
                },
                {
                  "slug": "370z-coupe",
                  "displayName": "370Z Coupe"
                },
                {
                  "slug": "370z-roadster",
                  "displayName": "370Z Roadster"
                },
                {
                  "slug": "altima-coupe",
                  "displayName": "Altima Coupe"
                },
                {
                  "slug": "altima-hybrid",
                  "displayName": "Altima Hybrid"
                },
                {
                  "slug": "altima-sedan",
                  "displayName": "Altima Sedan"
                },
                {
                  "slug": "kicks",
                  "displayName": "Kicks"
                },
                {
                  "slug": "murano-crosscabriolet",
                  "displayName": "Murano CrossCabriolet"
                },
                {
                  "slug": "nv-cargo",
                  "displayName": "NV Cargo"
                },
                {
                  "slug": "nv-passenger",
                  "displayName": "NV Passenger"
                },
                {
                  "slug": "pathfinder-armada",
                  "displayName": "Pathfinder Armada"
                },
                {
                  "slug": "pathfinder-hybrid",
                  "displayName": "Pathfinder Hybrid"
                },
                {
                  "slug": "rogue-select",
                  "displayName": "Rogue Select"
                },
                {
                  "slug": "rogue-sport",
                  "displayName": "Rogue Sport"
                },
                {
                  "slug": "titan-xd",
                  "displayName": "Titan XD"
                },
                {
                  "slug": "versa",
                  "displayName": "Versa"
                },
                {
                  "slug": "versa-note",
                  "displayName": "Versa Note"
                },
                {
                  "slug": "versa-sedan",
                  "displayName": "Versa Sedan"
                }
              ]
            },
            {
              "slug": "nsu",
              "displayName": "NSU",
              "models": [
                {
                  "slug": "1200",
                  "displayName": "1200"
                },
                {
                  "slug": "k70",
                  "displayName": "K70"
                },
                {
                  "slug": "prinz",
                  "displayName": "Prinz"
                },
                {
                  "slug": "prinz-1000",
                  "displayName": "Prinz 1000"
                },
                {
                  "slug": "prinz-4",
                  "displayName": "Prinz 4"
                },
                {
                  "slug": "ro-80",
                  "displayName": "Ro 80"
                },
                {
                  "slug": "sport-prinz",
                  "displayName": "Sport Prinz"
                },
                {
                  "slug": "spyder",
                  "displayName": "Spyder"
                },
                {
                  "slug": "typ-110",
                  "displayName": "Typ 110"
                }
              ]
            },
            {
              "slug": "oldsmobile",
              "displayName": "Oldsmobile",
              "models": [
                {
                  "slug": "achieva",
                  "displayName": "Achieva"
                },
                {
                  "slug": "alero",
                  "displayName": "Alero"
                },
                {
                  "slug": "aurora",
                  "displayName": "Aurora"
                },
                {
                  "slug": "bravada",
                  "displayName": "Bravada"
                },
                {
                  "slug": "custom-cruiser",
                  "displayName": "Custom Cruiser"
                },
                {
                  "slug": "cutlass",
                  "displayName": "Cutlass"
                },
                {
                  "slug": "cutlass-calais",
                  "displayName": "Cutlass Calais"
                },
                {
                  "slug": "cutlass-ciera",
                  "displayName": "Cutlass Ciera"
                },
                {
                  "slug": "cutlass-supreme",
                  "displayName": "Cutlass Supreme"
                },
                {
                  "slug": "eighty-eight",
                  "displayName": "Eighty-Eight"
                },
                {
                  "slug": "firenza",
                  "displayName": "Firenza"
                },
                {
                  "slug": "intrigue",
                  "displayName": "Intrigue"
                },
                {
                  "slug": "ninety-eight",
                  "displayName": "Ninety-Eight"
                },
                {
                  "slug": "omega",
                  "displayName": "Omega"
                },
                {
                  "slug": "series-60",
                  "displayName": "Series 60"
                },
                {
                  "slug": "series-70",
                  "displayName": "Series 70"
                },
                {
                  "slug": "silhouette",
                  "displayName": "Silhouette"
                },
                {
                  "slug": "starfire",
                  "displayName": "Starfire"
                },
                {
                  "slug": "toronado",
                  "displayName": "Toronado"
                },
                {
                  "slug": "vista-cruiser",
                  "displayName": "Vista Cruiser"
                },
                {
                  "slug": "88",
                  "displayName": "88"
                },
                {
                  "slug": "98",
                  "displayName": "98"
                },
                {
                  "slug": "ciera",
                  "displayName": "Ciera"
                },
                {
                  "slug": "cruiser",
                  "displayName": "Cruiser"
                },
                {
                  "slug": "lss",
                  "displayName": "LSS"
                },
                {
                  "slug": "regency",
                  "displayName": "Regency"
                },
                {
                  "slug": "supreme",
                  "displayName": "Supreme"
                }
              ]
            },
            {
              "slug": "opel",
              "displayName": "Opel",
              "models": [
                {
                  "slug": "ascona",
                  "displayName": "Ascona"
                },
                {
                  "slug": "astra",
                  "displayName": "Astra"
                },
                {
                  "slug": "cascada",
                  "displayName": "Cascada"
                },
                {
                  "slug": "gt",
                  "displayName": "GT"
                },
                {
                  "slug": "kadett",
                  "displayName": "Kadett"
                },
                {
                  "slug": "manta-a",
                  "displayName": "Manta A"
                },
                {
                  "slug": "monterey",
                  "displayName": "Monterey"
                },
                {
                  "slug": "omega",
                  "displayName": "Omega"
                },
                {
                  "slug": "rekord",
                  "displayName": "Rekord"
                },
                {
                  "slug": "speedster",
                  "displayName": "Speedster"
                }
              ]
            },
            {
              "slug": "panoz",
              "displayName": "Panoz",
              "models": [
                {
                  "slug": "esperante",
                  "displayName": "Esperante"
                },
                {
                  "slug": "roadster",
                  "displayName": "Roadster"
                }
              ]
            },
            {
              "slug": "panther",
              "displayName": "Panther",
              "models": [
                {
                  "slug": "6",
                  "displayName": "6"
                },
                {
                  "slug": "ff",
                  "displayName": "FF"
                },
                {
                  "slug": "rio",
                  "displayName": "Rio"
                }
              ]
            },
            {
              "slug": "peugeot",
              "displayName": "Peugeot",
              "models": [
                {
                  "slug": "208",
                  "displayName": "208"
                },
                {
                  "slug": "304",
                  "displayName": "304"
                },
                {
                  "slug": "403",
                  "displayName": "403"
                },
                {
                  "slug": "404",
                  "displayName": "404"
                },
                {
                  "slug": "405",
                  "displayName": "405"
                },
                {
                  "slug": "504",
                  "displayName": "504"
                },
                {
                  "slug": "505",
                  "displayName": "505"
                },
                {
                  "slug": "604",
                  "displayName": "604"
                },
                {
                  "slug": "308",
                  "displayName": "308"
                },
                {
                  "slug": "ion",
                  "displayName": "iOn"
                }
              ]
            },
            {
              "slug": "plymouth",
              "displayName": "Plymouth",
              "models": [
                {
                  "slug": "acclaim",
                  "displayName": "Acclaim"
                },
                {
                  "slug": "arrow-duster",
                  "displayName": "Arrow Duster"
                },
                {
                  "slug": "barracuda",
                  "displayName": "Barracuda"
                },
                {
                  "slug": "belvedere",
                  "displayName": "Belvedere"
                },
                {
                  "slug": "breeze",
                  "displayName": "Breeze"
                },
                {
                  "slug": "caravelle",
                  "displayName": "Caravelle"
                },
                {
                  "slug": "colt",
                  "displayName": "Colt"
                },
                {
                  "slug": "colt-vista",
                  "displayName": "Colt Vista"
                },
                {
                  "slug": "cranbridge",
                  "displayName": "Cranbridge"
                },
                {
                  "slug": "cranbrook",
                  "displayName": "Cranbrook"
                },
                {
                  "slug": "deluxe-special-deluxe",
                  "displayName": "Deluxe / Special Deluxe"
                },
                {
                  "slug": "duster",
                  "displayName": "Duster"
                },
                {
                  "slug": "fury",
                  "displayName": "Fury"
                },
                {
                  "slug": "gran-fury",
                  "displayName": "Gran Fury"
                },
                {
                  "slug": "gtx",
                  "displayName": "GTX"
                },
                {
                  "slug": "horizon",
                  "displayName": "Horizon"
                },
                {
                  "slug": "horizon-tc3",
                  "displayName": "Horizon TC3"
                },
                {
                  "slug": "laser",
                  "displayName": "Laser"
                },
                {
                  "slug": "neon",
                  "displayName": "Neon"
                },
                {
                  "slug": "plaza",
                  "displayName": "Plaza"
                },
                {
                  "slug": "prowler",
                  "displayName": "Prowler"
                },
                {
                  "slug": "reliant",
                  "displayName": "Reliant"
                },
                {
                  "slug": "road-runner",
                  "displayName": "Road Runner"
                },
                {
                  "slug": "satellite",
                  "displayName": "Satellite"
                },
                {
                  "slug": "savoy",
                  "displayName": "Savoy"
                },
                {
                  "slug": "valiant-scamp",
                  "displayName": "Valiant Scamp"
                },
                {
                  "slug": "horizon-scamp",
                  "displayName": "Horizon Scamp"
                },
                {
                  "slug": "sundance",
                  "displayName": "Sundance"
                },
                {
                  "slug": "trailduster",
                  "displayName": "Trailduster"
                },
                {
                  "slug": "valiant",
                  "displayName": "Valiant"
                },
                {
                  "slug": "volare",
                  "displayName": "Volaré"
                },
                {
                  "slug": "voyager",
                  "displayName": "Voyager"
                },
                {
                  "slug": "grand-voyager",
                  "displayName": "Grand Voyager"
                }
              ]
            },
            {
              "slug": "pontiac",
              "displayName": "Pontiac",
              "models": [
                {
                  "slug": "6000",
                  "displayName": "6000"
                },
                {
                  "slug": "22",
                  "displayName": "2+2"
                },
                {
                  "slug": "acadian",
                  "displayName": "Acadian"
                },
                {
                  "slug": "astre",
                  "displayName": "Astre"
                },
                {
                  "slug": "aztek",
                  "displayName": "Aztek"
                },
                {
                  "slug": "bonneville",
                  "displayName": "Bonneville"
                },
                {
                  "slug": "catalina",
                  "displayName": "Catalina"
                },
                {
                  "slug": "chieftain",
                  "displayName": "Chieftain"
                },
                {
                  "slug": "custom-s",
                  "displayName": "Custom S"
                },
                {
                  "slug": "executive",
                  "displayName": "Executive"
                },
                {
                  "slug": "fiero",
                  "displayName": "Fiero"
                },
                {
                  "slug": "firebird",
                  "displayName": "Firebird"
                },
                {
                  "slug": "firefly",
                  "displayName": "Firefly"
                },
                {
                  "slug": "g3",
                  "displayName": "G3"
                },
                {
                  "slug": "g5",
                  "displayName": "G5"
                },
                {
                  "slug": "g6",
                  "displayName": "G6"
                },
                {
                  "slug": "g8",
                  "displayName": "G8"
                },
                {
                  "slug": "grand-am",
                  "displayName": "Grand Am"
                },
                {
                  "slug": "grand-prix",
                  "displayName": "Grand Prix"
                },
                {
                  "slug": "grand-safari",
                  "displayName": "Grand Safari"
                },
                {
                  "slug": "grand-ville",
                  "displayName": "Grand Ville"
                },
                {
                  "slug": "gto",
                  "displayName": "GTO"
                },
                {
                  "slug": "laurentian",
                  "displayName": "Laurentian"
                },
                {
                  "slug": "lemans",
                  "displayName": "LeMans"
                },
                {
                  "slug": "montana-sv6",
                  "displayName": "Montana SV6"
                },
                {
                  "slug": "parisienne",
                  "displayName": "Parisienne"
                },
                {
                  "slug": "pathfinder",
                  "displayName": "Pathfinder"
                },
                {
                  "slug": "phoenix",
                  "displayName": "Phoenix"
                },
                {
                  "slug": "safari",
                  "displayName": "Safari"
                },
                {
                  "slug": "solstice",
                  "displayName": "Solstice"
                },
                {
                  "slug": "star-chief",
                  "displayName": "Star Chief"
                },
                {
                  "slug": "star-chief-executive",
                  "displayName": "Star Chief Executive"
                },
                {
                  "slug": "strato-chief",
                  "displayName": "Strato Chief"
                },
                {
                  "slug": "streamliner",
                  "displayName": "Streamliner"
                },
                {
                  "slug": "sunbird",
                  "displayName": "Sunbird"
                },
                {
                  "slug": "sunburst",
                  "displayName": "Sunburst"
                },
                {
                  "slug": "sunfire",
                  "displayName": "Sunfire"
                },
                {
                  "slug": "sunrunner",
                  "displayName": "Sunrunner"
                },
                {
                  "slug": "t1000",
                  "displayName": "T1000"
                },
                {
                  "slug": "tempest",
                  "displayName": "Tempest"
                },
                {
                  "slug": "torpedo",
                  "displayName": "Torpedo"
                },
                {
                  "slug": "torrent",
                  "displayName": "Torrent"
                },
                {
                  "slug": "trans-sport",
                  "displayName": "Trans Sport"
                },
                {
                  "slug": "montana",
                  "displayName": "Montana"
                },
                {
                  "slug": "ventura",
                  "displayName": "Ventura"
                },
                {
                  "slug": "vibe",
                  "displayName": "Vibe"
                },
                {
                  "slug": "wave",
                  "displayName": "Wave"
                }
              ]
            },
            {
              "slug": "porsche",
              "displayName": "Porsche",
              "models": [
                {
                  "slug": "356",
                  "displayName": "356"
                },
                {
                  "slug": "914",
                  "displayName": "914"
                },
                {
                  "slug": "924",
                  "displayName": "924"
                },
                {
                  "slug": "928",
                  "displayName": "928"
                },
                {
                  "slug": "944",
                  "displayName": "944"
                },
                {
                  "slug": "968",
                  "displayName": "968"
                },
                {
                  "slug": "356",
                  "displayName": "356"
                },
                {
                  "slug": "911",
                  "displayName": "911"
                },
                {
                  "slug": "918-spyder",
                  "displayName": "918 Spyder"
                },
                {
                  "slug": "boxster",
                  "displayName": "Boxster"
                },
                {
                  "slug": "cayman",
                  "displayName": "Cayman"
                },
                {
                  "slug": "carrera-gt",
                  "displayName": "Carrera GT"
                },
                {
                  "slug": "cayenne",
                  "displayName": "Cayenne"
                },
                {
                  "slug": "macan",
                  "displayName": "Macan"
                },
                {
                  "slug": "panamera",
                  "displayName": "Panamera"
                },
                {
                  "slug": "718",
                  "displayName": "718"
                },
                {
                  "slug": "918",
                  "displayName": "918"
                },
                {
                  "slug": "cayenne-coupe",
                  "displayName": "Cayenne Coupé"
                }
              ]
            },
            {
              "slug": "princess",
              "displayName": "Princess",
              "models": [
                {
                  "slug": "1700",
                  "displayName": "1700"
                },
                {
                  "slug": "1800",
                  "displayName": "1800"
                },
                {
                  "slug": "2000",
                  "displayName": "2000"
                },
                {
                  "slug": "2200",
                  "displayName": "2200"
                }
              ]
            },
            {
              "slug": "rambler",
              "displayName": "Rambler",
              "models": [
                {
                  "slug": "american",
                  "displayName": "American"
                },
                {
                  "slug": "classic",
                  "displayName": "Classic"
                },
                {
                  "slug": "marlin",
                  "displayName": "Marlin"
                },
                {
                  "slug": "rebel-v8",
                  "displayName": "Rebel V8"
                },
                {
                  "slug": "six-and-v8",
                  "displayName": "Six and V8"
                }
              ]
            },
            {
              "slug": "reliant",
              "displayName": "Reliant",
              "models": [
                {
                  "slug": "rebel",
                  "displayName": "Rebel"
                },
                {
                  "slug": "regal",
                  "displayName": "Regal"
                }
              ]
            },
            {
              "slug": "renault",
              "displayName": "Renault",
              "models": [
                {
                  "slug": "4cv",
                  "displayName": "4CV"
                },
                {
                  "slug": "alliance",
                  "displayName": "Alliance"
                },
                {
                  "slug": "dauphine",
                  "displayName": "Dauphine"
                },
                {
                  "slug": "encore",
                  "displayName": "Encore"
                },
                {
                  "slug": "floride-caravelle",
                  "displayName": "Floride / Caravelle"
                },
                {
                  "slug": "fregate",
                  "displayName": "Frégate"
                },
                {
                  "slug": "domaine",
                  "displayName": "Domaine"
                },
                {
                  "slug": "manoir",
                  "displayName": "Manoir"
                },
                {
                  "slug": "fuego",
                  "displayName": "Fuego"
                },
                {
                  "slug": "juvaquatre-dauphinoise",
                  "displayName": "Juvaquatre / Dauphinoise"
                },
                {
                  "slug": "medallion",
                  "displayName": "Medallion"
                },
                {
                  "slug": "r11",
                  "displayName": "R11"
                },
                {
                  "slug": "r12",
                  "displayName": "R12"
                },
                {
                  "slug": "r15",
                  "displayName": "R15"
                },
                {
                  "slug": "r17",
                  "displayName": "R17"
                },
                {
                  "slug": "r16",
                  "displayName": "R16"
                },
                {
                  "slug": "r18",
                  "displayName": "R18"
                },
                {
                  "slug": "r21-nevada",
                  "displayName": "R21 Nevada"
                },
                {
                  "slug": "r25",
                  "displayName": "R25"
                },
                {
                  "slug": "r5",
                  "displayName": "R5"
                },
                {
                  "slug": "r8",
                  "displayName": "R8"
                },
                {
                  "slug": "r10",
                  "displayName": "R10"
                },
                {
                  "slug": "r9",
                  "displayName": "R9"
                }
              ]
            },
            {
              "slug": "riley",
              "displayName": "Riley",
              "models": [
                {
                  "slug": "pathfinder",
                  "displayName": "Pathfinder"
                }
              ]
            },
            {
              "slug": "rolls-royce",
              "displayName": "Rolls-Royce",
              "models": [
                {
                  "slug": "corniche",
                  "displayName": "Corniche"
                },
                {
                  "slug": "dawn",
                  "displayName": "Dawn"
                },
                {
                  "slug": "ghost",
                  "displayName": "Ghost"
                },
                {
                  "slug": "phantom",
                  "displayName": "Phantom"
                },
                {
                  "slug": "silver-seraph",
                  "displayName": "Silver Seraph"
                },
                {
                  "slug": "wraith",
                  "displayName": "Wraith"
                },
                {
                  "slug": "cullinan",
                  "displayName": "Cullinan"
                },
                {
                  "slug": "flying-spur",
                  "displayName": "Flying Spur"
                },
                {
                  "slug": "park-ward",
                  "displayName": "Park Ward"
                },
                {
                  "slug": "silver-dawn",
                  "displayName": "Silver Dawn"
                },
                {
                  "slug": "silver-spur",
                  "displayName": "Silver Spur"
                }
              ]
            },
            {
              "slug": "rover",
              "displayName": "Rover",
              "models": [
                {
                  "slug": "75",
                  "displayName": "75"
                },
                {
                  "slug": "100",
                  "displayName": "100"
                },
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "200",
                  "displayName": "200"
                },
                {
                  "slug": "400",
                  "displayName": "400"
                }
              ]
            },
            {
              "slug": "saab",
              "displayName": "Saab",
              "models": [
                {
                  "slug": "90",
                  "displayName": "90"
                },
                {
                  "slug": "92",
                  "displayName": "92"
                },
                {
                  "slug": "93",
                  "displayName": "93"
                },
                {
                  "slug": "95",
                  "displayName": "95"
                },
                {
                  "slug": "96",
                  "displayName": "96"
                },
                {
                  "slug": "99",
                  "displayName": "99"
                },
                {
                  "slug": "900",
                  "displayName": "900"
                },
                {
                  "slug": "9000",
                  "displayName": "9000"
                },
                {
                  "slug": "9-2x",
                  "displayName": "9-2X"
                },
                {
                  "slug": "9-3",
                  "displayName": "9-3"
                },
                {
                  "slug": "94-sonett-i",
                  "displayName": "94 / Sonett I"
                },
                {
                  "slug": "9-4x",
                  "displayName": "9-4X"
                },
                {
                  "slug": "9-5",
                  "displayName": "9-5"
                },
                {
                  "slug": "97-sonett",
                  "displayName": "97 / Sonett"
                },
                {
                  "slug": "9-7x",
                  "displayName": "9-7X"
                },
                {
                  "slug": "gt750",
                  "displayName": "GT750"
                },
                {
                  "slug": "gt850",
                  "displayName": "GT850"
                },
                {
                  "slug": "sport",
                  "displayName": "Sport"
                },
                {
                  "slug": "9-3x",
                  "displayName": "9-3X"
                }
              ]
            },
            {
              "slug": "saleen",
              "displayName": "Saleen",
              "models": [
                {
                  "slug": "s7",
                  "displayName": "S7"
                }
              ]
            },
            {
              "slug": "santana",
              "displayName": "Santana",
              "models": [
                {
                  "slug": "vitara",
                  "displayName": "Vitara"
                }
              ]
            },
            {
              "slug": "saturn",
              "displayName": "Saturn",
              "models": [
                {
                  "slug": "astra",
                  "displayName": "Astra"
                },
                {
                  "slug": "aura",
                  "displayName": "Aura"
                },
                {
                  "slug": "ion",
                  "displayName": "Ion"
                },
                {
                  "slug": "l-series",
                  "displayName": "L-Series"
                },
                {
                  "slug": "outlook",
                  "displayName": "Outlook"
                },
                {
                  "slug": "relay",
                  "displayName": "Relay"
                },
                {
                  "slug": "sky",
                  "displayName": "Sky"
                },
                {
                  "slug": "s-series",
                  "displayName": "S-Series"
                },
                {
                  "slug": "vue",
                  "displayName": "Vue"
                },
                {
                  "slug": "ev1",
                  "displayName": "EV1"
                },
                {
                  "slug": "l300",
                  "displayName": "L300"
                }
              ]
            },
            {
              "slug": "scion",
              "displayName": "Scion",
              "models": [
                {
                  "slug": "fr-s",
                  "displayName": "FR-S"
                },
                {
                  "slug": "ia",
                  "displayName": "iA"
                },
                {
                  "slug": "im",
                  "displayName": "iM"
                },
                {
                  "slug": "iq",
                  "displayName": "iQ"
                },
                {
                  "slug": "tc",
                  "displayName": "tC"
                },
                {
                  "slug": "xa",
                  "displayName": "xA"
                },
                {
                  "slug": "xb",
                  "displayName": "xB"
                },
                {
                  "slug": "xd",
                  "displayName": "xD"
                }
              ]
            },
            {
              "slug": "seat",
              "displayName": "Seat",
              "models": [
                {
                  "slug": "124",
                  "displayName": "124"
                },
                {
                  "slug": "128",
                  "displayName": "128"
                },
                {
                  "slug": "131",
                  "displayName": "131"
                },
                {
                  "slug": "600",
                  "displayName": "600"
                },
                {
                  "slug": "850",
                  "displayName": "850"
                },
                {
                  "slug": "cordoba",
                  "displayName": "Cordoba"
                }
              ]
            },
            {
              "slug": "simca",
              "displayName": "Simca",
              "models": [
                {
                  "slug": "5",
                  "displayName": "5"
                },
                {
                  "slug": "6",
                  "displayName": "6"
                },
                {
                  "slug": "1000",
                  "displayName": "1000"
                },
                {
                  "slug": "1300-1500",
                  "displayName": "1300 / 1500"
                }
              ]
            },
            {
              "slug": "simca-talbot",
              "displayName": "Simca / Talbot",
              "models": [
                {
                  "slug": "1100",
                  "displayName": "1100"
                }
              ]
            },
            {
              "slug": "smart",
              "displayName": "smart",
              "models": [
                {
                  "slug": "forfour",
                  "displayName": "ForFour"
                },
                {
                  "slug": "fortwo",
                  "displayName": "ForTwo"
                },
                {
                  "slug": "roadster",
                  "displayName": "Roadster"
                }
              ]
            },
            {
              "slug": "ssc",
              "displayName": "SSC",
              "models": [
                {
                  "slug": "aero",
                  "displayName": "Aero"
                },
                {
                  "slug": "tuatara",
                  "displayName": "Tuatara"
                }
              ]
            },
            {
              "slug": "standard",
              "displayName": "Standard",
              "models": [
                {
                  "slug": "eight",
                  "displayName": "Eight"
                }
              ]
            },
            {
              "slug": "studebaker",
              "displayName": "Studebaker",
              "models": [
                {
                  "slug": "avanti",
                  "displayName": "Avanti"
                },
                {
                  "slug": "challenger-comander-daytona-cruiser",
                  "displayName": "Challenger / Comander / Daytona / Cruiser"
                },
                {
                  "slug": "champion",
                  "displayName": "Champion"
                },
                {
                  "slug": "conestoga",
                  "displayName": "Conestoga"
                },
                {
                  "slug": "flight-hawk",
                  "displayName": "Flight Hawk"
                },
                {
                  "slug": "golden-hawk",
                  "displayName": "Golden Hawk"
                },
                {
                  "slug": "gran-turismo-hawk",
                  "displayName": "Gran Turismo Hawk"
                },
                {
                  "slug": "hawk",
                  "displayName": "Hawk"
                },
                {
                  "slug": "land-cruiser",
                  "displayName": "Land Cruiser"
                },
                {
                  "slug": "lark",
                  "displayName": "Lark"
                },
                {
                  "slug": "power-hawk",
                  "displayName": "Power Hawk"
                },
                {
                  "slug": "president",
                  "displayName": "President"
                },
                {
                  "slug": "scotsman",
                  "displayName": "Scotsman"
                },
                {
                  "slug": "silver-hawk",
                  "displayName": "Silver Hawk"
                },
                {
                  "slug": "sky-hawk",
                  "displayName": "Sky Hawk"
                },
                {
                  "slug": "speedster",
                  "displayName": "Speedster"
                },
                {
                  "slug": "wagonaire",
                  "displayName": "Wagonaire"
                }
              ]
            },
            {
              "slug": "subaru",
              "displayName": "Subaru",
              "models": [
                {
                  "slug": "360",
                  "displayName": "360"
                },
                {
                  "slug": "b9-tribeca",
                  "displayName": "B9 Tribeca"
                },
                {
                  "slug": "baja",
                  "displayName": "Baja"
                },
                {
                  "slug": "brat",
                  "displayName": "BRAT"
                },
                {
                  "slug": "brz",
                  "displayName": "BRZ"
                },
                {
                  "slug": "ff-1",
                  "displayName": "FF-1"
                },
                {
                  "slug": "forester",
                  "displayName": "Forester"
                },
                {
                  "slug": "impreza",
                  "displayName": "Impreza"
                },
                {
                  "slug": "legacy",
                  "displayName": "Legacy"
                },
                {
                  "slug": "legacy-outback-levorg",
                  "displayName": "Legacy / Outback / Levorg"
                },
                {
                  "slug": "leone",
                  "displayName": "Leone"
                },
                {
                  "slug": "leone-loyale",
                  "displayName": "Leone / Loyale"
                },
                {
                  "slug": "svx",
                  "displayName": "SVX"
                },
                {
                  "slug": "xt",
                  "displayName": "XT"
                },
                {
                  "slug": "ascent",
                  "displayName": "Ascent"
                },
                {
                  "slug": "crosstrek",
                  "displayName": "Crosstrek"
                },
                {
                  "slug": "outback",
                  "displayName": "Outback"
                },
                {
                  "slug": "tribeca",
                  "displayName": "Tribeca"
                },
                {
                  "slug": "wrx",
                  "displayName": "WRX"
                },
                {
                  "slug": "wrx-sti",
                  "displayName": "WRX STI"
                },
                {
                  "slug": "xv-crosstrek",
                  "displayName": "XV Crosstrek"
                }
              ]
            },
            {
              "slug": "suzuki",
              "displayName": "Suzuki",
              "models": [
                {
                  "slug": "baleno-esteem",
                  "displayName": "Baleno / Esteem"
                },
                {
                  "slug": "equator",
                  "displayName": "Equator"
                },
                {
                  "slug": "forenza",
                  "displayName": "Forenza"
                },
                {
                  "slug": "grand-vitara",
                  "displayName": "Grand Vitara"
                },
                {
                  "slug": "kizashi",
                  "displayName": "Kizashi"
                },
                {
                  "slug": "liana-aerio",
                  "displayName": "Liana / Aerio"
                },
                {
                  "slug": "reno",
                  "displayName": "Reno"
                },
                {
                  "slug": "swift",
                  "displayName": "Swift"
                },
                {
                  "slug": "swift-forsa",
                  "displayName": "Swift / Forsa"
                },
                {
                  "slug": "sx4",
                  "displayName": "SX4"
                },
                {
                  "slug": "vitara",
                  "displayName": "Vitara"
                },
                {
                  "slug": "vitara-sidekick",
                  "displayName": "Vitara / Sidekick"
                },
                {
                  "slug": "xl-7",
                  "displayName": "XL-7"
                },
                {
                  "slug": "aerio",
                  "displayName": "Aerio"
                },
                {
                  "slug": "esteem",
                  "displayName": "Esteem"
                },
                {
                  "slug": "forenza-wagon",
                  "displayName": "Forenza Wagon"
                },
                {
                  "slug": "samurai",
                  "displayName": "Samurai"
                },
                {
                  "slug": "sidekick",
                  "displayName": "Sidekick"
                },
                {
                  "slug": "sx",
                  "displayName": "SX"
                },
                {
                  "slug": "sx4-crossover",
                  "displayName": "SX4 Crossover"
                },
                {
                  "slug": "sx4-sedan",
                  "displayName": "SX4 Sedan"
                },
                {
                  "slug": "sx4-sport",
                  "displayName": "SX4 Sport"
                },
                {
                  "slug": "verona",
                  "displayName": "Verona"
                },
                {
                  "slug": "x-90",
                  "displayName": "X-90"
                },
                {
                  "slug": "xl7",
                  "displayName": "XL7"
                }
              ]
            },
            {
              "slug": "talbot",
              "displayName": "Talbot",
              "models": [
                {
                  "slug": "avenger",
                  "displayName": "Avenger"
                }
              ]
            },
            {
              "slug": "tesla",
              "displayName": "Tesla",
              "models": [
                {
                  "slug": "model-s",
                  "displayName": "Model S"
                },
                {
                  "slug": "model-x",
                  "displayName": "Model X"
                },
                {
                  "slug": "roadster",
                  "displayName": "Roadster"
                },
                {
                  "slug": "model-3",
                  "displayName": "Model 3"
                },
                {
                  "slug": "model-y",
                  "displayName": "Model Y"
                }
              ]
            },
            {
              "slug": "toyota",
              "displayName": "Toyota",
              "models": [
                {
                  "slug": "avalon",
                  "displayName": "Avalon"
                },
                {
                  "slug": "avalon-pronard",
                  "displayName": "Avalon / Pronard"
                },
                {
                  "slug": "camry",
                  "displayName": "Camry"
                },
                {
                  "slug": "camry-scepter-vienta",
                  "displayName": "Camry / Scepter / Vienta"
                },
                {
                  "slug": "camry-vienta",
                  "displayName": "Camry / Vienta"
                },
                {
                  "slug": "camry-vista",
                  "displayName": "Camry / Vista"
                },
                {
                  "slug": "camry-solara",
                  "displayName": "Camry Solara"
                },
                {
                  "slug": "celica",
                  "displayName": "Celica"
                },
                {
                  "slug": "celica-supra",
                  "displayName": "Celica Supra"
                },
                {
                  "slug": "corolla",
                  "displayName": "Corolla"
                },
                {
                  "slug": "corolla-auris",
                  "displayName": "Corolla / Auris"
                },
                {
                  "slug": "corolla-auris-blade",
                  "displayName": "Corolla / Auris / Blade"
                },
                {
                  "slug": "corolla-im",
                  "displayName": "Corolla iM"
                },
                {
                  "slug": "corona",
                  "displayName": "Corona"
                },
                {
                  "slug": "crown",
                  "displayName": "Crown"
                },
                {
                  "slug": "estima-tarago-previa",
                  "displayName": "Estima / Tarago / Previa"
                },
                {
                  "slug": "fj-cruiser",
                  "displayName": "FJ Cruiser"
                },
                {
                  "slug": "gt86",
                  "displayName": "GT86"
                },
                {
                  "slug": "highlander",
                  "displayName": "Highlander"
                },
                {
                  "slug": "hilux",
                  "displayName": "Hilux"
                },
                {
                  "slug": "hilux-surf-4runner",
                  "displayName": "Hilux Surf / 4Runner"
                },
                {
                  "slug": "iq",
                  "displayName": "iQ"
                },
                {
                  "slug": "land-cruiser-fj100",
                  "displayName": "Land Cruiser FJ100"
                },
                {
                  "slug": "land-cruiser-fj140",
                  "displayName": "Land Cruiser FJ140"
                },
                {
                  "slug": "land-cruiser-fj40",
                  "displayName": "Land Cruiser FJ40"
                },
                {
                  "slug": "land-cruiser-fj60",
                  "displayName": "Land Cruiser FJ60"
                },
                {
                  "slug": "land-cruiser-fj80",
                  "displayName": "Land Cruiser FJ80"
                },
                {
                  "slug": "mark-ii-cressida",
                  "displayName": "Mark II / Cressida"
                },
                {
                  "slug": "masterace-van",
                  "displayName": "MasterAce / Van"
                },
                {
                  "slug": "matrix",
                  "displayName": "Matrix"
                },
                {
                  "slug": "mirai",
                  "displayName": "Mirai"
                },
                {
                  "slug": "mr2",
                  "displayName": "MR2"
                },
                {
                  "slug": "mr2-mr-s",
                  "displayName": "MR2 / MR-S"
                },
                {
                  "slug": "paseo-cynos",
                  "displayName": "Paseo / Cynos"
                },
                {
                  "slug": "prius",
                  "displayName": "Prius"
                },
                {
                  "slug": "prius-c-aqua",
                  "displayName": "Prius c / Aqua"
                },
                {
                  "slug": "prius-v-prius-a",
                  "displayName": "Prius v / Prius α"
                },
                {
                  "slug": "rav4",
                  "displayName": "RAV4"
                },
                {
                  "slug": "sequoia",
                  "displayName": "Sequoia"
                },
                {
                  "slug": "sienna",
                  "displayName": "Sienna"
                },
                {
                  "slug": "starlet",
                  "displayName": "Starlet"
                },
                {
                  "slug": "supra",
                  "displayName": "Supra"
                },
                {
                  "slug": "t100",
                  "displayName": "T100"
                },
                {
                  "slug": "tacoma",
                  "displayName": "Tacoma"
                },
                {
                  "slug": "tercel-corolla-ii",
                  "displayName": "Tercel / Corolla II"
                },
                {
                  "slug": "tercel-corsa",
                  "displayName": "Tercel / Corsa"
                },
                {
                  "slug": "tercel-soluna",
                  "displayName": "Tercel / Soluna"
                },
                {
                  "slug": "tundra",
                  "displayName": "Tundra"
                },
                {
                  "slug": "venza",
                  "displayName": "Venza"
                },
                {
                  "slug": "yaris-vitz",
                  "displayName": "Yaris / Vitz"
                },
                {
                  "slug": "yaris-vitz-echo",
                  "displayName": "Yaris / Vitz / Echo"
                },
                {
                  "slug": "yaris-ia",
                  "displayName": "Yaris iA"
                },
                {
                  "slug": "4runner",
                  "displayName": "4Runner"
                },
                {
                  "slug": "86",
                  "displayName": "86"
                },
                {
                  "slug": "c-hr",
                  "displayName": "C-HR"
                },
                {
                  "slug": "corolla-hatchback",
                  "displayName": "Corolla Hatchback"
                },
                {
                  "slug": "echo",
                  "displayName": "Echo"
                },
                {
                  "slug": "land-cruiser",
                  "displayName": "Land Cruiser"
                },
                {
                  "slug": "mr2-spyder",
                  "displayName": "MR2 Spyder"
                },
                {
                  "slug": "paseo",
                  "displayName": "Paseo"
                },
                {
                  "slug": "previa",
                  "displayName": "Previa"
                },
                {
                  "slug": "prius-c",
                  "displayName": "Prius c"
                },
                {
                  "slug": "prius-plug-in",
                  "displayName": "Prius Plug-In"
                },
                {
                  "slug": "prius-prime",
                  "displayName": "Prius Prime"
                },
                {
                  "slug": "prius-v",
                  "displayName": "Prius v"
                },
                {
                  "slug": "tercel",
                  "displayName": "Tercel"
                },
                {
                  "slug": "yaris",
                  "displayName": "Yaris"
                }
              ]
            },
            {
              "slug": "trabant",
              "displayName": "Trabant",
              "models": [
                {
                  "slug": "600",
                  "displayName": "600"
                }
              ]
            },
            {
              "slug": "triumph",
              "displayName": "Triumph",
              "models": [
                {
                  "slug": "acclaim",
                  "displayName": "Acclaim"
                },
                {
                  "slug": "gt6",
                  "displayName": "GT6"
                },
                {
                  "slug": "italia",
                  "displayName": "Italia"
                },
                {
                  "slug": "spitfire",
                  "displayName": "Spitfire"
                },
                {
                  "slug": "stag",
                  "displayName": "Stag"
                },
                {
                  "slug": "tr250",
                  "displayName": "TR250"
                },
                {
                  "slug": "tr6",
                  "displayName": "TR6"
                },
                {
                  "slug": "tr7",
                  "displayName": "TR7"
                },
                {
                  "slug": "tr8",
                  "displayName": "TR8"
                }
              ]
            },
            {
              "slug": "venturi",
              "displayName": "Venturi",
              "models": [
                {
                  "slug": "300",
                  "displayName": "300"
                },
                {
                  "slug": "400",
                  "displayName": "400"
                }
              ]
            },
            {
              "slug": "volkswagen",
              "displayName": "Volkswagen",
              "models": [
                {
                  "slug": "1500-1600",
                  "displayName": "1500, 1600"
                },
                {
                  "slug": "411-412",
                  "displayName": "411, 412"
                },
                {
                  "slug": "arteon",
                  "displayName": "Arteon"
                },
                {
                  "slug": "atlas",
                  "displayName": "Atlas"
                },
                {
                  "slug": "bora",
                  "displayName": "Bora"
                },
                {
                  "slug": "caddy",
                  "displayName": "Caddy"
                },
                {
                  "slug": "corrado",
                  "displayName": "Corrado"
                },
                {
                  "slug": "eos",
                  "displayName": "Eos"
                },
                {
                  "slug": "golf",
                  "displayName": "Golf"
                },
                {
                  "slug": "jetta",
                  "displayName": "Jetta"
                },
                {
                  "slug": "k70",
                  "displayName": "K70"
                },
                {
                  "slug": "kaefer-beetle",
                  "displayName": "Käfer  / Beetle"
                },
                {
                  "slug": "karmann-ghia-tc",
                  "displayName": "Karmann Ghia / TC"
                },
                {
                  "slug": "lt",
                  "displayName": "LT"
                },
                {
                  "slug": "new-beetle",
                  "displayName": "New Beetle"
                },
                {
                  "slug": "passat",
                  "displayName": "Passat"
                },
                {
                  "slug": "phaeton",
                  "displayName": "Phaeton"
                },
                {
                  "slug": "routan",
                  "displayName": "Routan"
                },
                {
                  "slug": "scirocco",
                  "displayName": "Scirocco"
                },
                {
                  "slug": "sharan",
                  "displayName": "Sharan"
                },
                {
                  "slug": "transporter-kombi-bus-vanagon-multivan-caravelle",
                  "displayName": "Transporter / Kombi / Bus  / Vanagon / Multivan /Caravelle"
                },
                {
                  "slug": "the-beetle",
                  "displayName": "The Beetle"
                },
                {
                  "slug": "thing",
                  "displayName": "Thing"
                },
                {
                  "slug": "vento",
                  "displayName": "Vento"
                },
                {
                  "slug": "voyage",
                  "displayName": "Voyage"
                },
                {
                  "slug": "beetle",
                  "displayName": "Beetle"
                },
                {
                  "slug": "cabrio",
                  "displayName": "Cabrio"
                },
                {
                  "slug": "cc",
                  "displayName": "CC"
                },
                {
                  "slug": "e-golf",
                  "displayName": "e-Golf"
                },
                {
                  "slug": "eurovan",
                  "displayName": "Eurovan"
                },
                {
                  "slug": "gli",
                  "displayName": "GLI"
                },
                {
                  "slug": "golf-alltrack",
                  "displayName": "Golf Alltrack"
                },
                {
                  "slug": "golf-gti",
                  "displayName": "Golf GTI"
                },
                {
                  "slug": "golf-r",
                  "displayName": "Golf R"
                },
                {
                  "slug": "golf-sportwagen",
                  "displayName": "Golf SportWagen"
                },
                {
                  "slug": "gti",
                  "displayName": "GTI"
                },
                {
                  "slug": "jetta-sportwagen",
                  "displayName": "Jetta SportWagen"
                },
                {
                  "slug": "new-beetle-convertible",
                  "displayName": "New Beetle Convertible"
                },
                {
                  "slug": "new-gti",
                  "displayName": "New GTI"
                },
                {
                  "slug": "new-jetta",
                  "displayName": "New Jetta"
                },
                {
                  "slug": "r32",
                  "displayName": "R32"
                },
                {
                  "slug": "rabbit",
                  "displayName": "Rabbit"
                },
                {
                  "slug": "tiguan",
                  "displayName": "Tiguan"
                },
                {
                  "slug": "tiguan-limited",
                  "displayName": "Tiguan Limited"
                },
                {
                  "slug": "touareg",
                  "displayName": "Touareg"
                },
                {
                  "slug": "touareg-2",
                  "displayName": "Touareg 2"
                }
              ]
            },
            {
              "slug": "volvo",
              "displayName": "Volvo",
              "models": [
                {
                  "slug": "850",
                  "displayName": "850"
                },
                {
                  "slug": "100-series",
                  "displayName": "100 series"
                },
                {
                  "slug": "200-series",
                  "displayName": "200 series"
                },
                {
                  "slug": "700-series",
                  "displayName": "700 series"
                },
                {
                  "slug": "900-series",
                  "displayName": "900 series"
                },
                {
                  "slug": "amazon",
                  "displayName": "Amazon"
                },
                {
                  "slug": "c30",
                  "displayName": "C30"
                },
                {
                  "slug": "c70",
                  "displayName": "C70"
                },
                {
                  "slug": "duett",
                  "displayName": "Duett"
                },
                {
                  "slug": "p1800",
                  "displayName": "P1800"
                },
                {
                  "slug": "p1900",
                  "displayName": "P1900"
                },
                {
                  "slug": "pv-444-544",
                  "displayName": "PV 444 / 544"
                },
                {
                  "slug": "s40",
                  "displayName": "S40"
                },
                {
                  "slug": "v50",
                  "displayName": "V50"
                },
                {
                  "slug": "s60",
                  "displayName": "S60"
                },
                {
                  "slug": "v60",
                  "displayName": "V60"
                },
                {
                  "slug": "s70",
                  "displayName": "S70"
                },
                {
                  "slug": "v70",
                  "displayName": "V70"
                },
                {
                  "slug": "s80",
                  "displayName": "S80"
                },
                {
                  "slug": "s90",
                  "displayName": "S90"
                },
                {
                  "slug": "v90",
                  "displayName": "V90"
                },
                {
                  "slug": "v40",
                  "displayName": "V40"
                },
                {
                  "slug": "xc70",
                  "displayName": "XC70"
                },
                {
                  "slug": "xc60",
                  "displayName": "XC60"
                },
                {
                  "slug": "xc90",
                  "displayName": "XC90"
                },
                {
                  "slug": "940",
                  "displayName": "940"
                },
                {
                  "slug": "960",
                  "displayName": "960"
                },
                {
                  "slug": "new-s40",
                  "displayName": "New S40"
                },
                {
                  "slug": "v60-cross-country",
                  "displayName": "V60 Cross Country"
                },
                {
                  "slug": "v70-xc",
                  "displayName": "V70 XC"
                },
                {
                  "slug": "v90-cross-country",
                  "displayName": "V90 Cross Country"
                },
                {
                  "slug": "xc40",
                  "displayName": "XC40"
                }
              ]
            },
            {
              "slug": "wiesmann",
              "displayName": "Wiesmann",
              "models": [
                {
                  "slug": "gt",
                  "displayName": "GT"
                },
                {
                  "slug": "roadster",
                  "displayName": "Roadster"
                }
              ]
            },
            {
              "slug": "wolseley",
              "displayName": "Wolseley",
              "models": [
                {
                  "slug": "hornet",
                  "displayName": "Hornet"
                }
              ]
            },
            {
              "slug": "zastava",
              "displayName": "Zastava",
              "models": [
                {
                  "slug": "128",
                  "displayName": "128"
                },
                {
                  "slug": "1300-1500",
                  "displayName": "1300 / 1500"
                },
                {
                  "slug": "koral-yugo",
                  "displayName": "Koral / Yugo"
                }
              ]
            },
            {
              "slug": "mercedes-benz",
              "displayName": "Mercedes-Benz",
              "models": [
                {
                  "slug": "a-class",
                  "displayName": "A-Class"
                },
                {
                  "slug": "amgr-gt",
                  "displayName": "AMG® GT"
                },
                {
                  "slug": "amgr-gt-4-door-coupe",
                  "displayName": "AMG® GT 4-Door Coupe"
                },
                {
                  "slug": "amgr-gt-coupe",
                  "displayName": "AMG® GT Coupe"
                },
                {
                  "slug": "amgr-gt-roadster",
                  "displayName": "AMG® GT Roadster"
                },
                {
                  "slug": "b-class",
                  "displayName": "B-Class"
                },
                {
                  "slug": "c-class-cabriolet",
                  "displayName": "C-Class Cabriolet"
                },
                {
                  "slug": "c-class-coupe",
                  "displayName": "C-Class Coupe"
                },
                {
                  "slug": "c-class-sedan",
                  "displayName": "C-Class Sedan"
                },
                {
                  "slug": "cla",
                  "displayName": "CLA"
                },
                {
                  "slug": "cla-class",
                  "displayName": "CLA-Class"
                },
                {
                  "slug": "cls-class",
                  "displayName": "CLS-Class"
                },
                {
                  "slug": "gl-class",
                  "displayName": "GL-Class"
                },
                {
                  "slug": "gla",
                  "displayName": "GLA"
                },
                {
                  "slug": "gla-class",
                  "displayName": "GLA-Class"
                },
                {
                  "slug": "glc-coupe",
                  "displayName": "GLC Coupe"
                },
                {
                  "slug": "glc-class",
                  "displayName": "GLC-Class"
                },
                {
                  "slug": "gle",
                  "displayName": "GLE"
                },
                {
                  "slug": "gle-class",
                  "displayName": "GLE-Class"
                },
                {
                  "slug": "gle-class-coupe",
                  "displayName": "GLE-Class Coupe"
                },
                {
                  "slug": "glk-class",
                  "displayName": "GLK-Class"
                },
                {
                  "slug": "gls",
                  "displayName": "GLS"
                },
                {
                  "slug": "gls-class",
                  "displayName": "GLS-Class"
                },
                {
                  "slug": "metris",
                  "displayName": "Metris"
                },
                {
                  "slug": "metris-cargo-van",
                  "displayName": "Metris Cargo Van"
                },
                {
                  "slug": "metris-passenger-van",
                  "displayName": "Metris Passenger Van"
                },
                {
                  "slug": "r-class",
                  "displayName": "R-Class"
                },
                {
                  "slug": "sl-roadster",
                  "displayName": "SL Roadster"
                },
                {
                  "slug": "slc-roadster",
                  "displayName": "SLC Roadster"
                },
                {
                  "slug": "slr-mclaren",
                  "displayName": "SLR McLaren"
                },
                {
                  "slug": "sls-amgr",
                  "displayName": "SLS AMG®"
                },
                {
                  "slug": "sprinter-cargo-van",
                  "displayName": "Sprinter Cargo Van"
                },
                {
                  "slug": "sprinter-crew-van",
                  "displayName": "Sprinter Crew Van"
                },
                {
                  "slug": "sprinter-passenger-van",
                  "displayName": "Sprinter Passenger Van"
                },
                {
                  "slug": "sprinter-worker",
                  "displayName": "Sprinter WORKER"
                },
                {
                  "slug": "sprinter-worker-cargo-van",
                  "displayName": "Sprinter WORKER Cargo Van"
                }
              ]
            },
            {
              "slug": "mclaren",
              "displayName": "Mclaren",
              "models": [
                {
                  "slug": "12c",
                  "displayName": "12C"
                },
                {
                  "slug": "570gt",
                  "displayName": "570GT"
                },
                {
                  "slug": "570s",
                  "displayName": "570S"
                },
                {
                  "slug": "600lt",
                  "displayName": "600LT"
                },
                {
                  "slug": "650s",
                  "displayName": "650S"
                },
                {
                  "slug": "675lt",
                  "displayName": "675LT"
                },
                {
                  "slug": "720s",
                  "displayName": "720S"
                },
                {
                  "slug": "mp4-12c",
                  "displayName": "MP4-12C"
                },
                {
                  "slug": "p1",
                  "displayName": "P1"
                },
                {
                  "slug": "senna",
                  "displayName": "Senna"
                }
              ]
            },
            {
              "slug": "genesis",
              "displayName": "Genesis",
              "models": [
                {
                  "slug": "g70",
                  "displayName": "G70"
                },
                {
                  "slug": "g80",
                  "displayName": "G80"
                },
                {
                  "slug": "g90",
                  "displayName": "G90"
                }
              ]
            },
            {
              "slug": "am-general",
              "displayName": "AM General",
              "models": [
                {
                  "slug": "h2",
                  "displayName": "H2"
                },
                {
                  "slug": "hummer",
                  "displayName": "Hummer"
                }
              ]
            },
            {
              "slug": "ram",
              "displayName": "Ram",
              "models": [
                {
                  "slug": "promaster-cab-chassis",
                  "displayName": "ProMaster Cab Chassis"
                },
                {
                  "slug": "promaster-cargo-van",
                  "displayName": "ProMaster Cargo Van"
                },
                {
                  "slug": "promaster-city",
                  "displayName": "Promaster City"
                },
                {
                  "slug": "promaster-cutaway",
                  "displayName": "ProMaster Cutaway"
                },
                {
                  "slug": "promaster-window-van",
                  "displayName": "ProMaster Window Van"
                },
                {
                  "slug": "ram-1500-classic",
                  "displayName": "Ram 1500 Classic"
                },
                {
                  "slug": "ram-3500-chassis-cab",
                  "displayName": "Ram 3500 Chassis Cab"
                },
                {
                  "slug": "ram-4500-chassis-cab",
                  "displayName": "Ram 4500 Chassis Cab"
                },
                {
                  "slug": "ram-cargo-van",
                  "displayName": "Ram Cargo Van"
                }
              ]
            },
            {
              "slug": "karma",
              "displayName": "Karma",
              "models": [
                {
                  "slug": "revero",
                  "displayName": "Revero"
                }
              ]
            },
            {
              "slug": "freightliner",
              "displayName": "Freightliner",
              "models": [
                {
                  "slug": "sprinter-cab-chassis",
                  "displayName": "Sprinter Cab Chassis"
                }
              ]
            }
          
    ],
    year: [1960, 2020],
    mileage: [0, 300000],
    bodyStyle: [
        {
            slug: "sedan",
            displayName: "Sedan",
            icon: "default"
        },
        {
            slug: "hybrid",
            displayName: "Hybrid",
            icon: "default"
        },
        {
            slug: "convertible",
            displayName: "Convertible",
            icon: "default"
        },
        {
            slug: "truck",
            displayName: "Truck",
            icon: "default"
        },
        {
            slug: "coupe",
            displayName: "Coupe",
            icon: "default"
        },
        {
            slug: "hatchback",
            displayName: "Hatchback",
            icon: "default"
        },
        {
            slug: "minivan",
            displayName: "Minivan",
            icon: "default"
        },
        {
            slug: "wagon",
            displayName: "Wagon",
            icon: "default"
        },
        {
            slug: "suv",
            displayName: "SUV",
            icon: "default"
        },
        {
            slug: "others",
            displayName: "Others",
            icon: "default"
        }

    ],
    transmission: [
        {
            slug: "automatic",
            displayName: "Automatic",
            icon: "default"
        },
        {
            slug: "manual",
            displayName: "Manual",
            icon: "default"
        }
    ],
    fuel: [
        {
            slug: "disel",
            displayName: "Disel",
            icon: "default"
        },
        {
            slug: "electric",
            displayName: "Electric",
            icon: "default"
        },
        {
            slug: "flex",
            displayName: "Flex",
            icon: "default"
        },
        {
            slug: "gas",
            displayName: "Gas",
            icon: "default"
        },
        {
            slug: "hybrid",
            displayName: "Hybrid",
            icon: "default"
        },
        {
            slug: "others",
            displayName: "Others",
            icon: "default"
        }
    ],
    driveTrain: [
        {
            slug: "4wd",
            displayName: "4WD",
            icon: "default"
        },
        {
            slug: "aws",
            displayName: "AWD",
            icon: "default"
        },
        {
            slug: "fwd",
            displayName: "FWD",
            icon: "default"
        },
        {
            slug: "rwd",
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