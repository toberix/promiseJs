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