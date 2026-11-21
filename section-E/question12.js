let studentProfile = { name: "Foday", age: 34 };

let records = [
    "DICT Department",
    2026,
    true,
    null,
    { name: "Samuel", age: 67 },
    studentProfile,
    ["Cassava", "Plantain", "Mango"]
];

// Log the name property of the object at index 4
console.log(records[4].name);

// Log the age property of studentProfile inside records
console.log(records[5].age);

// Log Plantain from the nested array
console.log(records[6][1]);