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

const onGetAccounts = function () {
  event.preventDefault()
  api.onGetAccounts()
    .then(ui.onGetAccountsSuccess)
    .then(() => { onGetAccounts() })
    // .then($('#read-account-form'))
    .catch(ui.onGetAccountsFailure)
}

const onUpdateAccount = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  $('#all' + id).hide()
  api.onUpdateAccount(formData)
    .then(ui.onUpdateAccountSuccess)
    .then(onGetAccounts)
    .catch(ui.onUpdateAccountFailure)
}

const onDeleteAccount = function (id) {
  event.preventDefault()
  console.log('I wonder!')
  // target individual account for deletion
  const accountId = $(event.target).data('id')
  $('.content' + accountId).show()
  api.onDeleteAccount(accountId)
    .then(ui.onDeleteAccountSuccess)
    .catch(ui.onDeleteAccountFailure)
}

const onShowAccount = () => {
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
