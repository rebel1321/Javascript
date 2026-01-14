// Immediately Invoked Function Expression(IIFE)
(function chai(){
    console.log(`DB Connected`);
    
})(); // named iffe
// ()() global scope var pollution ko htane k liye iffe

((port)=>{
    console.log(`DB conn on ${port}`);
    
})(5000);