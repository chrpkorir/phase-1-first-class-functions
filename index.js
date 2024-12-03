
function  receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(){
    return function named(){
        console.log("I am named function")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am anonymous")
    }
}