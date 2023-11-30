const str = 'JavaScript is a programming language';
/(JavaScript) is a (.*)/.exec(str);
/*
  [
    0: 'JavaScript is a programming language',
    1: 'JavaScript',
    2: 'programming language'
  ]
*/

const str = 'JavaScript is a programming language';
/(?:JavaScript|Python) is a (.+)/.exec(str);
/*
  [
    0: 'JavaScript is a programming language',
    1: 'programming language'
  ]
*/

const str = 'JavaScript is a programming language';
/(?<subject>.+) is a (?<description>.+)/.exec(str);
/*
  [
    0: 'JavaScript is a programming language',
    1: 'JavaScript',
    2: 'programming language',
    groups: {
      subject: 'JavaScript,
      description: 'programming language'
    }
  ]
*/

const str = 'JavaScript is a programming language - an awesome programming language JavaScript is';
/(.+) is a (?<description>.+) - an awesome \k<description> \1 is/.exec(str);
/*
  [
    0: 'JavaScript is a programming language - an awesome programming language JavaScript is',
    1: 'JavaScript',
    2: 'programming language',
    groups: {
      subject: 'JavaScript,
      description: 'programming language'
    }
  ]
*/

const str = 'JavaScript is not the same as Java and you should remember that';
/Java(?=Script)(.*)/.exec(str);
/*
  [
    0: 'JavaScript is not the same as Java and you should remember that',
    1: 'Script is not the same as Java and you should remember that'
  ]
*/

/Java(?!Script)(.*)/.exec(str);
/*
  [
    0: 'Java and you should remember that',
    1: ' and you should remember that'
  ]
*/

const str = 'Greek looks like this: γεια';
/\p{Script=Greek}+/u.exec(str);
/*
  [
    0: 'γεια'
  ]
*/
