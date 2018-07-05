/**
 * Created by rishabhkhanna on 05/07/18.
 */
function fun1() {
    console.log("fun1");
    return 1;
}

function fun2() {
    console.log("fun2");
    return 2;
}

var x = (fun1(),fun2());

var id = (setTimeout(()=>{clearInterval(id)}, 6000),
    setInterval(()=>console.log("A"), 1000));

setTimeout(
    (id)=>clearInterval(id),
    6000,
    setInterval(()=>console.log("A"))
    , 1000);

setTimeout(function (x,y,z,w) {

},1000, 1,2,3,4)




console.log(x)