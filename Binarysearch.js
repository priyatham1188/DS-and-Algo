/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var mid = Math.floor(nums.length/2);
    let i,j;
    
    console.log(mid)
    if(target<nums[mid]){console.log('im here'); i=0;j=mid-1;}
    else if (target>nums[mid]) { i=mid+1;j=nums.length }
    else if(target===nums[mid]) return mid;
    console.log(i,j)
    while(i<=j){
        console.log(i,j)
        if(nums[i]===target) return i
        i++
    }
    return -1
    
    
        
    
    
    
};
