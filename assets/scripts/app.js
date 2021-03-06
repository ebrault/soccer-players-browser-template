'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events.js')
const playerEvents = require('./players/events.js')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#create-player-form').on('submit', playerEvents.onAddPlayer)
  $('#index-players-button').on('click', playerEvents.onIndexPlayers)
  $('#update-player-form').on('submit', playerEvents.onUpdatePlayer)
  $('#delete-player-form').on('submit', playerEvents.onDeletePlayer)
})
