// Extending the Array prototype
Array.prototype.chalNikal = function (index) {
  if (index === undefined || index === null) {
    index = this.length - 1;
  }

  if (index >= 0 && index < this.length) {
    return this.splice(index, 1)[0];
  }
};

let arr = [1, 2, 3];

console.log(arr.chalNikal(1)); // Removes and returns the element at index 1
console.log(arr); // The original array is modified
