const printNums = () => {
  console.log(1);
  setTimeout(() => console.log(2), 500);
  console.log(3);
};

printNums(); // Logs: 1, 3, 2 (2 logs after 500ms)

const sleepSync = (ms) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) { /* do nothing */ }
}

const printNums = () => {
  console.log(1);
  sleepSync(500);
  console.log(2);
  console.log(3);
};

printNums(); // Logs: 1, 2, 3 (2 and 3 log after 500ms)

const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const printNums = async() => {
  console.log(1);
  await sleep(500);
  console.log(2);
  console.log(3);
};

printNums(); // Logs: 1, 2, 3 (2 and 3 log after 500ms)
