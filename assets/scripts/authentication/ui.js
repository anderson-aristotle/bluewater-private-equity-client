'use strict'
const store = require('../store')

const onSignUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Signed up successfully')
}

const onSignUpFailure = function () {
  $('#message').text('Error on sign up')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
  setTimeout(() => {
    $('form').trigger('reset')
    $('#message').text('')
    $('#authenication').hide()
  }, 2000)
  $('#personal-equity').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  setTimeout(() => {
    $('form').trigger('reset')
    $('#message').text('')
  }, 2000)
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  setTimeout(() => {
    $('#message').text('')
    $('#personal-equity').hide()
  }, 1000)
  $('#authenication').show()
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
