// variables defined using let cannot be redeclared 

//example
// this will throw error          with var u can : 
// let x = "Jhon";                 var x = "Jhon";
// let x = 10;                     var x = 10;


// variables defined with let must be declared before use


// variables defined with let have Block Scope
// Variables defined inside a {BlockScope} cannot be accessed outside the block

{
    let x = 2
}
// x cannot be used here

// varibales with var keyword cn NOT have block scope 
{
    var x = 2;
}
// x can be used here
