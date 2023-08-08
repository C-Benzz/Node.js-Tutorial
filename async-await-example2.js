async function taskOne() {
  return await new Promise(resolve => setTimeout(resolve(`1`),  2000));
}
async function taskTwo() {
  return await new Promise(resolve => setTimeout(resolve(`2`), 3000));
}
async function taskThree() {
  return  await new Promise(resolve => setTimeout(resolve(`3`), 1000));
}

const main = async() =>{
  console.log(await taskOne());
  console.log(await taskTwo());
  console.log(await taskThree());
}
main();
