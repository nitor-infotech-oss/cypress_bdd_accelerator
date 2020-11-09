// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("readCsv", (filepath) => {
    const fixturePath= './cypress/fixtures/'
    filepath = fixturePath + filepath
    let filedata = [];
    cy.readFile(
        filepath,
        "utf8"
      ).then((data) => {
        let readValues = data.split("\n");
        const header = readValues[0].split(",");
        readValues.forEach((val1, index, array) => {
          if (index > 0 && index < array.length - 1) {
            let jsonString = "{";
            let colvals = val1.split(",");
            colvals.forEach((val2, ind, arr) => {
              if (ind < arr.length - 1) {
                header[ind] = header[ind].trim();
                val2 = val2.trim();
                jsonString += `"${header[ind]}":"${val2}", `;
              } else {
                header[ind] = header[ind].trim();
                val2 = val2.trim();
                jsonString += `"${header[ind]}":"${val2}"`;
              }
            });
            jsonString += "}";
            let dataRow = JSON.parse(jsonString);
            filedata.push(dataRow);
          }
        });
      });
      // wrap function enables us to wrap the result of this function to the previous result from cypress function.
      cy.wrap(filedata);
})