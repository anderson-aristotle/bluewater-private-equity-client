'use strict'
const store = require('../store')

const onSignUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Signed up successfully')
  setTimeout(() => {
    $('#message').text('Signed up successfully')
  }, 2000)
}

const onSignUpFailure = function () {
  $('#message').text('Error on sign up')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').text('Error on sign up').text('')
  }, 1000)
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
  setTimeout(() => {
    $('#message').text('Error on sign in').text('')
  }, 1000)
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
  setTimeout(() => {
    $('form').trigger('reset')
    $('#message').text('Error on change password').text('')
  }, 1000)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  setTimeout(() => {
    $('#message').text('')
    $('#personal-equity').hide()
  }, 2000)
  $('.account').hide()
  $('#authenication').show()
  store.user = null
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
