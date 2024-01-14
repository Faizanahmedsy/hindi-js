// Extending the Array prototype
Array.prototype.bohutJagahHai = function (element) {
  this.push(element);
};

let arr = [1, 2, 3];

arr.bohutJagahHai(4); // Adds the element 4 to the end of the array
console.log(arr);

arr.bohutJagahHai(8); // Adds the element 5 to the end of the array
console.log(arr);
