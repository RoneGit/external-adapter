const request = require('async-request');

module.exports = async function (eventContext) {
    // your code here ..
    // here you should call your api for canceling a subscription and return a referenceId to the subscription that is cancelled on the vendor side.
    return {
        referenceId: '12345',
        referenceData: {id: '12345'}
    };
};


// module.exports = async function (ctx) {
//     // your code here ..
//     // here you should call your apis
//
//     let requestOptions = {
//         url: `https://websplanet.mktgoo.net/api/accounts/${ctx.vendor.referenceId}`,
//         method: 'DELETE',
//         headers: {
//             'X-Auth-Token': 'd5dfed5e139f4618c686ff4a160e689da44eadb8'
//         }
//     };
//
//     let res = await request(`https://websplanet.mktgoo.net/api/accounts/${ctx.vendor.referenceId}`, requestOptions);
//
//     if (res && res.statusCode === 200)
//         return {
//             referenceId: ctx.vendor.referenceId,
//             referenceData: {}
//         };
//
//     let error = {
//         code: res ? res.statusCode : 500,
//         message: 'The vendor returned an error',
//         meta: {
//             requestData: JSON.stringify(requestOptions),
//             responseData: JSON.stringify(res.body)
//         }
//     };
//     throw error;
//
// };