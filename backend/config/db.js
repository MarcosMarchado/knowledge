const config = require('../knexfile.js')
const knex = require('knex')(config)

//Executa a migração assim que carrega o bkend
knex.migrate.latest([config])
module.exports = knex
