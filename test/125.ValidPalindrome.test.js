module.exports = [
  {
    input: 'A man, a plan, a canal: Panama',
    output: true,
  },
  {
    input: 'race a car',
    output: false,
  },
  {
    input: '',
    output: true,
  },
  {
    input: '  12',
    output: false,
  },
  {
    input: 'abcbA',
    output: true,
  },
  {
    input: '123-321;!',
    output: true,
  },
];
