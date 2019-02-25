'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign up successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign in successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-dropdown').addClass('hidden')
  $('#sign-in-dropdown').addClass('hidden')
  $('#change-password-dropdown').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const changePasswordSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Password changed successfully!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign out successful!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-dropdown').removeClass('hidden')
  $('#sign-in-dropdown').removeClass('hidden')
  $('#change-password-dropdown').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}

const failure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong! Please try again.')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
