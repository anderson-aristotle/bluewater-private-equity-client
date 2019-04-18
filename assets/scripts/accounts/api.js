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

const onUpdateAccount = function (formData, id) {
  console.log('Step 1')
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/accounts/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      account: {
        name: formData.name,
        amount: formData.amount
      }
    }
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
