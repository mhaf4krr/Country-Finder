
// here getData is an async function it needs a call back function 
//to maintain asynch behaviour, return statements donot work

getData( (error,data) => {
   if(error){
       console.log(error)
   }

   else {
    createUI(data);
    loadLocation(data);
   }
})

console.log('lets race');