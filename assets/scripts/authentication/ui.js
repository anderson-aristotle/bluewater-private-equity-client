'use strict'
const store = require('../store')

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
}

const onSignUpFailure = function () {
  $('#message').text('Error on sign up')
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
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
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

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
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
