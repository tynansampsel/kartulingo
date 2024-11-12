const flashcards = [
    {
     name: "Guess The Meaning",
         desc: "Guess The Meaning is a fun game that tests your ability to understand the German language. In this game, you will be given words in German, and your challenge is to guess their meaning in Indonesian or English. Each word has a specific meaning that you need to figure out. The more words you correctly guess, the higher your score will be!",
         cards: [
            {
                german: "Maus",
                indonesian: "Tikus",
                english: "Mouse"
            },
            {
                german: "Schwester",
                indonesian: "Sodara perempuan",
                english: "Sister"
            },
            {
                german: "Geschwister",
                indonesian: "Saudara",
                english: "Siblings"
            },
            {
                german: "Mann",
                indonesian: "Suami",
                english: "Husband"
            },
            {
                german: "Frau",
                indonesian: "Istri",
                english: "Wife"
            },
            {
                german: "Bar",
                indonesian: "Bar",
                english: "Bar"
            },
            {
                german: "Sport",
                indonesian: "Olahraga",
                english: "Sport"
            },
            {
                german: "Geige",
                indonesian: "Biola",
                english: "Violin"
            },
            {
                german: "Ball",
                indonesian: "Bola",
                english: "Ball"
            },
            {
                german: "Motorrad",
                indonesian: "Motor",
                english: "Motorcycle"
            },
            {
                german: "Saxofon",
                indonesian: "Saksofon",
                english: "Saxophone"
            },
            {
                german: "Trompete",
                indonesian: "Terompet",
                english: "Trumpet"
            },
            {
                german: "Idee",
                indonesian: "Ide",
                english: "Idea"
            },
            {
                german: "Praxis",
                indonesian: "Praktik",
                english: "Practice"
            },
            {
                german: "Problem",
                indonesian: "Masalah",
                english: "Problem"
            },
            {
                german: "Baby",
                indonesian: "Bayi",
                english: "Baby"
            },
            {
                german: "Kind",
                indonesian: "Anak",
                english: "Kid"
            },
            {
                german: "Junge",
                indonesian: "Anak laki-laki",
                english: "Boy"
            },
            {
                german: "Mädchen",
                indonesian: "Gadis",
                english: "Girl"
            },
            {
                german: "Sohn",
                indonesian: "Putra",
                english: "Son"
            },
            {
                german: "Tochter",
                indonesian: "Putri",
                english: "Daughter"
            },
            {
                german: "Mutter",
                indonesian: "Ibu",
                english: "Mother"
            },
            {
                german: "Vater",
                indonesian: "Ayah",
                english: "Father"
            },
            {
                german: "Eltern",
                indonesian: "Orang tua",
                english: "Parents"
            },
            {
                german: "Bruder",
                indonesian: "Sodara laki-laki",
                english: "Brother"
            },
            {
                german: "Nachricht",
                indonesian: "Pesan",
                english: "Massage"
            },
            {
                german: "Bibliothek",
                indonesian: "Perpustakaan",
                english: "Library"
            },
            {
                german: "Hausaufgabe",
                indonesian: "PR",
                english: "Homework"
            },
            {
                german: "Zeitung",
                indonesian: "Koran",
                english: "Newspaper"
            },
            {
                german: "Stress",
                indonesian: "Stres",
                english: "Stress"
            },
            {
                german: "Uhr",
                indonesian: "Pukul",
                english: "Clock"
            },
            {
                german: "Verspätung",
                indonesian: "Menunda",
                english: "Delay"
            },
            {
                german: "Familie",
                indonesian: "Keluarga",
                english: "Family"
            },
            {
                german: "Verwandte",
                indonesian: "Kerabat",
                english: "Relativ"
            },
            {
                german: "Besprechung",
                indonesian: "Diskusi",
                english: "Discussion"
            },
            {
                german: "Gast",
                indonesian: "Tamu",
                english: "Guest"
            },
            {
                german: "Chor",
                indonesian: "Paduan suara",
                english: "Choir"
            },
            {
                german: "Apfel",
                indonesian: "Apel",
                english: "Apple"
            },
            {
                german: "Markt",
                indonesian: "Pasar",
                english: "Market"
            },
            {
                german: "Saft",
                indonesian: "Jus",
                english: "Juice"
            },
            {
                german: "Plan",
                indonesian: "Rencana",
                english: "Plan"
            },
            {
                german: "Sthul",
                indonesian: "Kursi",
                english: "Chair"
            },
            {
                german: "Baum",
                indonesian: "Pohon",
                english: "Tree"
            },
            {
                german: "Supermarkt",
                indonesian: "Pasar swalayan",
                english: "Supermarket"
            },
            {
                german: "Test",
                indonesian: "Tes",
                english: "Test"
            },
            {
                german: "Bus",
                indonesian: "Bis",
                english: "Bus"
            },
            {
                german: "Schuh",
                indonesian: "Sepatu",
                english: "Shoe"
            },
            {
                german: "Tisch",
                indonesian: "Meja",
                english: "Table"
            },
            {
                german: "Fuß",
                indonesian: "Kaki",
                english: "Foot"
            },
            {
                german: "Monat",
                indonesian: "Bulan",
                english: "Month"
            },
            {
                german: "Film",
                indonesian: "Film",
                english: "Movie"
            },
            {
                german: "Regisseur",
                indonesian: "Direktur",
                english: "Director"
            },
            {
                german: "Mensch",
                indonesian: "Orang",
                english: "Human"
            },
            {
                german: "Start",
                indonesian: "Mulai",
                english: "Start"
            },
            {
                german: "Star",
                indonesian: "Bintang",
                english: "Star"
            },
            {
                german: "Euro",
                indonesian: "Euro",
                english: "Euro"
            },
            {
                german: "Park",
                indonesian: "Taman",
                english: "Park"
            },
            {
                german: "Besucher",
                indonesian: "Pengunjung",
                english: "Visitor"
            },
            {
                german: "Kalender",
                indonesian: "Kalender",
                english: "Calender"
            },
            {
                german: "Kilometer",
                indonesian: "Kilometer",
                english: "Kilometer"
            },
            {
                german: "Meter",
                indonesian: "Meter",
                english: "Meter"
            },
            {
                german: "Schauspieler",
                indonesian: "Aktor",
                english: "Actor"
            },
            {
                german: "Messe",
                indonesian: "Pameran",
                english: "Exhibition"
            },
            {
                german: "Jacke",
                indonesian: "Jaket",
                english: "Jacket"
            },
            {
                german: "Fahrkarte",
                indonesian: "Tiket",
                english: "Ticket"
            },
            {
                german: "Tasse",
                indonesian: "Cangkir",
                english: "Cup"
            },
            {
                german: "Tür",
                indonesian: "Pintu",
                english: "Door"
            },
            {
                german: "Mappe",
                indonesian: "Map",
                english: "Folder"
            },
            {
                german: "U-Bahn",
                indonesian: "Kereta bawah tanah",
                english: "underground train"
            },
            {
                german: "Geschichte",
                indonesian: "Sejarah",
                english: "History"
            },
            {
                german: "Tasche",
                indonesian: "Tas",
                english: "Bag"
            },
            {
                german: "Rucksack",
                indonesian: "Ransel",
                english: "Backpack"
            },
            {
                german: "Mitte",
                indonesian: "Tengah",
                english: "Middle"
            },
            {
                german: "Frage",
                indonesian: "Pertanyaan",
                english: "Question"
            },
            {
                german: "Besucherin",
                indonesian: "Pengunjung perempuan",
                english: "Visitor"
            },
            {
                german: "Jahreszeit",
                indonesian: "Musim",
                english: "Season"
            },
            {
                german: "Gruppe",
                indonesian: "Kelompok",
                english: "Group"
            },
            {
                german: "Welt",
                indonesian: "Dunia",
                english: "World"
            },
            {
                german: "Blume",
                indonesian: "Bunga",
                english: "Flower"
            },
            {
                german: "Morgen",
                indonesian: "Pagi",
                english: "Morning"
            },
            {
                german: "Station",
                indonesian: "Stasiun",
                english: "Station"
            },
            {
                german: "Beschreibung",
                indonesian: "Deskripsi",
                english: "Description"
            },
            {
                german: "Übung",
                indonesian: "Latihan",
                english: "Exercise"
            },
            {
                german: "Ausstellung",
                indonesian: "Pameran",
                english: "Exhibition"
            },
            {
                german: "Lösung",
                indonesian: "Solusi",
                english: "Solution"
            },
            {
                german: "Festival",
                indonesian: "Festival",
                english: "Festival"
            },
            {
                german: "Ticket",
                indonesian: "Tiket",
                english: "Ticket"
            },
            {
                german: "Publikum",
                indonesian: "Penonton",
                english: "Audience"
            },
            {
                german: "Event",
                indonesian: "Peristiwa",
                english: "Event"
            },
            {
                german: "Orchester",
                indonesian: "Orkestra",
                english: "Orchestra"
            },
            {
                german: "Kellner",
                indonesian: "Pelayan",
                english: "Waiter"
            },
            {
                german: "Glück",
                indonesian: "Beruntung",
                english: "Luck"
            },
            {
                german: "Fahrrad",
                indonesian: "Sepeda",
                english: "Bicycle"
            },
            {
                german: "Bild",
                indonesian: "Gambar",
                english: "Image"
            },
            {
                german: "Konzert",
                indonesian: "Konser",
                english: "Concert"
            },
            {
                german: "Plakat",
                indonesian: "Poster",
                english: "Poster"
            },
            {
                german: "Brot",
                indonesian: "Roti",
                english: "Bread"
            },
            {
                german: "Ziel",
                indonesian: "Tujuan",
                english: "Destination"
            },
            {
                german: "Bier",
                indonesian: "Bir",
                english: "Beer"
            },
            {
                german: "Flugzeug",
                indonesian: "Pesawat",
                english: "Plane"
            },
            {
                german: "Bahnhof",
                indonesian: "Stasiun kereta",
                english: "Station"
            },
            {
                german: "Fluss",
                indonesian: "Sungai",
                english: "River"
            },
            {
                german: "Zug",
                indonesian: "Kereta",
                english: "Train"
            },
            {
                german: "Turm",
                indonesian: "Menara",
                english: "Tower"
            },
            {
                german: "Weg",
                indonesian: "Jalan",
                english: "Path"
            },
            {
                german: "Kurs",
                indonesian: "Latihan",
                english: "Course"
            },
            {
                german: "Stift",
                indonesian: "Pulpen",
                english: "Pen"
            },
            {
                german: "Ort",
                indonesian: "Tempat tinggal",
                english: "Place"
            },
            {
                german: "Tag",
                indonesian: "Hari",
                english: "Day"
            },
            {
                german: "Beruf",
                indonesian: "Profesi",
                english: "Profession"
            },
            {
                german: "Freund",
                indonesian: "Teman",
                english: "Friend"
            },
            {
                german: "Hafen",
                indonesian: "Pelabuhan",
                english: "Harbour"
            },
            {
                german: "See",
                indonesian: "Danau",
                english: "Lake"
            },
            {
                german: "Kollege",
                indonesian: "Kolega",
                english: "Coworker"
            },
            {
                german: "Patient",
                indonesian: "Pasien",
                english: "Pateint"
            },
            {
                german: "Name",
                indonesian: "Nama",
                english: "Name"
            },
            {
                german: "Krankenpfleger",
                indonesian: "Perawat",
                english: "Nurse"
            },
            {
                german: "Computer",
                indonesian: "Komputer",
                english: "Computer"
            },
            {
                german: "Schlüssel",
                indonesian: "Kunci",
                english: "Key"
            },
            {
                german: "Kunst",
                indonesian: "Seni",
                english: "Art"
            },
            {
                german: "Halle",
                indonesian: "Aula",
                english: "Hall"
            },
            {
                german: "Fahrt",
                indonesian: "Mengendarai",
                english: "Ride"
            },
            {
                german: "Brücke",
                indonesian: "Jembatan",
                english: "Bridge"
            },
            {
                german: "Stadt",
                indonesian: "Kota",
                english: "City"
            },
            {
                german: "Spritze",
                indonesian: "Suntikan",
                english: "Syringe"
            },
            {
                german: "Zahl",
                indonesian: "Angka",
                english: "Number"
            },
            {
                german: "Stunde",
                indonesian: "Jam",
                english: "Hour"
            },
            {
                german: "Straße",
                indonesian: "Jalan",
                english: "Street"
            },
            {
                german: "Sprache",
                indonesian: "Bahasa",
                english: "Language"
            },
            {
                german: "Woche",
                indonesian: "Mingguan",
                english: "Week"
            },
            {
                german: "Tablette",
                indonesian: "Pill",
                english: "Tablet"
            },
            {
                german: "Rechnung",
                indonesian: "Tagihan",
                english: "Bill"
            },
            {
                german: "Wochenende",
                indonesian: "Akhir pekan",
                english: "Weekend"
            },
            {
                german: "Zimmer",
                indonesian: "Kamar",
                english: "Room"
            },
            {
                german: "Datum",
                indonesian: "Tanggal",
                english: "Date"
            },
            {
                german: "Hobby",
                indonesian: "Hobi",
                english: "Hobby"
            },
            {
                german: "Auto",
                indonesian: "Mobil",
                english: "Car"
            },
            {
                german: "Schiff",
                indonesian: "Kapal",
                english: "Ship"
            },
            {
                german: "Medikament",
                indonesian: "Obat",
                english: "Medicine"
            },
            {
                german: "Meer",
                indonesian: "Laut",
                english: "Sea"
            },
            {
                german: "Seminar",
                indonesian: "Seminar",
                english: "Seminar"
            },
            {
                german: "Jahr",
                indonesian: "Tahun",
                english: "Year"
            },
            {
                german: "Haus",
                indonesian: "Rumah",
                english: "House"
            },
            {
                german: "Krankenhaus",
                indonesian: "Rumah sakit",
                english: "Hospital"
            },
            {
                german: "Land",
                indonesian: "Negara",
                english: "Country"
            },
            {
                german: "Buch",
                indonesian: "Buku",
                english: "Book"
            },
            {
                german: "Wort",
                indonesian: "Kata",
                english: "Word"
            },
            {
                german: "Geld",
                indonesian: "Uang",
                english: "Money"
            },
            {
                german: "Konzerthaus",
                indonesian: "Aula konser",
                english: "Concert house"
            },
            {
                german: "Schwimmbad",
                indonesian: "Kolam renang",
                english: "Swimming pool"
            },
            {
                german: "Glas",
                indonesian: "Gelas",
                english: "Glass"
            },
            {
                german: "Vorname",
                indonesian: "Nama depan",
                english: "Forename"
            },
            {
                german: "Nachname",
                indonesian: "Nama belakang",
                english: "Surname"
            },
            {
                german: "Partner",
                indonesian: "Pasangan",
                english: "Partner"
            },
            {
                german: "Autobahn",
                indonesian: "Jalan tol",
                english: "Highway"
            },
            {
                german: "Flasche",
                indonesian: "Botol",
                english: "Bottle"
            },
            {
                german: "Koffer",
                indonesian: "Koper",
                english: "Suitcase"
            },
            {
                german: "Kino",
                indonesian: "Bioskop",
                english: "Cinema"
            },
            {
                german: "Theater",
                indonesian: "Teater",
                english: "Theater"
            },
            {
                german: "Museum",
                indonesian: "Musium",
                english: "Museum"
            },
            {
                german: "Termin",
                indonesian: "Janji temu",
                english: "Appointment"
            },
            {
                german: "Geburtsort",
                indonesian: "Tempat lahir",
                english: "Birth place"
            },
            {
                german: "Wörterbuch",
                indonesian: "Kamus",
                english: "Dictionary"
            },
            {
                german: "Obst",
                indonesian: "Buah",
                english: "Fruit"
            },
            {
                german: "Apfel",
                indonesian: "Apel",
                english: "Apple"
            },
            {
                german: "Banane",
                indonesian: "Pisang",
                english: "Banana"
            },
            {
                german: "Birne",
                indonesian: "Pir",
                english: "Pear"
            },
            {
                german: "Gemüse",
                indonesian: "Sayuran",
                english: "Vegetable"
            },
            {
                german: "Gurke",
                indonesian: "Timun",
                english: "Cucumber"
            },
            {
                german: "Kartoffel",
                indonesian: "Kentang",
                english: "Potatoe"
            },
            {
                german: "Salat",
                indonesian: "Selada",
                english: "Lettuce"
            },
            {
                german: "Tomate",
                indonesian: "Tomat",
                english: "Tomato"
            },
            {
                german: "Olive",
                indonesian: "Zaitun",
                english: "Olive"
            },
            {
                german: "Zwiebel",
                indonesian: "Bawang",
                english: "Onion"
            },
            {
                german: "Brot",
                indonesian: "Roti",
                english: "Bread"
            },
            {
                german: "Brötchen",
                indonesian: "Roti kecil",
                english: "Bread roll"
            },
            {
                german: "Keks",
                indonesian: "Biskuit",
                english: "Cookie"
            },
            {
                german: "Kuchen",
                indonesian: "Kue",
                english: "Cake"
            },
            {
                german: "Fleisch",
                indonesian: "Daging",
                english: "Meat"
            },
            {
                german: "Hähnchen",
                indonesian: "Ayam",
                english: "Chicken"
            },
            {
                german: "Schincken",
                indonesian: "Daging babi",
                english: "Ham"
            },
            {
                german: "Wurst",
                indonesian: "Sosis",
                english: "Sausage"
            },
            {
                german: "Joghurt",
                indonesian: "Yogurt",
                english: "Yogurt"
            },
            {
                german: "Salz",
                indonesian: "Garam",
                english: "Salt"
            },
            {
                german: "Butter",
                indonesian: "Mentega",
                english: "Butter"
            },
            {
                german: "Käse",
                indonesian: "Keju",
                english: "Chesse"
            },
            {
                german: "Milch",
                indonesian: "Susu",
                english: "Milk"
            },
            {
                german: "Sahne",
                indonesian: "Krim",
                english: "Cream"
            },
            {
                german: "Pfeffer",
                indonesian: "Lada",
                english: "Pepper"
            },
            {
                german: "Zucker",
                indonesian: "Gula",
                english: "Sugar"
            },
            {
                german: "Essig",
                indonesian: "Cuka",
                english: "Vinegar"
            },
            {
                german: "Öl",
                indonesian: "Minyak",
                english: "Oil"
            },
            {
                german: "Nudel",
                indonesian: "Mie",
                english: "Noodle"
            },
            {
                german: "Reis",
                indonesian: "Beras",
                english: "Rice"
            },
            {
                german: "Ei",
                indonesian: "Telur",
                english: "Egg"
            },
            {
                german: "Fisch",
                indonesian: "Ikan",
                english: "Fish"
            },
            {
                german: "Marmelade",
                indonesian: "Selai",
                english: "Jam"
            },
            {
                german: "Müsli",
                indonesian: "Sereal",
                english: "Cereal"
            },
            {
                german: "Einladung",
                indonesian: "Undangan",
                english: "Invitation"
            },
            {
                german: "Getränk",
                indonesian: "Minuman",
                english: "Drink"
            },
            {
                german: "Wasser",
                indonesian: "Air",
                english: "Water"
            },
            {
                german: "Saft",
                indonesian: "Jus",
                english: "Juice"
            },
            {
                german: "Zitrone",
                indonesian: "Lemon",
                english: "Lemon"
            },
            {
                german: "Kaffee",
                indonesian: "Kopi",
                english: "Coffee"
            },
            {
                german: "Tee",
                indonesian: "Teh",
                english: "Tea"
            },
            {
                german: "Geschäft",
                indonesian: "Toko",
                english: "Shop"
            },
            {
                german: "Bäckerei",
                indonesian: "Toko roti",
                english: "Bread shop"
            },
            {
                german: "Packung",
                indonesian: "Kemasan",
                english: "Package"
            },
            {
                german: "Metzgerei",
                indonesian: "Toko daging",
                english: "Meat shop"
            },
            {
                german: "Becher",
                indonesian: "Kup",
                english: "Cup"
            },
            {
                german: "Dose",
                indonesian: "Kaleng",
                english: "Can"
            },
            {
                german: "Stück",
                indonesian: "Potong",
                english: "Piece"
            },
            {
                german: "Tüte",
                indonesian: "Tas",
                english: "Bag"
            },
            {
                german: "Preis",
                indonesian: "Harga",
                english: "Price"
            },
            {
                german: "Kassenzettel",
                indonesian: "Struk",
                english: "Receipt"
            },
            {
                german: "Essen",
                indonesian: "Makanan",
                english: "Food"
            },
            {
                german: "Gericht",
                indonesian: "Hidangan",
                english: "Dish"
            },
            {
                german: "Suppe",
                indonesian: "Sup",
                english: "Soup"
            },
            {
                german: "Kantine",
                indonesian: "Kantin",
                english: "Canteen"
            },
            {
                german: "Mensa",
                indonesian: "Kantin",
                english: "Canteen"
            }
        ]
    },
    {
     name: "Guess The Meaning Adjective",
         desc: "Guess The Meaning Adjective is a fun game that tests your ability to understand adjectives in German language. In this game, you will be given words in German, and your challenge is to guess their meaning in Indonesian or English. Each word has a specific meaning that you need to figure out. The more words you correctly guess, the higher your score will be!",
         cards: [
            {
                german: "Neu",
                indonesian: "Baru",
                english: "New"
            },
            {
                german: "Alt",
                indonesian: "Tua",
                english: "Old"
            },
            {
                german: "Jung",
                indonesian: "Muda",
                english: "Young"
            },
            {
                german: "Gut",
                indonesian: "Baik",
                english: "Good"
            },
            {
                german: "Schlecht",
                indonesian: "Buruk",
                english: "Bad"
            },
            {
                german: "Groß",
                indonesian: "Besar",
                english: "Big"
            },
            {
                german: "Klein",
                indonesian: "Kecil",
                english: "Small"
            },
            {
                german: "Kurz",
                indonesian: "Pendek",
                english: "Short"
            },
            {
                german: "Lang",
                indonesian: "Panjang",
                english: "Long"
            },
            {
                german: "Breit",
                indonesian: "Luas",
                english: "Wide"
            },
            {
                german: "Spät",
                indonesian: "Terlambat",
                english: "Late"
            },
            {
                german: "Früh",
                indonesian: "lebih awal",
                english: "Early"
            },
            {
                german: "Schwer",
                indonesian: "Berat",
                english: "Heavy"
            },
            {
                german: "Leicht",
                indonesian: "Ringan",
                english: "Light"
            },
            {
                german: "einfach",
                indonesian: "mudah",
                english: "easy"
            },
            {
                german: "schnell",
                indonesian: "cepat",
                english: "fast"
            },
            {
                german: "langsam",
                indonesian: "lambat",
                english: "slow"
            },
            {
                german: "billig",
                indonesian: "murah",
                english: "cheap"
            },
            {
                german: "gunstig (berkualitas)",
                indonesian: "murah",
                english: "cheap"
            },
            {
                german: "teuer",
                indonesian: "mahal",
                english: "expensive"
            },
            {
                german: "kalt",
                indonesian: "dingin",
                english: "cold"
            },
            {
                german: "warm",
                indonesian: "hangat",
                english: "warm"
            },
            {
                german: "heiß",
                indonesian: "panas",
                english: "hot"
            },
            {
                german: "glücklich",
                indonesian: "bahagia",
                english: "happy"
            },
            {
                german: "traurig",
                indonesian: "sedih",
                english: "sad"
            },
            {
                german: "gesund",
                indonesian: "sehat",
                english: "healthy"
            },
            {
                german: "krank",
                indonesian: "sakit",
                english: "sick"
            },
            {
                german: "arm",
                indonesian: "miskin",
                english: "poor"
            },
            {
                german: "reich",
                indonesian: "kaya",
                english: "rich"
            },
            {
                german: "schön",
                indonesian: "cantik",
                english: "beautiful"
            },
            {
                german: "hässlich",
                indonesian: "jelek",
                english: "ugly"
            },
            {
                german: "richtig",
                indonesian: "benar",
                english: "right"
            },
            {
                german: "falsch",
                indonesian: "salah",
                english: "wrong"
            },
            {
                german: "wichtig",
                indonesian: "penting",
                english: "important"
            },
            {
                german: "müde",
                indonesian: "lelah",
                english: "tired"
            },
            {
                german: "langweilig",
                indonesian: "bosen",
                english: "boring"
            },
            {
                german: "interessant",
                indonesian: "menarik",
                english: "interesting"
            },
            {
                german: "hoch",
                indonesian: "tinggi",
                english: "high"
            },
            {
                german: "niedrig",
                indonesian: "rendah",
                english: "low"
            },
            {
                german: "weit",
                indonesian: "jauh",
                english: "far"
            },
            {
                german: "nah",
                indonesian: "dekat",
                english: "close"
            },
            {
                german: "viel",
                indonesian: "banyak",
                english: "much"
            },
            {
                german: "wenig",
                indonesian: "sedikit",
                english: "little"
            },
            {
                german: "laut",
                indonesian: "keras",
                english: "loud"
            },
            {
                german: "leise",
                indonesian: "diam",
                english: "quiet"
            },
            {
                german: "stark",
                indonesian: "kuat",
                english: "strong"
            },
            {
                german: "schwach",
                indonesian: "lemah",
                english: "weak"
            },
            {
                german: "anders",
                indonesian: "berbeda",
                english: "different"
            },
            {
                german: "ähnlich",
                indonesian: "sama",
                english: "similar"
            },
            {
                german: "sauber",
                indonesian: "bersih",
                english: "clean"
            },
            {
                german: "schmutzig",
                indonesian: "kotor",
                english: "dirty"
            },
            {
                german: "flach",
                indonesian: "datar",
                english: "flat"
            },
            {
                german: "tief",
                indonesian: "dalam",
                english: "deep"
            }
        ]
    },
    {
     name: "Guess The Article",
         desc: "Guess The Article is a fun game that tests your ability to understand the German language. In this game, you will be given words in German, and your challenge is to guess the article of the word in German. Each word has a specific article (der/die/das) that you need to figure out. The more words you correctly guess, the higher your score will be!",
         cards: [
            {
                german: "Maus",
                indonesian: "die",
                english: ""
            },
            {
                german: "Schwester",
                indonesian: "die",
                english: ""
            },
            {
                german: "Geschwister (pl)",
                indonesian: "die",
                english: ""
            },
            {
                german: "Mann",
                indonesian: "der",
                english: ""
            },
            {
                german: "Frau",
                indonesian: "die",
                english: ""
            },
            {
                german: "Bar",
                indonesian: "die",
                english: ""
            },
            {
                german: "Sport",
                indonesian: "der",
                english: ""
            },
            {
                german: "Geige",
                indonesian: "die",
                english: ""
            },
            {
                german: "Ball",
                indonesian: "der",
                english: ""
            },
            {
                german: "Motorrad",
                indonesian: "das",
                english: ""
            },
            {
                german: "Saxofon",
                indonesian: "das",
                english: ""
            },
            {
                german: "Trompete",
                indonesian: "die",
                english: ""
            },
            {
                german: "Idee",
                indonesian: "die",
                english: ""
            },
            {
                german: "Praxis",
                indonesian: "die",
                english: ""
            },
            {
                german: "Problem",
                indonesian: "das",
                english: ""
            },
            {
                german: "Baby",
                indonesian: "das",
                english: ""
            },
            {
                german: "Kind",
                indonesian: "das",
                english: ""
            },
            {
                german: "Junge",
                indonesian: "der",
                english: ""
            },
            {
                german: "Mädchen",
                indonesian: "das",
                english: ""
            },
            {
                german: "Sohn",
                indonesian: "der",
                english: ""
            },
            {
                german: "Tochter",
                indonesian: "die",
                english: ""
            },
            {
                german: "Mutter",
                indonesian: "die",
                english: ""
            },
            {
                german: "Vater",
                indonesian: "der",
                english: ""
            },
            {
                german: "Eltern (pl)",
                indonesian: "die",
                english: ""
            },
            {
                german: "Bruder",
                indonesian: "der",
                english: ""
            },
            {
                german: "Nachricht",
                indonesian: "die",
                english: ""
            },
            {
                german: "Bibliothek",
                indonesian: "die",
                english: ""
            },
            {
                german: "Hausaufgabe",
                indonesian: "die",
                english: ""
            },
            {
                german: "Zeitung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Stress",
                indonesian: "der",
                english: ""
            },
            {
                german: "Uhr",
                indonesian: "die",
                english: ""
            },
            {
                german: "Verspätung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Familie",
                indonesian: "die",
                english: ""
            },
            {
                german: "Verwandte",
                indonesian: "der",
                english: "die"
            },
            {
                german: "Besprechung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Gast",
                indonesian: "der",
                english: ""
            },
            {
                german: "Chor",
                indonesian: "der",
                english: ""
            },
            {
                german: "Apfel",
                indonesian: "der",
                english: ""
            },
            {
                german: "Markt",
                indonesian: "der",
                english: ""
            },
            {
                german: "Saft",
                indonesian: "der",
                english: ""
            },
            {
                german: "Plan",
                indonesian: "der",
                english: ""
            },
            {
                german: "Sthul",
                indonesian: "der",
                english: ""
            },
            {
                german: "Baum",
                indonesian: "der",
                english: ""
            },
            {
                german: "Supermarkt",
                indonesian: "der",
                english: ""
            },
            {
                german: "Test",
                indonesian: "der",
                english: ""
            },
            {
                german: "Bus",
                indonesian: "der",
                english: ""
            },
            {
                german: "Schuh",
                indonesian: "der",
                english: ""
            },
            {
                german: "Tisch",
                indonesian: "der",
                english: ""
            },
            {
                german: "Fuß",
                indonesian: "der",
                english: ""
            },
            {
                german: "Monat",
                indonesian: "der",
                english: ""
            },
            {
                german: "Film",
                indonesian: "der",
                english: ""
            },
            {
                german: "Regisseur",
                indonesian: "der",
                english: ""
            },
            {
                german: "Mensch",
                indonesian: "der",
                english: ""
            },
            {
                german: "Start",
                indonesian: "der",
                english: ""
            },
            {
                german: "Star",
                indonesian: "der",
                english: ""
            },
            {
                german: "Euro",
                indonesian: "der",
                english: ""
            },
            {
                german: "Park",
                indonesian: "der",
                english: ""
            },
            {
                german: "Besucher",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kalender",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kilometer",
                indonesian: "der",
                english: ""
            },
            {
                german: "Meter",
                indonesian: "der",
                english: ""
            },
            {
                german: "Schauspieler",
                indonesian: "der",
                english: ""
            },
            {
                german: "Messe",
                indonesian: "die",
                english: ""
            },
            {
                german: "Jacke",
                indonesian: "die",
                english: ""
            },
            {
                german: "Fahrkarte",
                indonesian: "die",
                english: ""
            },
            {
                german: "Tasse",
                indonesian: "die",
                english: ""
            },
            {
                german: "Tür",
                indonesian: "die",
                english: ""
            },
            {
                german: "Mappe",
                indonesian: "die",
                english: ""
            },
            {
                german: "U-Bahn",
                indonesian: "die",
                english: ""
            },
            {
                german: "Geschichte",
                indonesian: "die",
                english: ""
            },
            {
                german: "Tasche",
                indonesian: "die",
                english: ""
            },
            {
                german: "Rucksack",
                indonesian: "die",
                english: ""
            },
            {
                german: "Mitte",
                indonesian: "die",
                english: ""
            },
            {
                german: "Frage",
                indonesian: "die",
                english: ""
            },
            {
                german: "Besucherin",
                indonesian: "die",
                english: ""
            },
            {
                german: "Jahreszeit",
                indonesian: "die",
                english: ""
            },
            {
                german: "Gruppe",
                indonesian: "die",
                english: ""
            },
            {
                german: "Welt",
                indonesian: "die",
                english: ""
            },
            {
                german: "Blume",
                indonesian: "die",
                english: ""
            },
            {
                german: "Morgen",
                indonesian: "der",
                english: ""
            },
            {
                german: "Station",
                indonesian: "die",
                english: ""
            },
            {
                german: "Beschreibung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Übung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Ausstellung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Lösung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Festival",
                indonesian: "das",
                english: ""
            },
            {
                german: "Ticket",
                indonesian: "das",
                english: ""
            },
            {
                german: "Publikum",
                indonesian: "das",
                english: ""
            },
            {
                german: "Event",
                indonesian: "das",
                english: ""
            },
            {
                german: "Orchester",
                indonesian: "das",
                english: ""
            },
            {
                german: "Kellner",
                indonesian: "der",
                english: ""
            },
            {
                german: "Glück",
                indonesian: "das",
                english: ""
            },
            {
                german: "Fahrrad",
                indonesian: "das",
                english: ""
            },
            {
                german: "Bild",
                indonesian: "das",
                english: ""
            },
            {
                german: "Konzert",
                indonesian: "das",
                english: ""
            },
            {
                german: "Plakat",
                indonesian: "das",
                english: ""
            },
            {
                german: "Brot",
                indonesian: "das",
                english: ""
            },
            {
                german: "Ziel",
                indonesian: "das",
                english: ""
            },
            {
                german: "Bier",
                indonesian: "das",
                english: ""
            },
            {
                german: "Flugzeug",
                indonesian: "das",
                english: ""
            },
            {
                german: "Bahnhof",
                indonesian: "der",
                english: ""
            },
            {
                german: "Fluss",
                indonesian: "der",
                english: ""
            },
            {
                german: "Zug",
                indonesian: "der",
                english: ""
            },
            {
                german: "Turm",
                indonesian: "der",
                english: ""
            },
            {
                german: "Weg",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kurs",
                indonesian: "der",
                english: ""
            },
            {
                german: "Stift",
                indonesian: "der",
                english: ""
            },
            {
                german: "Ort",
                indonesian: "der",
                english: ""
            },
            {
                german: "Tag",
                indonesian: "der",
                english: ""
            },
            {
                german: "Beruf",
                indonesian: "der",
                english: ""
            },
            {
                german: "Freund",
                indonesian: "der",
                english: ""
            },
            {
                german: "Hafen",
                indonesian: "der",
                english: ""
            },
            {
                german: "See",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kollege",
                indonesian: "der",
                english: ""
            },
            {
                german: "Patient",
                indonesian: "der",
                english: ""
            },
            {
                german: "Name",
                indonesian: "der",
                english: ""
            },
            {
                german: "Krankenpfleger",
                indonesian: "der",
                english: ""
            },
            {
                german: "Computer",
                indonesian: "der",
                english: ""
            },
            {
                german: "Schlüssel",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kunst",
                indonesian: "die",
                english: ""
            },
            {
                german: "Halle",
                indonesian: "die",
                english: ""
            },
            {
                german: "Fahrt",
                indonesian: "die",
                english: ""
            },
            {
                german: "Brücke",
                indonesian: "die",
                english: ""
            },
            {
                german: "Stadt",
                indonesian: "die",
                english: ""
            },
            {
                german: "Spritze",
                indonesian: "die",
                english: ""
            },
            {
                german: "Zahl",
                indonesian: "die",
                english: ""
            },
            {
                german: "Stunde",
                indonesian: "die",
                english: ""
            },
            {
                german: "Straße",
                indonesian: "die",
                english: ""
            },
            {
                german: "Sprache",
                indonesian: "die",
                english: ""
            },
            {
                german: "Woche",
                indonesian: "die",
                english: ""
            },
            {
                german: "Tablette",
                indonesian: "die",
                english: ""
            },
            {
                german: "Rechnung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Wochenende",
                indonesian: "das",
                english: ""
            },
            {
                german: "Zimmer",
                indonesian: "das",
                english: ""
            },
            {
                german: "Datum",
                indonesian: "das",
                english: ""
            },
            {
                german: "Hobby",
                indonesian: "das",
                english: ""
            },
            {
                german: "Auto",
                indonesian: "das",
                english: ""
            },
            {
                german: "Schiff",
                indonesian: "das",
                english: ""
            },
            {
                german: "Medikament",
                indonesian: "das",
                english: ""
            },
            {
                german: "Meer",
                indonesian: "das",
                english: ""
            },
            {
                german: "Seminar",
                indonesian: "das",
                english: ""
            },
            {
                german: "Jahr",
                indonesian: "das",
                english: ""
            },
            {
                german: "Haus",
                indonesian: "das",
                english: ""
            },
            {
                german: "Krankenhaus",
                indonesian: "das",
                english: ""
            },
            {
                german: "Land",
                indonesian: "das",
                english: ""
            },
            {
                german: "Buch",
                indonesian: "das",
                english: ""
            },
            {
                german: "Wort",
                indonesian: "das",
                english: ""
            },
            {
                german: "Geld",
                indonesian: "das",
                english: ""
            },
            {
                german: "Konzerthaus",
                indonesian: "das",
                english: ""
            },
            {
                german: "Schwimmbad",
                indonesian: "das",
                english: ""
            },
            {
                german: "Glas",
                indonesian: "das",
                english: ""
            },
            {
                german: "Vorname",
                indonesian: "der",
                english: ""
            },
            {
                german: "Nachname",
                indonesian: "der",
                english: ""
            },
            {
                german: "Partner",
                indonesian: "der",
                english: ""
            },
            {
                german: "Autobahn",
                indonesian: "die",
                english: ""
            },
            {
                german: "Flasche",
                indonesian: "die",
                english: ""
            },
            {
                german: "Koffer",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kino",
                indonesian: "das",
                english: ""
            },
            {
                german: "Theater",
                indonesian: "das",
                english: ""
            },
            {
                german: "Museum",
                indonesian: "das",
                english: ""
            },
            {
                german: "Termin",
                indonesian: "der",
                english: ""
            },
            {
                german: "Geburtsort",
                indonesian: "der",
                english: ""
            },
            {
                german: "Wörterbuch",
                indonesian: "das",
                english: ""
            },
            {
                german: "Obst",
                indonesian: "das",
                english: ""
            },
            {
                german: "Apfel",
                indonesian: "der",
                english: ""
            },
            {
                german: "Banane",
                indonesian: "die",
                english: ""
            },
            {
                german: "Birne",
                indonesian: "die",
                english: ""
            },
            {
                german: "Gemüse",
                indonesian: "das",
                english: ""
            },
            {
                german: "Gurke",
                indonesian: "die",
                english: ""
            },
            {
                german: "Kartoffel",
                indonesian: "die",
                english: ""
            },
            {
                german: "Salat",
                indonesian: "der",
                english: ""
            },
            {
                german: "Tomate",
                indonesian: "die",
                english: ""
            },
            {
                german: "Olive",
                indonesian: "die",
                english: ""
            },
            {
                german: "Zwiebel",
                indonesian: "die",
                english: ""
            },
            {
                german: "Brot",
                indonesian: "das",
                english: ""
            },
            {
                german: "Brötchen",
                indonesian: "das",
                english: ""
            },
            {
                german: "Keks",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kuchen",
                indonesian: "der",
                english: ""
            },
            {
                german: "Fleisch",
                indonesian: "das",
                english: ""
            },
            {
                german: "Hähnchen",
                indonesian: "das",
                english: ""
            },
            {
                german: "Schincken",
                indonesian: "der",
                english: ""
            },
            {
                german: "Wurst",
                indonesian: "die",
                english: ""
            },
            {
                german: "Joghurt",
                indonesian: "der",
                english: "das"
            },
            {
                german: "Salz",
                indonesian: "das",
                english: ""
            },
            {
                german: "Butter",
                indonesian: "die",
                english: ""
            },
            {
                german: "Käse",
                indonesian: "der",
                english: ""
            },
            {
                german: "Milch",
                indonesian: "die",
                english: ""
            },
            {
                german: "Sahne",
                indonesian: "die",
                english: ""
            },
            {
                german: "Pfeffer",
                indonesian: "der",
                english: ""
            },
            {
                german: "Zucker",
                indonesian: "der",
                english: ""
            },
            {
                german: "Essig",
                indonesian: "der",
                english: ""
            },
            {
                german: "Öl",
                indonesian: "das",
                english: ""
            },
            {
                german: "Nudel",
                indonesian: "die",
                english: ""
            },
            {
                german: "Reis",
                indonesian: "der",
                english: ""
            },
            {
                german: "Ei",
                indonesian: "das",
                english: ""
            },
            {
                german: "Fisch",
                indonesian: "der",
                english: ""
            },
            {
                german: "Marmelade",
                indonesian: "die",
                english: ""
            },
            {
                german: "Müsli",
                indonesian: "das",
                english: ""
            },
            {
                german: "Einladung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Getränk",
                indonesian: "das",
                english: ""
            },
            {
                german: "Wasser",
                indonesian: "das",
                english: ""
            },
            {
                german: "Saft",
                indonesian: "der",
                english: ""
            },
            {
                german: "Zitrone",
                indonesian: "die",
                english: ""
            },
            {
                german: "Kaffee",
                indonesian: "der",
                english: ""
            },
            {
                german: "Tee",
                indonesian: "der",
                english: ""
            },
            {
                german: "Geschäft",
                indonesian: "das",
                english: ""
            },
            {
                german: "Bäckerei",
                indonesian: "die",
                english: ""
            },
            {
                german: "Packung",
                indonesian: "die",
                english: ""
            },
            {
                german: "Metzgerei",
                indonesian: "die",
                english: ""
            },
            {
                german: "Becher",
                indonesian: "der",
                english: ""
            },
            {
                german: "Dose",
                indonesian: "die",
                english: ""
            },
            {
                german: "Stück",
                indonesian: "das",
                english: ""
            },
            {
                german: "Tüte",
                indonesian: "die",
                english: ""
            },
            {
                german: "Preis",
                indonesian: "der",
                english: ""
            },
            {
                german: "Kassenzettel",
                indonesian: "der",
                english: ""
            },
            {
                german: "Essen",
                indonesian: "das",
                english: ""
            },
            {
                german: "Gericht",
                indonesian: "das",
                english: ""
            },
            {
                german: "Suppe",
                indonesian: "die",
                english: ""
            },
            {
                german: "Kantine",
                indonesian: "die",
                english: ""
            },
            {
                german: "Mensa",
                indonesian: "die",
                english: ""
            }
        ]
    },
    {
     name: "Guess The Plural",
         desc: "Guess The Plural is a fun game that tests your ability to understand the German language. In this game, you will be given words in German, and your challenge is to guess The Plural Word in German. Each word has a specific 'Plural Word' that you need to figure out. If you think the word doesn't have plural, you can fill it with (-). The more words you correctly guess, the higher your score will be!",
         cards: [
            {
                german: "Maus",
                indonesian: "Mäuse",
                english: ""
            },
            {
                german: "Schwester",
                indonesian: "Schwestern",
                english: ""
            },
            {
                german: "Homepage",
                indonesian: "Homepages",
                english: ""
            },
            {
                german: "Satz",
                indonesian: "Satze",
                english: ""
            },
            {
                german: "Hund",
                indonesian: "Hunde",
                english: ""
            },
            {
                german: "Bar",
                indonesian: "Bars",
                english: ""
            },
            {
                german: "Sport",
                indonesian: "-",
                english: ""
            },
            {
                german: "Geige",
                indonesian: "Geigen",
                english: ""
            },
            {
                german: "Ball",
                indonesian: "Bälle",
                english: ""
            },
            {
                german: "Motorrad",
                indonesian: "Motorräder",
                english: ""
            },
            {
                german: "Saxofon",
                indonesian: "Saxofone",
                english: ""
            },
            {
                german: "Trompete",
                indonesian: "Trompeten",
                english: ""
            },
            {
                german: "Idee",
                indonesian: "Ideen",
                english: ""
            },
            {
                german: "Praxis",
                indonesian: "Praxen",
                english: ""
            },
            {
                german: "Problem",
                indonesian: "Probleme",
                english: ""
            },
            {
                german: "Baby",
                indonesian: "Babys",
                english: ""
            },
            {
                german: "Kind",
                indonesian: "Kinder",
                english: ""
            },
            {
                german: "Junge",
                indonesian: "Jungen",
                english: ""
            },
            {
                german: "Mädchen",
                indonesian: "Mädchen",
                english: ""
            },
            {
                german: "Sohn",
                indonesian: "Söhne",
                english: ""
            },
            {
                german: "Tochter",
                indonesian: "Töchter",
                english: ""
            },
            {
                german: "Mutter",
                indonesian: "Mütter",
                english: ""
            },
            {
                german: "Vater",
                indonesian: "Väter",
                english: ""
            },
            {
                german: "Oma",
                indonesian: "Omas",
                english: ""
            },
            {
                german: "Bruder",
                indonesian: "Brüder",
                english: ""
            },
            {
                german: "Nachricht",
                indonesian: "Nachrichten",
                english: ""
            },
            {
                german: "Bibliothek",
                indonesian: "Bibliotheken",
                english: ""
            },
            {
                german: "Hausaufgabe",
                indonesian: "Hausaufgaben",
                english: ""
            },
            {
                german: "Zeitung",
                indonesian: "Zeitungen",
                english: ""
            },
            {
                german: "Nachbar",
                indonesian: "Nachbarn",
                english: ""
            },
            {
                german: "Uhr",
                indonesian: "Uhren",
                english: ""
            },
            {
                german: "Verspätung",
                indonesian: "Verspätungen",
                english: ""
            },
            {
                german: "Familie",
                indonesian: "Familien",
                english: ""
            },
            {
                german: "Verwandte",
                indonesian: "Verwandten",
                english: ""
            },
            {
                german: "Besprechung",
                indonesian: "Besprechungen",
                english: ""
            },
            {
                german: "Gast",
                indonesian: "Gäste",
                english: ""
            },
            {
                german: "Chor",
                indonesian: "Chöre",
                english: ""
            },
            {
                german: "Apfel",
                indonesian: "Äpfel",
                english: ""
            },
            {
                german: "Markt",
                indonesian: "Märkte",
                english: ""
            },
            {
                german: "Saft",
                indonesian: "Säfte",
                english: ""
            },
            {
                german: "Plan",
                indonesian: "Pläne",
                english: ""
            },
            {
                german: "Sthul",
                indonesian: "Sthüle",
                english: ""
            },
            {
                german: "Baum",
                indonesian: "Bäume",
                english: ""
            },
            {
                german: "Supermarkt",
                indonesian: "Supermäekte",
                english: ""
            },
            {
                german: "Test",
                indonesian: "Teste",
                english: ""
            },
            {
                german: "Bus",
                indonesian: "Busse",
                english: ""
            },
            {
                german: "Schuh",
                indonesian: "Schuhe",
                english: ""
            },
            {
                german: "Tisch",
                indonesian: "Tische",
                english: ""
            },
            {
                german: "Fuß",
                indonesian: "Fuße",
                english: ""
            },
            {
                german: "Monat",
                indonesian: "Monate",
                english: ""
            },
            {
                german: "Film",
                indonesian: "Filme",
                english: ""
            },
            {
                german: "Regisseur",
                indonesian: "Regisseur",
                english: ""
            },
            {
                german: "Mensch",
                indonesian: "Menschen",
                english: ""
            },
            {
                german: "Start",
                indonesian: "Starts",
                english: ""
            },
            {
                german: "Star",
                indonesian: "Star",
                english: ""
            },
            {
                german: "Euro",
                indonesian: "Euros",
                english: ""
            },
            {
                german: "Park",
                indonesian: "Parks",
                english: ""
            },
            {
                german: "Besucher",
                indonesian: "Besucher",
                english: ""
            },
            {
                german: "Kalender",
                indonesian: "Kalender",
                english: ""
            },
            {
                german: "Kilometer",
                indonesian: "Kilometer",
                english: ""
            },
            {
                german: "Meter",
                indonesian: "Meter",
                english: ""
            },
            {
                german: "Schauspieler",
                indonesian: "Schauspieler",
                english: ""
            },
            {
                german: "Messe",
                indonesian: "Messen",
                english: ""
            },
            {
                german: "Jacke",
                indonesian: "Jacken",
                english: ""
            },
            {
                german: "Fahrkarte",
                indonesian: "Fahrkarten",
                english: ""
            },
            {
                german: "Tasse",
                indonesian: "Tassen",
                english: ""
            },
            {
                german: "Tür",
                indonesian: "Türe",
                english: ""
            },
            {
                german: "Mappe",
                indonesian: "Mappen",
                english: ""
            },
            {
                german: "U-Bahn",
                indonesian: "U-Bahnen",
                english: ""
            },
            {
                german: "Geschichte",
                indonesian: "Geschichten",
                english: ""
            },
            {
                german: "Tasche",
                indonesian: "Taschen",
                english: ""
            },
            {
                german: "Rucksack",
                indonesian: "Rucksäcke",
                english: ""
            },
            {
                german: "Mitte",
                indonesian: "Mitten",
                english: ""
            },
            {
                german: "Frage",
                indonesian: "Fragen",
                english: ""
            },
            {
                german: "Besucherin",
                indonesian: "Besucherinnen",
                english: ""
            },
            {
                german: "Jahreszeit",
                indonesian: "Jahreszeiten",
                english: ""
            },
            {
                german: "Gruppe",
                indonesian: "Gruppen",
                english: ""
            },
            {
                german: "Welt",
                indonesian: "Welten",
                english: ""
            },
            {
                german: "Blume",
                indonesian: "Blumen",
                english: ""
            },
            {
                german: "Morgen",
                indonesian: "Morgens",
                english: ""
            },
            {
                german: "Station",
                indonesian: "Stationen",
                english: ""
            },
            {
                german: "Beschreibung",
                indonesian: "Beschreibungen",
                english: ""
            },
            {
                german: "Übung",
                indonesian: "Übungen",
                english: ""
            },
            {
                german: "Ausstellung",
                indonesian: "Ausstellungen",
                english: ""
            },
            {
                german: "Lösung",
                indonesian: "Lösungen",
                english: ""
            },
            {
                german: "Festival",
                indonesian: "Festivals",
                english: ""
            },
            {
                german: "Ticket",
                indonesian: "Tickets",
                english: ""
            },
            {
                german: "Publikum",
                indonesian: "Publikums",
                english: ""
            },
            {
                german: "Event",
                indonesian: "Events",
                english: ""
            },
            {
                german: "Orchester",
                indonesian: "Orchester",
                english: ""
            },
            {
                german: "Kellnerin",
                indonesian: "Kellnerinnen",
                english: ""
            },
            {
                german: "Glück",
                indonesian: "-",
                english: ""
            },
            {
                german: "Fahrrad",
                indonesian: "Fahrräder",
                english: ""
            },
            {
                german: "Bild",
                indonesian: "Bilder",
                english: ""
            },
            {
                german: "Konzert",
                indonesian: "Konzerte",
                english: ""
            },
            {
                german: "Plakat",
                indonesian: "Plakate",
                english: ""
            },
            {
                german: "Brot",
                indonesian: "Brote",
                english: ""
            },
            {
                german: "Ziel",
                indonesian: "Ziele",
                english: ""
            },
            {
                german: "Bier",
                indonesian: "Biere",
                english: ""
            },
            {
                german: "Flugzeug",
                indonesian: "Flugzeuge",
                english: ""
            },
            {
                german: "Bahnhof",
                indonesian: "Bahnhöfe",
                english: ""
            },
            {
                german: "Fluss",
                indonesian: "Flüsse",
                english: ""
            },
            {
                german: "Zug",
                indonesian: "Züge",
                english: ""
            },
            {
                german: "Turm",
                indonesian: "Türme",
                english: ""
            },
            {
                german: "Weg",
                indonesian: "Wege",
                english: ""
            },
            {
                german: "Kurs",
                indonesian: "Kurse",
                english: ""
            },
            {
                german: "Stift",
                indonesian: "Stifte",
                english: ""
            },
            {
                german: "Ort",
                indonesian: "Orte",
                english: ""
            },
            {
                german: "Tag",
                indonesian: "Tage",
                english: ""
            },
            {
                german: "Beruf",
                indonesian: "Berufe",
                english: ""
            },
            {
                german: "Freund",
                indonesian: "Freunde",
                english: ""
            },
            {
                german: "Hafen",
                indonesian: "Häfen",
                english: ""
            },
            {
                german: "See",
                indonesian: "Seen",
                english: ""
            },
            {
                german: "Kollege",
                indonesian: "Kollegen",
                english: ""
            },
            {
                german: "Patient",
                indonesian: "Patienten",
                english: ""
            },
            {
                german: "Name",
                indonesian: "Namen",
                english: ""
            },
            {
                german: "Krankenpflegerin",
                indonesian: "Krankenpflegerinnen",
                english: ""
            },
            {
                german: "Computer",
                indonesian: "Computer",
                english: ""
            },
            {
                german: "Schlüssel",
                indonesian: "Schlüssel",
                english: ""
            },
            {
                german: "Kunst",
                indonesian: "Kunste",
                english: ""
            },
            {
                german: "Halle",
                indonesian: "Hallen",
                english: ""
            },
            {
                german: "Fahrt",
                indonesian: "Fahrten",
                english: ""
            },
            {
                german: "Brücke",
                indonesian: "Brücken",
                english: ""
            },
            {
                german: "Stadt",
                indonesian: "Städte",
                english: ""
            },
            {
                german: "Spritze",
                indonesian: "Spritzen",
                english: ""
            },
            {
                german: "Zahl",
                indonesian: "Zahlen",
                english: ""
            },
            {
                german: "Stunde",
                indonesian: "Stunden",
                english: ""
            },
            {
                german: "Straße",
                indonesian: "Straßen",
                english: ""
            },
            {
                german: "Sprache",
                indonesian: "Sprachen",
                english: ""
            },
            {
                german: "Woche",
                indonesian: "Wochen",
                english: ""
            },
            {
                german: "Tablette",
                indonesian: "Tabletten",
                english: ""
            },
            {
                german: "Rechnung",
                indonesian: "Rechnungen",
                english: ""
            },
            {
                german: "Wochenende",
                indonesian: "Wochenenden",
                english: ""
            },
            {
                german: "Zimmer",
                indonesian: "Zimmer",
                english: ""
            },
            {
                german: "Datum",
                indonesian: "Datum",
                english: ""
            },
            {
                german: "Hobby",
                indonesian: "Hobbys",
                english: ""
            },
            {
                german: "Auto",
                indonesian: "Autos",
                english: ""
            },
            {
                german: "Schiff",
                indonesian: "Schiffe",
                english: ""
            },
            {
                german: "Medikament",
                indonesian: "Medikamente",
                english: ""
            },
            {
                german: "Meer",
                indonesian: "Meere",
                english: ""
            },
            {
                german: "Seminar",
                indonesian: "Seminare",
                english: ""
            },
            {
                german: "Jahr",
                indonesian: "Jahre",
                english: ""
            },
            {
                german: "Haus",
                indonesian: "Häuser",
                english: ""
            },
            {
                german: "Krankenhaus",
                indonesian: "Krankenhäuser",
                english: ""
            },
            {
                german: "Land",
                indonesian: "Länder",
                english: ""
            },
            {
                german: "Buch",
                indonesian: "Bücher",
                english: ""
            },
            {
                german: "Wort",
                indonesian: "Wörter",
                english: ""
            },
            {
                german: "Geld",
                indonesian: "Gelder",
                english: ""
            },
            {
                german: "Konzerthaus",
                indonesian: "Konzerthäuser",
                english: ""
            },
            {
                german: "Schwimmbad",
                indonesian: "Schwimmbäder",
                english: ""
            },
            {
                german: "Glas",
                indonesian: "Gläser",
                english: ""
            },
            {
                german: "Vorname",
                indonesian: "Vornamen",
                english: ""
            },
            {
                german: "Nachname",
                indonesian: "Nachnamen",
                english: ""
            },
            {
                german: "Partnerin",
                indonesian: "Partnerinnen",
                english: ""
            },
            {
                german: "Autobahn",
                indonesian: "Autobahnen",
                english: ""
            },
            {
                german: "Flasche",
                indonesian: "Flaschen",
                english: ""
            },
            {
                german: "Koffer",
                indonesian: "Koffer",
                english: ""
            },
            {
                german: "Kino",
                indonesian: "Kinos",
                english: ""
            },
            {
                german: "Theater",
                indonesian: "Theater",
                english: ""
            },
            {
                german: "Museum",
                indonesian: "Museen",
                english: ""
            },
            {
                german: "Termin",
                indonesian: "Termine",
                english: ""
            },
            {
                german: "Geburtsort",
                indonesian: "Geburtsorte",
                english: ""
            },
            {
                german: "Wörterbuch",
                indonesian: "Wörterbücher",
                english: ""
            },
            {
                german: "Obst",
                indonesian: "-",
                english: ""
            },
            {
                german: "Apfel",
                indonesian: "Äpfel",
                english: ""
            },
            {
                german: "Banane",
                indonesian: "Bananen",
                english: ""
            },
            {
                german: "Birne",
                indonesian: "Birnen",
                english: ""
            },
            {
                german: "Gemüse",
                indonesian: "-",
                english: ""
            },
            {
                german: "Gurke",
                indonesian: "Gurken",
                english: ""
            },
            {
                german: "Kartoffel",
                indonesian: "Kartoffeln",
                english: ""
            },
            {
                german: "Salat",
                indonesian: "Salate",
                english: ""
            },
            {
                german: "Tomate",
                indonesian: "Tomaten",
                english: ""
            },
            {
                german: "Olive",
                indonesian: "Oliven",
                english: ""
            },
            {
                german: "Zwiebel",
                indonesian: "Zwiebeln",
                english: ""
            },
            {
                german: "Brot",
                indonesian: "Brote",
                english: ""
            },
            {
                german: "Brötchen",
                indonesian: "Brötchen",
                english: ""
            },
            {
                german: "Keks",
                indonesian: "Kekse",
                english: ""
            },
            {
                german: "Kuchen",
                indonesian: "Kuchen",
                english: ""
            },
            {
                german: "Fleisch",
                indonesian: "-",
                english: ""
            },
            {
                german: "Hähnchen",
                indonesian: "Hähnchen",
                english: ""
            },
            {
                german: "Schincken",
                indonesian: "Schinken",
                english: ""
            },
            {
                german: "Wurst",
                indonesian: "Würste",
                english: ""
            },
            {
                german: "Joghurt",
                indonesian: "Joghurts",
                english: "das"
            },
            {
                german: "Salz",
                indonesian: "Salze",
                english: ""
            },
            {
                german: "Butter",
                indonesian: "-",
                english: ""
            },
            {
                german: "Käse",
                indonesian: "-",
                english: ""
            },
            {
                german: "Milch",
                indonesian: "-",
                english: ""
            },
            {
                german: "Sahne",
                indonesian: "-",
                english: ""
            },
            {
                german: "Pfeffer",
                indonesian: "-",
                english: ""
            },
            {
                german: "Zucker",
                indonesian: "-",
                english: ""
            },
            {
                german: "Essig",
                indonesian: "Essige",
                english: ""
            },
            {
                german: "Öl",
                indonesian: "Öle",
                english: ""
            },
            {
                german: "Nudel",
                indonesian: "Nudeln",
                english: ""
            },
            {
                german: "Reis",
                indonesian: "-",
                english: ""
            },
            {
                german: "Ei",
                indonesian: "Eier",
                english: ""
            },
            {
                german: "Fisch",
                indonesian: "Fische",
                english: ""
            },
            {
                german: "Marmelade",
                indonesian: "Marmeladen",
                english: ""
            },
            {
                german: "Müsli",
                indonesian: "Müslis",
                english: ""
            },
            {
                german: "Einladung",
                indonesian: "Einladungen",
                english: ""
            },
            {
                german: "Getränk",
                indonesian: "Getränke",
                english: ""
            },
            {
                german: "Wasser",
                indonesian: "-",
                english: ""
            },
            {
                german: "Saft",
                indonesian: "Säfte",
                english: ""
            },
            {
                german: "Zitrone",
                indonesian: "Zitronen",
                english: ""
            },
            {
                german: "Kaffee",
                indonesian: "Kaffees",
                english: ""
            },
            {
                german: "Tee",
                indonesian: "Tees",
                english: ""
            },
            {
                german: "Geschäft",
                indonesian: "Geschäfte",
                english: ""
            },
            {
                german: "Bäckerei",
                indonesian: "Bäckereien",
                english: ""
            },
            {
                german: "Packung",
                indonesian: "Packungen",
                english: ""
            },
            {
                german: "Metzgerei",
                indonesian: "Metzgereien",
                english: ""
            },
            {
                german: "Becher",
                indonesian: "Becher",
                english: ""
            },
            {
                german: "Dose",
                indonesian: "Dosen",
                english: ""
            },
            {
                german: "Stück",
                indonesian: "Stücke",
                english: ""
            },
            {
                german: "Tüte",
                indonesian: "Tüten",
                english: ""
            },
            {
                german: "Preis",
                indonesian: "Preise",
                english: ""
            },
            {
                german: "Kassenzettel",
                indonesian: "Kassenzettel",
                english: ""
            },
            {
                german: "Frühstück",
                indonesian: "Frühstücke",
                english: ""
            },
            {
                german: "Gericht",
                indonesian: "Gerichte",
                english: ""
            },
            {
                german: "Suppe",
                indonesian: "Suppen",
                english: ""
            },
            {
                german: "Kantine",
                indonesian: "Kantinen",
                english: ""
            },
            {
                german: "Mensa",
                indonesian: "Mensas",
                english: ""
            }
        ]
    }
]