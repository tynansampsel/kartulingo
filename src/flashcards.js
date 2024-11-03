const flashcards = [
    {
        name: "basic",
        desc: "general words",
        cards: [
            { german: "der", indonesian: "itu", english: "the (masculine)" },
            { german: "die", indonesian: "itu", english: "the (feminine)" },
            { german: "das", indonesian: "itu", english: "the (neuter)" },
            { german: "und", indonesian: "dan", english: "and" },
            { german: "sein", indonesian: "menjadi", english: "to be" },
            { german: "in", indonesian: "di", english: "in" },
            { german: "ein", indonesian: "sebuah", english: "a/an (masculine/neuter)" },
            { german: "zu", indonesian: "ke", english: "to" },
            { german: "haben", indonesian: "memiliki", english: "to have" },
            { german: "ich", indonesian: "saya", english: "I" },
            { german: "werden", indonesian: "menjadi", english: "to become" },
            { german: "sie", indonesian: "dia", english: "she/they" },
            { german: "von", indonesian: "dari", english: "from" },
            { german: "nicht", indonesian: "tidak", english: "not" },
            { german: "mit", indonesian: "dengan", english: "with" },
            { german: "es", indonesian: "itu", english: "it" },
            { german: "so", indonesian: "jadi", english: "so" },
            { german: "an", indonesian: "pada", english: "at/on" },
            { german: "für", indonesian: "untuk", english: "for" },
            { german: "aber", indonesian: "tetapi", english: "but" },
            { german: "all", indonesian: "semua", english: "all" },
            { german: "wenn", indonesian: "jika", english: "if" },
            { german: "oder", indonesian: "atau", english: "or" },
            { german: "das", indonesian: "itu", english: "that" }
        ]
    },
    {
        name: "colors",
        desc: "colors!",
        cards: [
            {
                german: "rot",
                indonesian: "merah",
                english: "red"
            },
            {
                german: "blau",
                indonesian: "biru",
                english: "blue"
            },
            {
                german: "grün",
                indonesian: "hijau",
                english: "green"
            },
            {
                german: "gelb",
                indonesian: "kuning",
                english: "yellow"
            },
            {
                german: "schwarz",
                indonesian: "hitam",
                english: "black"
            },
            {
                german: "weiß",
                indonesian: "putih",
                english: "white"
            },
            {
                german: "orange",
                indonesian: "oranye",
                english: "orange"
            },
            {
                german: "lila",
                indonesian: "ungu",
                english: "purple"
            },
            {
                german: "braun",
                indonesian: "coklat",
                english: "brown"
            },
            {
                german: "rosa",
                indonesian: "merah muda",
                english: "pink"
            },
            {
                german: "grau",
                indonesian: "abu-abu",
                english: "gray"
            },
            {
                german: "türkis",
                indonesian: "biru tosca",
                english: "turquoise"
            },
            {
                german: "silber",
                indonesian: "perak",
                english: "silver"
            },
            {
                german: "gold",
                indonesian: "emas",
                english: "gold"
            },
            {
                german: "hellblau",
                indonesian: "biru muda",
                english: "light blue"
            },
            {
                german: "dunkelgrün",
                indonesian: "hijau tua",
                english: "dark green"
            },
            {
                german: "violett",
                indonesian: "nila",
                english: "violet"
            },
            {
                german: "beige",
                indonesian: "krem",
                english: "beige"
            },
            {
                german: "bordeaux",
                indonesian: "merah anggur",
                english: "burgundy"
            },
            {
                german: "khaki",
                indonesian: "khaki",
                english: "khaki"
            },
            {
                german: "lavendel",
                indonesian: "lavendel",
                english: "lavender"
            },
            {
                german: "königsblau",
                indonesian: "biru kerajaan",
                english: "royal blue"
            },
            {
                german: "smaragdgrün",
                indonesian: "hijau zamrud",
                english: "emerald green"
            },
            {
                german: "indigo",
                indonesian: "indigo",
                english: "indigo"
            }
        ]

    },
    {
        name: "test",
        desc: "general words",
        cards: [
            {
                german: "schwanz",
                indonesian: "kontol",
                english: "dick"
            }
        ]
    },
    {
        name: "animals",
        desc: "general words",
        cards: [
            {
                german: "Hund",
                indonesian: "anjing",
                english: "dog"
            },
            {
                german: "Katze",
                indonesian: "kucing",
                english: "cat"
            },
            {
                german: "Vogel",
                indonesian: "burung",
                english: "bird"
            },
            {
                german: "Fisch",
                indonesian: "ikan",
                english: "fish"
            },
            {
                german: "Kuh",
                indonesian: "sapi",
                english: "cow"
            },
            {
                german: "Schwein",
                indonesian: "babi",
                english: "pig"
            },
            {
                german: "Pferd",
                indonesian: "kuda",
                english: "horse"
            },
            {
                german: "Huhn",
                indonesian: "ayam",
                english: "chicken"
            },
            {
                german: "Schaf",
                indonesian: "domba",
                english: "sheep"
            },
            {
                german: "Ente",
                indonesian: "bebek",
                english: "duck"
            },
            {
                german: "Löwe",
                indonesian: "singa",
                english: "lion"
            },
            {
                german: "Tiger",
                indonesian: "harimau",
                english: "tiger"
            },
            {
                german: "Bär",
                indonesian: "beruang",
                english: "bear"
            },
            {
                german: "Wolf",
                indonesian: "serigala",
                english: "wolf"
            },
            {
                german: "Affe",
                indonesian: "monyet",
                english: "monkey"
            },
            {
                german: "Kaninchen",
                indonesian: "kelinci",
                english: "rabbit"
            },
            {
                german: "Fuchs",
                indonesian: "rubah",
                english: "fox"
            },
            {
                german: "Schlange",
                indonesian: "ular",
                english: "snake"
            },
            {
                german: "Eule",
                indonesian: "burung hantu",
                english: "owl"
            },
            {
                german: "Elefant",
                indonesian: "gajah",
                english: "elephant"
            }
        ]
    },
    {
        name: "food",
        desc: "general words",
        cards: [
            {
                german: "Apfel",
                indonesian: "apel",
                english: "apple"
            },
            {
                german: "Banane",
                indonesian: "pisang",
                english: "banana"
            },
            {
                german: "Brot",
                indonesian: "roti",
                english: "bread"
            },
            {
                german: "Käse",
                indonesian: "keju",
                english: "cheese"
            },
            {
                german: "Eier",
                indonesian: "telur",
                english: "eggs"
            },
            {
                german: "Fisch",
                indonesian: "ikan",
                english: "fish"
            },
            {
                german: "Reis",
                indonesian: "nasi",
                english: "rice"
            },
            {
                german: "Kartoffel",
                indonesian: "kentang",
                english: "potato"
            },
            {
                german: "Nudel",
                indonesian: "mie",
                english: "noodles"
            },
            {
                german: "Tomate",
                indonesian: "tomat",
                english: "tomato"
            },
            {
                german: "Hähnchen",
                indonesian: "ayam",
                english: "chicken"
            },
            {
                german: "Salat",
                indonesian: "selada",
                english: "lettuce"
            },
            {
                german: "Zucker",
                indonesian: "gula",
                english: "sugar"
            },
            {
                german: "Salz",
                indonesian: "garam",
                english: "salt"
            },
            {
                german: "Kaffee",
                indonesian: "kopi",
                english: "coffee"
            },
            {
                german: "Milch",
                indonesian: "susu",
                english: "milk"
            },
            {
                german: "Wasser",
                indonesian: "air",
                english: "water"
            },
            {
                german: "Orangensaft",
                indonesian: "jus jeruk",
                english: "orange juice"
            },
            {
                german: "Bohnen",
                indonesian: "kacang",
                english: "beans"
            },
            {
                german: "Suppe",
                indonesian: "sup",
                english: "soup"
            }
        ]
    }
]


export default flashcards