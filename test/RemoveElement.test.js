const should = require('should');
const RemoveElement = require('../javascript/RemoveElement');

RemoveElement([3,2,2,3], 3).should.equal(2);
RemoveElement([0,1,2,2,3,0,4,2], 2).should.equal(5);
