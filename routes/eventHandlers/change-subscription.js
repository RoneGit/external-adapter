const request = require('async-request');

module.exports = async function (eventContext) {
    // your code here ..
    // here you should call your api for canceling a subscription and return a referenceId to the subscription that is cancelled on the vendor side.
    return {
        referenceId: '12345',
        referenceData: {id: '12345'}
    };
};