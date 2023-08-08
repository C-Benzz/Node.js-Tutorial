const connect = true;
const url1="la.dev.json"
const url2="la.dev2.json"
const url3="la.dev3.json"
const url4="la.dev4.json"
const url5="la.dev5.json"

function downloading(url) {
  return new Promise((resolve, reject) => {
    console.log('กำลังโหลด')
    setTimeout(() => {
      if (connect) {
        // console.log(`โหลด ${url} เรียบร้อย`)
        resolve(`โหลด ${url} เรียบร้อย`);
      } else {
        // console.log('เกิดข้อผิดพลาด')
        reject("เกิดข้อผิดพลาด");
      }
    }, 3000);
  });
}

async function start(){
  console.log(await downloading(url1))
  console.log(await downloading(url2))
  console.log(await downloading(url3))
  console.log(await downloading(url4)) 
  console.log(await downloading(url5))
}

start()