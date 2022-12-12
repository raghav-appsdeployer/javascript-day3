
const add = (a, b,sub) => {
    console.log(Number(a) + Number(b));
  };
  const sub = (a, b,multiply) => {
    console.log(a - b);
  };
  const multiply = (a, b,div) => {
    console.log(a * b);
  };
  const div = (a, b) => {
    console.log(a/b);
  };

// question1
const question1 = (add, sub, multiply, div) => {
  if (add) {
    add(5, 4);
    if (sub) {
      sub(5,4);
      if (multiply) {
        multiply(5, 4);
        if (div) {
          div(5,4);
        }
      }
    }
  }
};

// question2 
const question2 = async (add,sub,multiply,div)=>{
     await add(5,4,true)
    if(add && sub) await sub(5,4)
    if(sub && multiply) await multiply(5,4)
    if(multiply && div) await div(5,4)
}




// question3

const question3 = ()=>{
 const p1 = new Promise ((res,rej)=>{
    res(true)
 });
const p2 = new Promise((res,rej)=>{
    res(21)
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise 3 success");
    // rej('promise 3 rejected')
  }, 100);
});

Promise.all([p1, p2, p3]).then((val) => {
  console.log(val);
});
}



// question 4 

const question4 = async ()=>{
    console.log('Promise Start')
    try {
        const promise = new Promise((res,rej)=>{
            setTimeout(() => {
             rej('promise reject')
            }, 2000);
        })
        await promise
    } catch (err) {
       console.log(err)
    }

}



//question5 
const question5 = ()=>{
    try {
        // for catch uncomment below line
        // throw new Error('catch block log')
       console.log('try block log') 
    } catch (error) {
        console.log(error.message)
    }finally{
    console.log('run everytime')
    }
}

// run each function one by one because some function are asychronous so it will run after so for simlicity 
question1(add,sub,multiply,div);
question2(add,sub,multiply,div)
question3()
question4()
question5()