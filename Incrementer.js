function incrementer(nums) {
    // code goes here
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i]+i+1;
        if (nums[i]>=10) nums[i] = nums[i]%10;
    }
    return nums;
}

console.log((incrementer([3, 6, 9, 8, 9])));