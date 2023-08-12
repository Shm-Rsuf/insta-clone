/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return Math.abs(i - j) === k;
      }
    }
  }
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
