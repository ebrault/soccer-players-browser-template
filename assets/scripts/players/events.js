'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddPlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addPlayer(data)
    .then(ui.addPlayerSuccess)
    .catch(ui.failure)
}

const onIndexPlayers = function (event) {
  event.preventDefault()
  api.indexPlayers()
    .then(ui.indexPlayersSuccess)
    .catch(ui.failure)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePlayer(data)
    .then(ui.updatePlayerSuccess)
    .catch(ui.failure)
}

const onDeletePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deletePlayer(data)
    .then(ui.deletePlayerSuccess)
    .catch(ui.failure)
}

module.exports = {
  onAddPlayer,
  onIndexPlayers,
  onUpdatePlayer,
  onDeletePlayer
}
