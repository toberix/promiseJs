let promiseToCleanTheRoom = new Promise(function(resolve, reject){
  
  let isClean = false;
  
  if(isClean){
    resolve('Clean');
  }else
    {
      reject('not Clean');
    }
});



promiseToCleanTheRoom.then(function(fromResolve){
  console.log('The Room ' + fromResolve)
}).catch(function(fromReject){
  console.log('The Room ' + fromReject)
});

let cleanRoom = function() {
  return new Promise(function(resolve, reject){
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + ' won Icecream');
  });
};

cleanRoom().then(function(){
  return removeGarbage();
}).then(function(){
  return winIcecream()
}).then(function)


// USING ARROW FUNCTION

// cleanRoom().then((resul)=>{
//   return removeGarbage(resul);
// }).then((resul) => {
//   return winIcecream()
// }).then((resul)=>{
//   console.log('finished ' + resul)
// })