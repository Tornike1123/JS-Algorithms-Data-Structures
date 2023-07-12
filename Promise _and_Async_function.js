const toko = (n) => {

    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("toko")
        }, n * 1000);
    })
}
    
async function func (n){
    let res = await toko(n)
    console.log(res)
}

    
func(5);