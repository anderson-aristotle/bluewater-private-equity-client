'use strict'
const authEvents = require('./authentication/events.js')
const accountEvents = require('./accounts/events.js')

$(() => {
  // Hide and Show
  $('#personal-equity').hide()

  // Authentication
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)

  // Investment Account
  $('#create-account-form').on('submit', accountEvents.onCreateAccount)
  $('#read-account-form').on('submit', accountEvents.onGetAccounts)
  $('#update-account-form').on('submit', accountEvents.onUpdateAccount)
  $('.content').on('submit', accountEvents.onDeleteAccount)
})
