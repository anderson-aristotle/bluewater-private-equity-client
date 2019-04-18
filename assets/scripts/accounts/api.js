'use strict'
const config = require('../config.js')
const store = require('../store.js')

const onCreateAccount = function (formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const onGetAccounts = function () {
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdateAccount = function (formData) {
  console.log('Step 1')
  return $.ajax({
    url: config.apiUrl + `/accounts/${formData.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const onDeleteAccount = function (id) {
  console.log('id', id)
  return $.ajax({
    url: config.apiUrl + '/accounts/' + `${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onGetAccounts,
  onCreateAccount,
  onUpdateAccount,
  onDeleteAccount
}
