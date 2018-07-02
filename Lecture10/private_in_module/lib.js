function privFun () {
    console.log('private function')
}
function pubFun () {
    privFun()
}
module.exports = {
    pubFun
}