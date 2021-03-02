
// Link to the appropriate license
const addLink = (license => {
    switch (license) {
        case "Apache 2.0 License":
            return "(https://opensource.org/licenses/Apache-2.0)"
            
        case "Creative Commons - CC0":
            return "(http://creativecommons.org/publicdomain/zero/1.0/)"
        
        case "CC BY-SA Attribution-ShareAlike 4.0 International":
            return "(https://creativecommons.org/licenses/by-sa/4.0/)"

        case "CC BY-NC Attribution-NonCommercial 4.0 International":
            return "(https://creativecommons.org/licenses/by-nc/4.0/)"

        case "GNU GPL v3":
            return "(https://www.gnu.org/licenses/gpl-3.0)"

        case "The MIT License":
            return "(https://opensource.org/licenses/MIT)"

        case "Mozilla Public License 2.0":
            return "(https://opensource.org/licenses/MPL-2.0)"

        case "Public Domain Dedication and License (PDDL)":
            return "(https://opendatacommons.org/licenses/pddl/)"

        case "The Artistic License 2.0":
            return "(https://opensource.org/licenses/Artistic-2.0)"

        default:
            return ""
    }
});

// add the license paragraph to the markdown
const createLicensePara = (license => {
    return addLink(license)
});


// Generate the Markdown file
const generateMd = (data => {
    let spacer = "\n----------------\n";
    let titleContent = "";
    let TOC = "## Table of Contents\n";
    let readmeContent = "";

    let position = 0;
    titleContent += `# ${data.title}\n`;
    titleContent += `${spacer}`

    position++;
    TOC += `${position}. [Description](#description)\n`;
    readmeContent += `${spacer}`
    readmeContent += `## Description\n\n${data.description}\n`
    readmeContent += `${spacer}`

    if (data.depLink) {
        position++;
        TOC += `${position}. [Deployed Link](#deployed)\n`;
        readmeContent += `## Deployed Application\n${data.depLink}\n`;
        readmeContent += `${spacer}`
    };

    if (data.depends) {
        position++;
        TOC += `${position}. [Dependencies](#depends)\n`;
        readmeContent += `## Dependencies\n${data.depends}\n`;
    };

    if (data.userStory) {
        position++;
        TOC += `${position}. [User Stories](#deployed)\n`;
        readmeContent += `## User Story\n${data.userStory}\n`;
    };

    if (data.install) {
        position++;
        TOC += `${position}. [Installation](#install)\n`;
        readmeContent += `## Installation${data.install}\n`;
    };

    if (data.usage) {
        position++;
        TOC += `${position}. [How To Use](#usage)\n`;
        readmeContent += `## Deployed Application${data.usage}\n`;
    };

    if (data.test) {
        position++;
        TOC += `${position}. [How to Test](#test)\n`;
        readmeContent += `## How to Test${data.test}\n`;
    };

        position++;
        TOC += `${position}. [Authors](#author)\n`;
        readmeContent += `## Author(s)${data.author}\n`;

    if (data.github) {
        readmeContent += `View [${ data.github }](https://github.com/${ data.github }) on Github.\n\n`;
    };

    if (data.contribute) {
        position++;
        TOC += `${position}. [Contributions(#contribute)\n`;
        readmeContent += `## Contributions${spacer}${data.contribute}`;
    };

    if (data.license) {
        position++;
        TOC += `${position}. [License](#license)\n`;
        readmeContent += `## License${data.license}${spacer}`;
    };

    return titleContent + TOC + readmeContent;
});

module.exports = { generateMd, addLink, createLicensePara };