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

// downloading(url1).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('จบ')
// });

// Promise Hell
// downloading(url1).then(res=>{
//     console.log(res)
//     downloading(url2).then(res=>{
//         console.log(res)
//     })
// })

//>>>> มาใช้อันนี้แทน
downloading(url1).
then(res=>{
    console.log(res)
    return downloading(url2)
}).then(res=>{
    console.log(res)
    return downloading(url3)
}).then(res=>{
    console.log(res)
})