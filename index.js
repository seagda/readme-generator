const generate = require("./scripts/createMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Create questions array
// Make a pretty header
console.log("\n")
console.log("-".repeat(71));
console.log("|"+" ".repeat(69)+"|");
console.log("|"+" ".repeat(19)+"Welcome to the Readme Generator"+" ".repeat(19)+"|");
console.log("|"+" ".repeat(69)+"|");
console.log("-".repeat(71)+"\n\n");

const questions = [
    {
     type: "input",
     message: "Title: ",
     name: "title",
     validate: input => {
        return input === '' ? "Please enter a project title." : true;}
    },
    {
        type: "input",
        message: "Description: ",
        name: "description",
        validate: input => {
            return input === '' ? "Please enter a description." : true;}
    },
    {
        type: "input",
        message: "Deployed Link (include 'http[s]://'): ",
        name: "depLink"
    },
    {
        type: "input",
        message: "Dependencies: ",
        name: "depends"
    },
    {
        type: "input",
        message: "User Story: ",
        name: "userStory"
    },    
    {
        type: "input",
        message: "How to Install: ",
        name: "install"
    },
    {
        type: "input",
        message: "How to Use: ",
        name: "usage"
    },
    {
        type: "input",
        message: "How to Test: ",
        name: "test"
    },
    {
        type: "input",
        message: "Author Name: ",
        name: "author",
        validate: input => {
            return input === '' ? "Please enter an author name." : true;}
    },    
    {
        type: "input",
        message: "Author Github Username: ",
        name: "github"
    },
    {
        type: "input",
        message: "Contribution Guidelines: ",
        name: "contribute"
    },        
    {
        type: "list",
        message: "Choose a License: ",
        name: "license",
        choices: [ 
            "Apache 2.0 License",
            "Creative Commons - CC0",
            "CC BY-SA Attribution-ShareAlike 4.0 International", 
            "CC BY-NC Attribution-NonCommercial 4.0 International",
            "GNU GPL v3", 
            "The MIT License", 
            "Mozilla Public License 2.0", 
            "Public Domain Dedication and License (PDDL)", 
            "The Artistic License 2.0"]
    }
];

// write to the readme file

function writeToFile(fileName, data) {
    const contents = generate.generateMd(data);
    fs.appendFile(fileName, contents, (err) => {
        err ? console.log(err) : console.log("Your readme has been generated, mate!")
    })

};

// initialize the app 
function init(){
    inquirer.prompt(questions)
            .then(response => {
                if (!response) console.log("Error creating markdown.");
                else writeToFile("./output/README.md", response);
            })
};
init();