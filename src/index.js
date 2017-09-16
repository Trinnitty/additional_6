module.exports = function zeros(expression) {

var arr = expression.split('*');

var n2 = 0;
var n5 = 0;

function f1(x){
   for(var i=x; i>=1; i -=1){
     var h = i;
    while(i%5===0){
      n5++;
      i=i/5;
    };
    while(i%2===0){
      n2++;
      i=i/2;
    };
    i = h;
   };
  };

function f2(x){
   for(var i=x; i>=2; i -=2){
    var h = i;
    while(i%2===0){
      n2++;
      i=i/2;
    };
    while(i%5===0){
      n5++;
      i=i/5;
    };
    i = h;
   };

  }; 

  for(var j=0; j<arr.length; j++){
    var find = arr[j].search(/!!/);
    if(find){
      var num = arr[j].slice(0,-2);
      f2(num); };

    var find2 = arr[j].search(/!/);
    if(find2){
      var num = arr[j].slice(0,-1);
      f1(num);
    };
  };
return Math.min(n2,n5);
};
