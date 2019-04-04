
module.exports = (errorObj) => {

    let err = {
        message: errorObj.message,
        meta: errorObj.meta,
        error: errorObj.error
    };
    switch (errorObj.code) {
        case 400:
            err.statusCode = 500;
            err.errorName = 'EXTERNAL_ACCOUNT_ERROR';
            break;
        case 403:
            err.statusCode = 500;
            err.errorName = 'EXTERNAL_FORBIDDEN';
            break;
        case 409:
            err.statusCode = 500;
            err.errorName = 'EXTERNAL_ACCOUNT_ALREADY_EXISTS';
            break;
        case 422:
            err.statusCode = 400;
            err.errorName = 'EXTERNAL_BAD_REQUEST';
            break;
        case 502:
            err.statusCode = 500;
            err.errorName = 'EXTERNAL_TEMP_ERROR';
            break;
        default:
            err.statusCode = 500;
            err.errorName = 'EXTERNAL_GENERAL_ERROR';
            break;
    }

    return err;
};

/* jshint ignore:start */
/**
 * # Errors
 * This are the error that can be returned as response from the external adapter to cosmos.
 *
 * Status Code | Error Name                        | Description
 * ----------- | --------------------------------- | ----------------------------------------------------------------------------------------
 * 400         | ACCOUNT_ALREADY_EXISTS            | This error code is typically used a subscription cant be purchased because one or more uniq paremeters
 *                                                   are already taken (like email or account name).
 * 400         | BAD_REQUEST                       | Generally means the requested JSON is invalid or missing required parameters. More details in error message.
 * 500         | GENERAL_ERROR                     | Unknown error returned from vendor service
 * 500         | FORBIDDEN                         | This error code is typically used when vendor server refuses to process the request
 *             |                                     (more details in error message). In most cases means the reseller credentials are not valid.
 * 500         | ACCOUNT_ERROR                     | This error code is typically used when the Cosmos subscription not found on vendor side.
 * 500         | TEMP_ERROR                        | This error code is returned when vendor server temporarily refuses to process the request
 *                                                   (for example due to maintenance)
 */
/* jshint ignore:end */