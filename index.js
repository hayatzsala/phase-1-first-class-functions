function receivesAFunction(callback1){
return callback1()
}

function returnsANamedFunction(){
    return (function test(){
        return true;
    })
}

function returnsAnAnonymousFunction(){
    return (()=> 1);
}