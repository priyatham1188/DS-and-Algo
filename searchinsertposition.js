/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let check=0;
    min=0;max=nums.length-1;
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        if(nums[mid]==target) {
            return mid ;
            check++; }
        else if(nums[mid]<target) min=mid+1;
        else max=mid-1;
    }
    if(check==0){
         if (nums[0]>target ) return 0;
    else if(nums[nums.length-1]<target) return nums.length;
    else {
        for(i=0;i<nums.length-1;i++){
            if(nums[i]<target && nums[i+1]>target) return i+1;}
    }
    }
    
};
