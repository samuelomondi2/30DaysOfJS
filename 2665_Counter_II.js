
var createCounter = function(init) {
    let currentValue = init

    return {
        increment:() => currentValue += 1,

        decrement:() => currentValue -= 1,

        reset:() => currentValue = init
    }
};