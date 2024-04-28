// let mypromise = new Promise((resolve,reject)=>{
//     resolve("This is success")
// })

// mypromise
// .then((value)=>console.log(`resolved - ${value}`))
// .catch((error)=>console.log(`rejected - ${error}`))
// .finally(()=>console.log("Finally will always execute  at end"))


// let promise1 = new Promise((resolve,reject)=>{
//     console.log("Promise 1 is pending state")
//     setTimeout(()=>{
//         resolve(10)
//     },5000)
// })


// let promise2 = new Promise((resolve,reject)=>{
//     console.log("Promise 2 is pending state")
//     setTimeout(()=>{
//         resolve(20)
//     },5000)
// })

// promise1
// .then((value)=>{
//     console.log(`resolved - ${value}`)
  
//     promise2
// .then((value)=>console.log(`resolved - ${value}`))
// .catch((error)=>console.log(`rejected - ${error}`))
// })
// .catch((error)=>console.log(`rejected - ${error}`))


let Promise1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise1 is resolved after 3 sec")
    },3000)
})


let Promise2 = new Promise ((resolve,reject) => {
    setTimeout(()=>{
        resolve("promise2 is resolved after 2 sec")
    },2000)
})

let Promise3 = new Promise ((resolve,reject)=>{
    function myfunction(){
        return "Promise3 is resolved"
    }
    resolve(myfunction())
})

let Promise4 = new Promise ((resolve,reject)=>{
 
    resolve("promise4 is resolved")
   
})
let Promise5 = new Promise ((resolve,reject)=>{
 
    reject("promise5 is reject")

})

// Promise  ************************************************************************************************************************************
// .all([Promise1,Promise2,Promise3,Promise4,Promise5])// similar to AND gate(it give first rejected one)
// .then((value)=>console.log(`all resolved - ${value}`,value))
// .catch((error)=>console.log(`all rejected - ${error}`))

// Promise
// .any([Promise1,Promise2,Promise3,Promise4,Promise5])//similar to OR gate(it give first resolved one)
// .then((value)=>console.log(`any resolved - ${value}`,value))
// .catch((error)=>console.log(`any rejected - ${error}`))

// Promise
// .race([Promise1,Promise2,Promise3,Promise4,Promise5])// it will give the first result of premise
// .then((value)=>console.log(`race resolved - ${value}`,value))
// .catch((error)=>console.log(`race rejected - ${error}`))

// // Promise
// // .allSettled([Promise1,Promise2,Promise3,Promise4,Promise5])//it will give all the result of premises(actually string literal cann't be used here bzc its object of array sometime it is wrong pr mistake)
// // .then((value)=>console.log(`any resolved - ${value}`,value))
// // .catch((error)=>console.log(`any rejected - ${error}`))

// Promise
// .allSettled([Promise1,Promise2,Promise3,Promise4,Promise5])
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))   *********************************************************************************************************


// Promise
// .all([promise1,promise2,promise3,promise4,promise5]) //similar to AND gate
// .then((value)=>console.log(`all resolved - ${value}`,value))
// .catch((error)=>console.log(`all rejected - ${error}`))

// Promise
// .any([promise1,promise2,promise3,promise4,promise5])//similar to OR gate
// .then((value)=>console.log(`any resolved - ${value}`,value))
// .catch((error)=>console.log(`any rejected - ${error}`))

// Promise
// .race([promise1,promise2,promise3,promise4,promise5])//whoever comes first will be the result
// .then((value)=>console.log(`race resolved - ${value}`))
// .catch((error)=>console.log(`race rejected - ${error}`))

//any will wait untill atleast one promise is resolved
//race don't care about resolve or reject the first to be settled is the output

// Promise
// .allSettled([promise1,promise2,promise3,promise4,promise5])//gives the status of all the promise
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))

//https://restcountries.com/v3.1/all


fetch("https://restcountries.com/v3.1/all")
.then((res)=>{
    if(res.status===200)
    {
        let h1 = document.createElement("h1")
        h1.innerText = res.status + " " + res.statusText

        document.body.appendChild(h1)

        return res.json()
    }
    else
    {
        console.log(res.status)
        console.log(res.statusText)

        let h1 = document.createElement("h1")
        h1.innerText = res.status + " " + res.statusText

        document.body.appendChild(h1)
    }
})
.then((data)=>{
    data.forEach((e)=>{
        console.log(e.name.common)
    })
})
.catch(error=>console.log(error))


fetch("https://catfact.ninja/fact")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})
.catch(error=>console.log(error))