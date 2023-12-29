// Extend the Array prototype
Array.prototype.each = function(callback) {
    this.forEach((element) => {
        callback(element);
    });
};

Array.prototype.eachWithIndex = function(callback) {
    this.forEach((element, index) => {
        callback(element, index);
    });
};


// Usage example
const nums = [1, 2, 3];
nums.each((num) => {
    console.log(num);
});


const nums1 = [1, 2, 3];
nums1.eachWithIndex((num, index) => console.log(`Index: ${index}, Value: ${num}`));
