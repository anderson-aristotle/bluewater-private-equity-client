'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAccount = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onCreateAccount(formData)
    .then(ui.onCreateAccountSuccess)
    // .then(() => { onGetAccounts() })
    .catch(ui.onCreateAccountFailure)
}

const onGetAccounts = function () {
  api.onGetAccounts()
    .then(ui.onGetAccountsSuccess)
    .then($('#get-accounts').toggle())
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

const onDeleteAccount = function () {
  event.preventDefault()
  const accountId = $(event.target).data('id')
  $('#all' + accountId).hide()
  api.onDeleteAccount(accountId)
    .then(ui.onDeleteAccountSuccess)
    .catch(ui.onDeleteAccountFailure)
}

const onShowAccount = () => {
  event.preventDefault()
  // api.onGetAccounts()
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
