const count =(n) =>{
    for(i= n; i>=0; i--){
        console.log(1)
    }
}

// count(10);

// this is a recursive funtion
const reCall = (n) =>{
    if(n === 0){
        return reCall
    }
    console.log(n)
    return reCall(n-1)

}

console.log("this is reCall", reCall(10))