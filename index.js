const url1="la.dev.json"
const url2="la.dev2.json"
const url3="la.dev3.json"
const url4="la.dev4.json"
const url5="la.dev5.json"

function downloading(url,callback) {
    setTimeout(()=>{
         console.log(`กำลังโหลด ${url}`);
         callback(url)
    },3000)
}

// function complete(res){
//     console.log(`dowload ${res} เรียบร้อย `);
// }

// callback hell
downloading(url1,(res)=>{
    console.log(`dowload ${res} เรียบร้อย `);
    downloading(url2,(res)=>{
        console.log(`dowload ${res} เรียบร้อย `);
        downloading(url3,function(res){
            console.log(`dowload ${res} เรียบร้อย `);
            downloading(url4,function(res){
                console.log(`dowload ${res} เรียบร้อย `);
                downloading(url5,function(res){
                    console.log(`dowload ${res} เรียบร้อย `);
                });
            });
        });
    });
    
})

