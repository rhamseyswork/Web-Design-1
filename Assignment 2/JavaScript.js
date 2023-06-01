function doSomething(x) {
    function mysterious(y) {
      y.z = x.y + 100;
    }
    
    return mysterious(x);
   }
   var someObj = {
    y : 123,
    z: 'mysterious'
   };
   doSomething(someObj);
   console.log(someObj.z);
   