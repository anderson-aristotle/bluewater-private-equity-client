'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAccount = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onCreateAccount(formData)
    .then(ui.onCreateAccountSuccess)
    .catch(ui.onCreateAccountFailure)
}

const onGetAccounts = function (event) {
  event.preventDefault()
  api.onGetAccounts()
    .then(ui.onGetAccountsSuccess)
    .catch(ui.onGetAccountsFailure)
}

const onUpdateAccount = function (event) {
  console.log('Step 2')
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  $('.content' + id).hide()
  api.onUpdateAccount(formData)
    .then(ui.onUpdateAccountSuccess)
    .then(data => onGetAccounts(event))
    .catch(ui.onUpdateAccountFailure)
}

const onDeleteAccount = function (event) {
  event.preventDefault()
  console.log('I wonder!')
  // target individual account for deletion
  const accountId = $(event.target).data('id')
  api.onDeleteAccount(accountId)
    .then(() => onGetAccounts(event))
    .catch(ui.onDeleteAccountFailure)
}

const onShowAccount = (event) => {
  event.preventDefault()
  api.onGetAccounts()
    .then()
    .cathc()
}

const showUpdateForm = function (event) {
  const accountId = $(event.target).data('id')
  $('#' + accountId).toggle()
}

module.exports = {
  onCreateAccount,
  onGetAccounts,
  onUpdateAccount,
  onDeleteAccount,
  showUpdateForm,
  onShowAccount
}
