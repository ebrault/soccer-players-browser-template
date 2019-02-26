'use strict'

const config = require('../config.js')
const store = require('../store.js')

const addPlayer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/players',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'POST',
    data
  })
}

const indexPlayers = function () {
  return $.ajax({
    url: config.apiUrl + '/players',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const updatePlayer = function (data) {
  const playerId = data.player.id
  return $.ajax({
    url: config.apiUrl + `/players/${playerId}`,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data
  })
}

const deletePlayer = function (data) {
  const playerId = data.player.id
  return $.ajax({
    url: config.apiUrl + `/players/${playerId}`,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'DELETE',
    data
  })
}

module.exports = {
  addPlayer,
  indexPlayers,
  updatePlayer,
  deletePlayer
}
