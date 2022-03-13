import { TupleType } from "typescript";

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Max",
//     age: 30,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "Max",
    age: 30,
    hobbies: ['s ports', 'cooking'],
    role: Role.ADMIN
};


let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log("is read only");
}