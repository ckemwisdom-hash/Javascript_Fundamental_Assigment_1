// Create an empty array
let lecturersDb = [];

// Insert three lecturer objects using push()
lecturersDb.push(
    {
        id: 1,
        fullName: "Amadu Kamara",
        department: "Software Engineering",
        phoneNumber: "076000001"
    },
    {
        id: 2,
        fullName: "Salu Johnson",
        department: "Networking",
        phoneNumber: "076000002"
    },
    {
        id: 3,
        fullName: "Foday Conteh",
        department: "Database",
        phoneNumber: "076000003"
    }
);

// Print the entire array
console.log(lecturersDb);

// Access the second lecturer
console.log(`Lecturer Name: ${lecturersDb[1].fullName}, Phone Number: ${lecturersDb[1].phoneNumber}`);