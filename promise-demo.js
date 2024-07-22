/*
In Javascript a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
A promise may have one of the three states
1. Pending
2. Fullfilled
3. Rejected
*/
/*
const count = true;

let countValue = new Promise((resolve,reject)=>{
    if (count){
        resolve("Counting is on")
    }
    else{
        reject("Counting has stopped")
    }
})

console.log(countValue);*/

/*
/*
1. Place Order - 2
2. Cut the Fruit - 2
3. Add Water and Ice -1
4. Start the Machine -1
5. Select container - 2
6. Select toppings- 3
7. Serve ice cream - 2
*/

let stocks = {
    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["choclate","peanuts"]
}
/* order from customers -> fetch ingredients -> start production -> serve */

let iorder = (fruit_name,call_production)=>{
    setTimeout(function(){
        console.log(`${stocks.Fruits[fruit_name]} was selected`)
        call_production()
    },2000)
}

let production = () =>{
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
        console.log("The fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(()=>{console.log("Start the Machine")
                    setTimeout(()=>{console.log(`Ice Cream place on ${stocks.holder[1]}`)
                        setTimeout(()=>{console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(()=>{console.log("serve the Ice Cream")
                            ,2000})
                    },3000)
                },2000)
            },1000)
            },1000)
        },2000)
    },0)
   
}
//iorder(0,production)

let is_shop_open = false
let order = (time,work) =>{
    return new Promise ((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log("our shop is closed"))
        }
        
    })
}

order(2000,()=>console.log(`${stocks.Fruits[1]} was selected`))
.then (()=>{
    return order(0,()=>console.log(`preparation has started`))
})
.then (()=>{
    return order(2000,()=>console.log("Fruit has been chopped"))
})
.then (()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then (()=>{
    return order(1000,()=>console.log("Start the Machine"))
})
.then (()=>{
    return order(2000,()=>console.log(`Ice cream placed on ${stocks.holder[1]}`))
})
.then (()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} as toppings` ))
})
.then (()=>{
    return order(2000,()=>console.log("Serve Ice Cream"))
})
.catch(()=>{console.log("Customer left")})
.finally(()=>{
    console.log("end of the day")
})
