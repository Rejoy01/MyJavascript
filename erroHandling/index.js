// throw - for creating custom error messages 
// even though there is error execution will continue
try {
    
    // console.logg("hii");
    throw new Error("this is an error");

} catch (err) {
    console.log(err.message);
}finally{
    console.log("finally");
}

console.log("Hello");

 