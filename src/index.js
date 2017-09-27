module.exports = function zeros(expression) {

let arr = expression.split('*');
  let n2 = 0;
  let n5 = 0;

function f1(x){
   for(let i=x; i>=2; i -=1){
     let h = i;
    while(i%5===0){
      i=i/5;
      n5++;
    };
    i = h;
    while(i%2===0){
      i=i/2;
      n2++;
    };
    i = h;
   };
  };

function f2(x){
   for(let i=x; i>=2; i -=2){
    let h = i;
    while(i%2===0){
      i=i/2;
      n2++;
    };
    i = h;
    while(i%5===0){
      i=i/5;
      n5++;
    };
    i = h;
   };
  }; 

  for(let j=0; j<arr.length; j++){
    let find1 = arr[j].search(/!/);
    let find2 = arr[j].search(/!!/);
    if(find2>-1){
      let num2 = arr[j].slice(0,-2);
      f2(num2);
    }
    if(find1>-1){
      let num1 = arr[j].slice(0,-1);
      f1(num1);
    }
  };


return Math.min(n5,n2);

};
