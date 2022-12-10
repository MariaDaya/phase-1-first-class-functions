
function receivesAFunction (callFunction){
callFunction();
};


function returnsANamedFunction (){
   return function namedFunction()
   {console.log('hi')}
};

function returnsAnAnonymousFunction() {
   return () => console.log('hi')
}