'use strict'

const store = require('../store.js')
// const formatAccounts = require('../templates/accounts.handlebars')

const showOwnership = () => {
  $(`.my-account[data-owner=${store.user._id}]`).show()
}

const onCreateAccountSuccess = (responseData) => {
  console.log(responseData)
  $('#display').empty()
  $('#user-message').text('You have successfully added an account!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  const accounts = responseData.account
  const userHtml = `<p>
      Name: ${accounts.name}
      Amount: ${accounts.amount}
      </p>`
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
  $('#display').empty()
  // const formattedAccounts = formatAccounts({accounts: store.accounts})
  // $('#get-accounts').html(formattedAccounts)
  for (let i = 0; i < accounts.length; i++) {
    const userHtml = (`
      Name: ${accounts[i].name}
      Amount: ${accounts[i].amount}
      `)
    $('#display').append(userHtml)
  }
  $('form').trigger('reset')
  showOwnership()
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
  $('.list-item').trigger('reset')
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

const onDeleteAccountSuccess = () => {
  $('#user-message').html('ENTRY DELETED')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const onDeleteAccountFailure = () => {
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
