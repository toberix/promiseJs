let promiseToMarryYou = new Promise(function(resolve, reject){
  
  let marryYou = false;
  
  if(marryYou){
    resolve('Living happily together');
  }else
    {
      reject('Disappointed');
    }
});



let marryYou = () => {
  return new Promise((resolve, reject) => {
    resolve('The outcome of my proposal,');
  });
};

let loveYouTruly = (message) =>{
  return new Promise((resolve, reject)  => {
    resolve(message + ' a home full of love and happiness.');
  });
};

let livingHappily = (message) =>{
  return new Promise((resolve, reject) => {
    resolve(message + ' we have got beautiful children');
  });
};


marryYou().then((output)=>{
  return loveYouTruly(output);
}).then((output) => {
  return livingHappily(output)
}).then((output)=>{
  console.log(output)
})
