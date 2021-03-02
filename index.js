const createMd = require("./scripts/createMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const { generate } = require("rxjs");

// Create questions array

const questions = [
    {
     type: "input",
     message: "Title: ",
     name: "title"
    },
    {
        type: "input",
        message: "Description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Deployed Link: ",
        name: "depLink"
    },
    {
        type: "input",
        message: "User Story: ",
        name: "userStory"
    },    
    {
        type: "input",
        message: "Installation Instructions: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Test Instructions: ",
        name: "test"
    },
    {
        type: "input",
        message: "Author Name: ",
        name: "author"
    },    
    {
        type: "input",
        message: "Author Github: ",
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
    const contents = generate.createMd(data);
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