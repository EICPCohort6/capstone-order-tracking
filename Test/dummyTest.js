let assert = require('assert');

it('should return -1 when the value is not present', function() {
    assert.equal(-2, [1,2,3].indexOf(4)); //-1 === -1
});