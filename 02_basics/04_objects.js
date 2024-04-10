// Singleton / Constructor Object
// const appUser = new Object() // Singleton Object
const appUserTwo = {} // Non Singleton Object
appUserTwo.id = "123abc";
appUserTwo.name = "Abrar";
appUserTwo.isLoggedIn = false;

// console.log(appUser);
// console.log(appUserTwo);


const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abrar",
            lastName: "Mirje"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);


const obje1 = { 1: "a", 2: "b" }
const obje2 = { 3: "a", 4: "b" }
const obje3 = { 5: "a", 6: "b" }

const obj4 = Object.assign({}, obje1, obje2, obje3)
// console.log(obj4);


const obj5 = { ...obje1, ...obje2, ...obje3 }
// console.log(obj5);



const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "mno@gmail.com"
    },
]

users[1].email;
// console.log(appUserTwo);

// console.log(Object.keys(appUserTwo));
// console.log(Object.values(appUserTwo));

// console.log(appUserTwo.hasOwnProperty('isLoggedIn'));


// Object Destructuring
const course = {
    courseName: "JS in Hindi",
    price: "Free",
    courseInstructor: "Hitesh Choudhary Sir"
}

const { courseInstructor, courseName } = course;
console.log(courseInstructor);
console.log(courseName);