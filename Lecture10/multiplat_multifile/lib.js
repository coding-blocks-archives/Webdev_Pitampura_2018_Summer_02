
function isAdult (age) {
    return age > 18
}

if (typeof module !== 'undefined') {
    module.exports = {
        isAdult
    }
}
