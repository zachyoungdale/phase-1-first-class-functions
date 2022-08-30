
const receivesAFunction = (spy) => {
    spy();
}

const returnsANamedFunction = () => {
   let namedFunction = () => {

   };
   return namedFunction;
}

const returnsAnAnonymousFunction = () => {
   return function() {

    };
    
};
