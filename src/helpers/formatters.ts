export const addCommasToNumber = (num: number) : string => num.toLocaleString('en-US');

// eslint-disable-next-line max-len
export const formatListOfWords = (listOfWords: string[]) : string => listOfWords.reduce((value, name, index, list) => {
  const isLast = list.length === index + 1;
  const isFirst = index === 0;
  const appendChar = isLast ? '.' : ',';
  const prependChar = isFirst ? '' : ' ';
  return `${value}${prependChar} ${name}${appendChar}`;
}, '');
