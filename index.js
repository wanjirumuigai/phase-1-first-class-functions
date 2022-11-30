const aFunction = function book () {console.log("This is a book")}
function receivesAFunction(aFunction) {
   aFunction();

}

function returnsANamedFunction() {
    return function namedFunction(){console.log("print")};
}

function returnsAnAnonymousFunction() {
    return function(){console.log("anonymous function")};
}