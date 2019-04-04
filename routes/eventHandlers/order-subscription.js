const request = require('request');
const url = require('url');
const async = require('async');

module.exports = async function (eventContext) {
    // your code here ..
    // here you should call your api for creating a subscription and return a referenceId to the subscription that is created on the vendor side.
    return {
        referenceId: '12345',
        referenceData: {id: '12345'}
    };
};

// const checkDomain = (ctx, cb) => {
//
//     if (!ctx.order.options || !ctx.order.options.domain)
//         return cb(errorHandler({
//             code: 422,
//             message: 'Required parameter domain was not provided',
//             meta: { requestData: JSON.stringify(ctx.order)}
//         }));
//
//     let domain = ctx.order.options.domain;
//     let host = url.parse(domain, true).host;
//
//     request.get(host ? domain : `http://${domain}`, (err, res) => {
//
//         if (!res || res.statusCode !== 200)
//             return cb({
//                 code: 422,
//                 message: `The specified domain ${domain} does not exist`,
//                 meta: { requestData: JSON.stringify(ctx.order)}
//             });
//
//         cb(null, ctx);
//     });
// };
//
// const apiCall = (ctx, cb) => {
//     let apiParams = {
//         product: ctx.order.code,
//         domain: ctx.order.options.domain,
//         name: ctx.account.name,
//         email: ctx.account.email,
//         lang: ctx.account.localeSettings.language
//     };
//
//     let requestOptions = {
//         url: `https://websplanet.mktgoo.net/api/accounts`,
//         method: 'POST',
//         headers: {
//             'X-Auth-Token': 'd5dfed5e139f4618c686ff4a160e689da44eadb8',
//             'accept': 'text/plain;'
//         },
//         json: apiParams
//     };
//
//     request(requestOptions, (err, res, body) => {
//         if (res && res.statusCode === 201)
//             return cb(null, {
//                 referenceId: body,
//                 referenceData: {id: body}
//             });
//
//         cb({
//             code: res ? res.statusCode : 500,
//             message: 'The vendor returned an error',
//             meta: {
//                 requestData: JSON.stringify(requestOptions),
//                 responseData: JSON.stringify(err || body)
//             }
//         });
//     });
// };
//
//
// module.exports = function(ctx) {
//     return new Promise((resolve, reject) => {
//         async.seq(
//             checkDomain,
//             apiCall
//         )(ctx, (err, response) => {
//             if(err)
//                 return reject(err);
//
//             return resolve(response);
//         });
//     });
// };