//slice method actual array will not modified
var a =[8,3,5,4,7,2,3,1,]
let C1 = a.slice(1,4);
console.log(C1);
console.log(a);




//splice method will modify the actual array
var B =[1,2,4,5,6,8,9]
let B1 = B.splice(2,2);
console.log(B1);
console.log(B);



