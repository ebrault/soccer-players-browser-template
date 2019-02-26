'use strict'

const addPlayerSuccess = function (data) {
  $('#display-players').html('')
  $('#collection-empty-message').addClass('hidden')
  $('#player-display-message').html('Add successful')
  $('#player-display-message').css('color', 'green')
  const player = data.player
  const playerHtml = (`
      <p>ID: ${player.id}</p>
      <p>Name: ${player.name}<p>
      <p>Number: ${player.number}</p>
      <p>Position: ${player.position}</p>
      <p>Team: ${player.team}</p>
      <br />
    `)
  $('#display-players').html(playerHtml)
  $('#display-players').css('color', 'green')
  $('#add-player-form').trigger('reset')
  $('#update-player-form').trigger('reset')
  $('#delete-player-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const indexPlayersSuccess = function (data) {
  if (data.players.length === 0) {
    $('#player-display-message').html('')
    $('#collection-empty-message').removeClass('hidden')
  } else {
    $('#player-display-message').html('')
    $('#display-players').html('')
    data.players.forEach(function (player) {
      const playerHtml = (`
        <p>ID: ${player.id}</p>
        <p>Name: ${player.name}</p>
        <p>Number: ${player.number}</p>
        <p>Position: ${player.position}</p>
        <p>Team: ${player.team}</p>
        <br />
        `)
      $('#display-players').append(playerHtml)
      $('#display-players').css('color', 'green')
    })
  }
}

const updatePlayerSuccess = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#player-display-message').html('')
  $('#player-display-message').html('Update successful!')
  $('#player-display-message').css('color', 'green')
  $('#display-players').html('')
  $('#add-player-form').trigger('reset')
  $('#update-player-form').trigger('reset')
  $('#delete-player-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const deletePlayerSuccess = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#player-display-message').html('')
  $('#player-display-message').html('Deletion successful!')
  $('#player-display-message').css('color', 'green')
  $('#display-players').html('')
  $('#add-player-form').trigger('reset')
  $('#update-player-form').trigger('reset')
  $('#delete-player-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const failure = function (data) {
  $('#collection-empty-message').addClass('hidden')
  $('#player-display-message').html('')
  $('#player-display-message').html('Something went wrong! Please try again!')
  $('#player-display-message').css('color', 'red')
  $('#display-players').html('')
  $('#add-player-form').trigger('reset')
  $('#update-player-form').trigger('reset')
  $('#delete-player-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  addPlayerSuccess,
  indexPlayersSuccess,
  updatePlayerSuccess,
  deletePlayerSuccess,
  failure
}
