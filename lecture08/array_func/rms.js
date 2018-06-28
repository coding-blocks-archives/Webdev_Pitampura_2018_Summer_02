/**
 * Created by rishabhkhanna on 28/06/18.
 */
window.onload = function () {
    var inputBox = document.getElementById("rms-value")
    var button = document.getElementById("cal-rms");
    var output = document.getElementById("rms");

    button.onclick = function () {
        var inputValue =inputBox.value;

        // var rms = Math
        //     .sqrt(
        //         inputValue.split(',').map(function (v, i, a) {
        //             return parseInt(v);
        //         }).map(function (v,i,a) {
        //             return Math.pow(v,2)
        //         }).reduce(function (accum, v, i , a) {
        //             return accum + (value/a.length)
        //         }, 0)
        //     )


        var rms = Math.sqrt(
            inputBox.value.split(',')
                .map((v)=>Math.pow(+v,2))
                .reduce((a,v,i,ar)=>a+(v/ar.length),0)
        )



    }
}
