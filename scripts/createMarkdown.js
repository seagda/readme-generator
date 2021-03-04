
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
const linkLicense= (license => {
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

    position++;
    TOC += `${position}. [Description](#description)\n`;
    readmeContent += `${spacer}`
    readmeContent += `## Description\n${data.description}`
    readmeContent += `${spacer}`

    if (data.depLink) {
        position++;
        TOC += `${position}. [Deployed Link](#deployed)\n`;
        readmeContent += `## Deployed Application\n${data.depLink}`;
        readmeContent += `${spacer}`
    };

    if (data.depends) {
        position++;
        TOC += `${position}. [Dependencies](#depends)\n`;
        readmeContent += `## Dependencies\n${data.depends}\n`;
        readmeContent += `${spacer}`
    };

    if (data.userStory) {
        position++;
        TOC += `${position}. [User Story](#userstory)\n`;
        readmeContent += `## User Story\n${data.userStory}`;
        readmeContent += `${spacer}`
    };

    if (data.install) {
        position++;
        TOC += `${position}. [Installation](#install)\n`;
        readmeContent += `## Installation\n${data.install}`;
        readmeContent += `${spacer}`
    };

    if (data.usage) {
        position++;
        TOC += `${position}. [How To Use](#usage)\n`;
        readmeContent += `## How to Use\n${data.usage}`;
        readmeContent += `${spacer}`
    };

    if (data.test) {
        position++;
        TOC += `${position}. [How to Test](#test)\n`;
        readmeContent += `## How to Test\n${data.test}`;
        readmeContent += `${spacer}`
    };

        position++;
        TOC += `${position}. [Authors](#author)\n`;
        readmeContent += `## Author(s)\n${data.author}`;

    if (data.github) {
        readmeContent += `View [${ data.github }](https://github.com/${ data.github }) on Github.\n\n`;
        readmeContent += `${spacer}`
    };

    if (data.contribute) {
        position++;
        TOC += `${position}. [Contributions(#contribute)\n`;
        readmeContent += `## Contributions\n${data.contribute}`;
        readmeContent += `${spacer}`
    };

    if (data.license) {
        position++;
        TOC += `${position}. [License](#license)\n`;
        readmeContent += `## License\n[${ data.license }]${ linkLicense(data.license) }`;
    };

    return titleContent + TOC + readmeContent;
});

module.exports = { generateMd, addLink, createLicensePara };