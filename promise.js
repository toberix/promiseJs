let promiseToCleanTheRoom = new Promise(function(resolve, reject){
  
  let isClean = false;
  
  if(isClean){
    resolve('Clean');
  }else
    {
      reject('not Clean');
    }
});



let cleanRoom = () => {
  return new Promise(function(resolve, reject){
    resolve('Cleaned The Room');
  });
};

let removeGarbage = (message) =>{
  return new Promise(function(resolve, reject){
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = (message) =>{
  return new Promise(function(resolve, reject){
    resolve(message + ' won Icecream');
  });
};


cleanRoom().then((output)=>{
  return removeGarbage(output);
}).then((output) => {
  return winIcecream(output)
}).then((output)=>{
  console.log('finished ' + output)
})