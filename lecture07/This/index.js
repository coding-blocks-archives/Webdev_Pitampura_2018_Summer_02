/**
 * Created by rishabhkhanna on 25/06/18.
 */
var a = {
    b: "value",
    c: "value",
    d: {
        a: this.b
    },
    e: function () {
        console.log(this);
    }
}
