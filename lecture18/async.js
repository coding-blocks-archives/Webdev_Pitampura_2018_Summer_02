/**
 * Created by rishabhkhanna on 23/07/18.
 */

function getSqrtAfter2(num, done) {
    console.log("sqrt function started");
    setTimeout(()=>{
        var a = Math.sqrt(num)
        console.log("sqrt calculated");
        done(a);
        return a;
    }, 2000)
}

function getAfter1(num) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(num < 0) return reject(new Error("Cannot be less than 0"));
            // console.log("after reject ");
            var a = Math.sqrt(num)
            resolve(a);
        },1000)
    })
}

// getSqrtAfter2(10, function (number) {
//     console.log(`sqrt of 10 is : ${number}`);
// })

// getAfter1(-12).then((num)=>{
//     console.log(num);
// }).catch((err)=>{
//     // console.log(err);
// })


async function task() {
    try{
        var sqrtVal = await getAfter1(12);
        sqrtVal++;
        console.log(sqrtVal);
        var sqrtVal2 = await getAfter1(11);
        console.log(sqrtVal2);
    }catch (err){
        console.log(err);
    }

}
task();
console.log("outside async await");


