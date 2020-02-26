
const test = require('tape');
import * as eth from './eth-secp256k1-hd.js'

test('exec test', function(t) {
    t.equal(1, 1);
    eth.createChildKey();
});