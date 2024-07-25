
var expect = function(val) {
    function toBe(val2){
        if(val2 === val) return true;
        else throw new Error("Not Equal");
    }

    function notToBe(val2){
        if(val2 !== val) return true;
        else throw new Error ("Equal");
    }

    return {toBe, notToBe}
};