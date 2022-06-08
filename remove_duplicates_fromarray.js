/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = (nums) =>{
    let i=1
    for(let j=1;j<nums.length;j++){
        if(nums[j]!==nums[j-1]){
            nums[i++]=nums[j]
        }
        
    }
    return i ;
}
