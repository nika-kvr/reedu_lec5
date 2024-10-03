// 1) write a function that takes a random number as an argument
//  and logs the random number while the argument number and random number are equal.
//  argument number should be from 0 to 10.

// function logNum(num){

//   if(num < 0 || num>10){
//     console.log('argument number should be from 0 to 10');
//     return
//   }
//   let randomNum;

//   do{
//     randomNum = Math.floor(Math.random() * 11)
//     console.log(randomNum)
//   }while(num !== randomNum)
// }

// logNum(10)


// 2) write a function that imitates to return fake data,use setTimeout.
// make both async/await and .then.catch methods.

// function getData(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       const success = Math.random() > 0.5
//       if(success){
//         res('fake data')
//       }else{
//         rej('failed to get fake data')
//       }

//     })
//   },2000)
// }

// getData()
//   .then(res=>{
//     console.log(res)
//   })
//   .catch(err=>{
//     console.log(err)
//   })

// async function getFakeData(){
//   try{
//     const response = await getData();
//     console.log(response)
//   }catch(err){
//     console.log(err)
//   }
// }

// getFakeData()


// 3)write a sleep function. make a function that takes a ms as an argument
// and when you call this function waits untill this function resolved. use setTimeout and promises.

// const sleep = (ms) => new Promise(res => {
//   setTimeout(()=>{
//     res()
//   },ms)
// })

// async function logwithSleep(){
//   console.log('first')
//   await sleep(2000)
//   console.log('second')
// }

// logwithSleep()
