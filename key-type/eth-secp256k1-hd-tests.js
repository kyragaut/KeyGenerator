const ethsecp = require('eth-secp256k1-hd')
const test = require('tape');

test('exec test', function(t) {
    t.equal(1, 1);
    ethsecp.createChildKey();
});