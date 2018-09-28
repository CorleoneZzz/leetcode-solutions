const should = require('should');

const test = () => {
  const cases = require(process.argv[0]);
  const solution = require(process.argv[1]);
  cases.forEach((item) => {
    solution(item.input).should.equal(item.output);
  })
}

module.exports = {
  test
}