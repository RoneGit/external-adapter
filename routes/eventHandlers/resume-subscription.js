
module.exports = async function (eventContext) {
    // your code here ..
    // here you should call your api for resuming a subscription and return a referenceId to the subscription on the vendor side.
    return {
        referenceId: '12345',
        referenceData: {id: '12345'}
    };
};