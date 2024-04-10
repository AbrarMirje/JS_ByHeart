// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((value) => {
//     console.log(value);
// })

// function printMe(value) {
//     console.log(value);
// }
// coding.forEach(printMe);


const myCoding = [
    {
        langaugeName: "JavaScript",
        languageFileName: "js"
    },
    {
        langaugeName: "Java",
        languageFileName: "java"
    },
    {
        langaugeName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.langaugeName);
})