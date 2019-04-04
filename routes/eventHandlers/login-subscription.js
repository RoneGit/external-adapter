const request = require('async-request');

module.exports = async function (eventContext) {
    // your code here ..
    // here you should call your api to login to a subscription and return this object with your url as the accessUrl paremeter.
    return {
        type: 'url',
        accessUrl: 'https://www.google.com/'
    };
};

// module.exports = async function(ctx) {
//
//     let requestOptions = {
//         method: 'GET',
//         headers: {
//             'X-Auth-Token': 'd5dfed5e139f4618c686ff4a160e689da44eadb8'
//         }
//     };
//
//     let res = await request(`https://websplanet.mktgoo.net/api/login/${ctx.vendor.referenceId}?expires=30`, requestOptions);
//
//     if (res && res.statusCode === 200) {
//         let response = {
//             type: 'url',
//             accessUrl: res.body.replace(/(\r\n|\n|\r)/gm, '')
//         };
//         return response;
//     }
//
//     let error = {
//         code: res ? res.statusCode : 500,
//         message: 'The vendor returned an error',
//         meta: {
//             requestData: JSON.stringify(requestOptions),
//             responseData: JSON.stringify(err || res.body)
//         }
//     };
//     throw error;
// };

