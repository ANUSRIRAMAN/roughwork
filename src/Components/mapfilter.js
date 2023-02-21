
const arr =[5,1,3,2,6]

///transform and return new video

function double(x){
    
    return x*2;
 
}
const output = arr.map(double)
   console.log(output)

   ///result [ 10, 2, 6, 4, 12 ]

   function triple(y){
    return y*3
   }
   const answer= arr.map(triple)
   console.log(answer)




   
   const result = arr.map(function binary(z){
    z.toString(2);
   })
   console.log(result)

   ////arrow function 
   const result1 = arr.map((a)=>{
return a*10
   })
   console.log(result1);

   ////filter funcion
   ///odd value fileter


   function isOdd(x){
return x%2
   }
   const odd = arr.filter(isOdd)

   console.log(odd)

   function even(y){
   return y%2===0
}
const evens = arr.filter(even)
console.log(evens)


function isGreater(z){
    return z>4
}
const greatest = arr.filter(isGreater)
console.log(greatest)

var greatestans=arr.filter((g)=>g>4)
console.log(greatestans)
//  var oddoreven = arr.filter((e)=>{
//     if(e%2===0){
//         return e%2===0
//     }
//     else {
//         return e%2
//     }
//  })
//  console.log(oddoreven)


/////reduce
//// gives single value

//sum or maximum number inside array

function findSum(arr){
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
        
    }
return sum;
}
console.log(findSum(arr))

const addFull = arr.reduce(function (acc,curr){
    //acc  accuulate the result
    //cur values inside reduced
    acc = acc + curr
    return acc;
},0)
console.log(addFull)


var ascending=arr.sort((a,b)=>a-b)
console.log(ascending)


var descending = arr.sort((a,b)=>b-a)
console.log(descending)


const alteradd= arr.reduce((acc,ele)=>acc=acc+ele,0)
console.log(alteradd)


var ans = ans.sort(function accend(a,b){
    return a-b
})
console.log(ans)


///find max reducer normal method
function findMax(arr){
    let max=0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }

    }
    return max;
}
console.log(findMax(arr));


const reduced = arr.reduce((max,curr)=>{
if(curr>max){
max=curr
}
return max
},0)
console.log(reduced)




///advanced
const users =[
    {firstName:"chris",lastName:"thor",age:"54"},
    {firstName:"tony",lastName:"stark",age:"45"},
    {firstName:"steve",lastName:"roger",age:"34"},
    {firstName:"bruce",lastName:"wayne",age:"45"},



];

///list of fullname

const fullname = users.map((x)=>
    x.firstName+x.lastName
)
console.log(fullname)


///different age

const agecal=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
acc[curr.age]= ++acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
    return acc;
},{})
console.log(agecal)


//repeatation  count

const agefind=users.filter((x)=>
    x.age>50
    
)
console.log(agefind)
const namefind = agefind.map((y)=>y.firstName)
console.log(namefind)


const reducechallenge = users.reduce((acc,curr)=>{
if(curr.age>50){
    acc.push(curr.firstName)
}
},{})
console.log(reducechallenge)
