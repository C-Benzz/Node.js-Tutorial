function taskOne() {
  return new Promise((resolve) => setTimeout(resolve(`1`), 2000));
}
function taskTwo() {
  return new Promise((resolve) => setTimeout(resolve(`2`), 3000));
}
function taskThree() {
  return new Promise((resolve) => setTimeout(resolve(`3`), 1000));
}

const main = async () => {
  console.log(await taskOne());
  console.log(await taskTwo());
  console.log(await taskThree());
};
main();
