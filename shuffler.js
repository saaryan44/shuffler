const fx=f=>{const y=[]; const c=f.splice(0,f.length/2); while(true){if(c.length===0 || f.length===0){break;}y.push(c.shift()); y.push(f.shift());} return y};
console.log(fx([2,1,5,3,11,7]));