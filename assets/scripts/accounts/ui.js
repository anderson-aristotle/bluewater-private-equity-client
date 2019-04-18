'use strict'

const store = require('../store.js')
const showAccountTemplate = require('../templates/accounts.handlebars')

const showOwnership = () => {
  $(`.my-account[data-owner=${store.user._id}]`).show()
}

const onCreateAccountSuccess = (responseData) => {
  $('#display').empty()
  $('#user-message').text('You have successfully added an account!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  const accounts = responseData.account
  const userHtml = `<ul>
      Name: ${accounts.name}
      Amount: ${accounts.amount}
      </ul>`
  $('#display').append(userHtml)
  $('form').trigger('reset')
}

const onCreateAccountFailure = () => {
  $('#user-message').text('Failed to create an account! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onGetAccountsSuccess = (responseData) => {
  const accounts = responseData.accounts
  const showAccountsHTML = showAccountTemplate({ accounts: responseData.accounts })
  $('.content').html(showAccountsHTML)
  $('#display').empty()
  for (let i = 0; i < accounts.length; i++) {
    $('form').trigger('reset')
    showOwnership()
  }
}

const onGetAccountsFailure = () => {
  $('#user-message').text('Failed to get Bucket list Items! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateAccountSuccess = (responseData) => {
  $('#user-message').html('Account Updated!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onUpdateAccountFailure = () => {
  $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const onDeleteAccountSuccess = (data) => {
  $('#user-message').html('ENTRY DELETED')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const onDeleteAccountFailure = (data) => {
  $('#user-message').text('Failed to delete Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

module.exports = {
  onCreateAccountSuccess,
  onCreateAccountFailure,
  onGetAccountsSuccess,
  onGetAccountsFailure,
  onUpdateAccountSuccess,
  onUpdateAccountFailure,
  onDeleteAccountSuccess,
  onDeleteAccountFailure
}
