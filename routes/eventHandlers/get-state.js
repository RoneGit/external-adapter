const request = require('async-request');

module.exports = async function (eventContext) {
    // your code here ..
    // here you should call your api for getting a subscription state and return an object of the subscription stete.
    return {
        accountName: 'james',
        purchases: 5,
        message: 10
    };
};