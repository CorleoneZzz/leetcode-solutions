module.exports = [
  {
    input: 'the sky is blue',
    output: 'blue is sky the',
  },
  {
    input: ' the sky is blue ',
    output: 'blue is sky the',
  },
  {
    input: ' the  sky    is blue',
    output: 'blue is sky the',
  },
  {
    input: 'the',
    output: 'the',
  },
  {
    input: '  the ',
    output: 'the',
  }
];
