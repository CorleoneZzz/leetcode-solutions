module.exports = [
  {
    input: 'hello world',
    output: 5,
  },
  {
    input: ' hello world ',
    output: 5,
  },
  {
    input: 'world',
    output: 5,
  },
  {
    input: '  world ',
    output: 5,
  },
  {
    input: '',
    output: 0,
  },
  {
    input: '  ',
    output: 0,
  },
];
