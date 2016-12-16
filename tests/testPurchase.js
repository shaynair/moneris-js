'use strict'

var send = require('../index')

var credentials = {
  store_id: 'store5',
  api_token: 'yesguy',
  test: true
}

var purchase = {
  type: 'purchase',
  cust_id: 'cust id',
  order_id: 'ord',
  amount: '1.00',
  pan: '4242424242424242',
  expdate: 2011,
  crypt_type: 7,
  dynamic_descriptor: 123,
  status_check: false
}

send(credentials, purchase).then(result => {
  console.log('CardType = ' + result.CardType)
  console.log('TransAmount = ' + result.TransAmount)
  console.log('TxnNumber = ' + result.TxnNumber)
  console.log('ReceiptId = ' + result.ReceiptId)
  console.log('TransType = ' + result.TransType)
  console.log('ReferenceNum = ' + result.ReferenceNum)
  console.log('ResponseCode = ' + result.ResponseCode)
  console.log('ISO = ' + result.ISO)
  console.log('Message = ' + result.Message)
  console.log('IsVisaDebit = ' + result.IsVisaDebit)
  console.log('AuthCode = ' + result.AuthCode)
  console.log('Complete = ' + result.Complete)
  console.log('TransDate = ' + result.TransDate)
  console.log('TransTime = ' + result.TransTime)
  console.log('Ticket = ' + result.Ticket)
  console.log('TimedOut = ' + result.TimedOut)
  console.log('StatusCode = ' + result.StatusCode)
  console.log('StatusMessage = ' + result.StatusMessage)
})
