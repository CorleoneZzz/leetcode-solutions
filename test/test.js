const should = require('should');

const test = () => {
  const cases = require(process.argv[3]);
  const solution = require(process.argv[4]);
  cases.forEach((item) => {
    solution(item.input).should.equal(item.output);
  })
}
test();
module.exports = {
  test
}