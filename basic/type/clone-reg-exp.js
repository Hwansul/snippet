const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);

const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // regExp !== regExp2
