/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// module.exports =  (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config

//   // custom tasks for sending and reporting code coverage
//   on('task', require('@cypress/code-coverage/task'))
//   // this line instruments spec files and loaded unit test code
//   on(
//     'file:preprocessor',
//     require('@cypress/code-coverage/use-browserify-istanbul')
//   )
//   return config
// }

// module.exports = (on, config) => {
//   require('@cypress/code-coverage/defineStep')(on, config)
//   on(
//     'file:preprocessor',
//     require('@cypress/code-coverage/use-browserify-istanbul')
//   )
//   return config
// }
const cucumber = require('cypress-cucumber-preprocessor').default
 
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}