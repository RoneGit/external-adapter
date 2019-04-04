let express = require('express');
let route = express.Router();
const _ = require('lodash');
const R = require('ramda');
const errorHandler = require('./eventHandlers/error-handler');

const fromSnakeToCamelCase = R.pipe(
    // convert object from {key1: value1, key2: value2, ...} to [["key1", value1], ["key2": value2], ...]
    R.toPairs,
    // convert pair [snake_case_key, value] to [camelCaseKey, value]
    R.map(pair => [_.camelCase(pair[0]), pair[1]]),
    // convert back from [key, value] to {key:value}
    R.fromPairs
);

const eventHandlers = fromSnakeToCamelCase(require('require-all')(__dirname + '/eventHandlers/'));


/**
    External adapter must implement all the events that are found in ./routes/eventHandler
 **/
route.post('/ping', async function(req, res) {
    return res.send({message: 'pong'});
});

route.post('/', async function(req, res) {
    let body = req.body;
    let eventType = _.camelCase(body.type);

    try {
        let response = await eventHandlers[eventType](body);
        return res.send(response);
    } catch (err) {
        return res.json(errorHandler({
            error: err,
            meta: body
        }));
    }
});

module.exports = route;
