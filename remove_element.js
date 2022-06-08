/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    nums.sort((a,b)=> a-b);
    let min=0,max  =nums.length-1;
    
        while (min<=max){
        mid = Math.floor((min+max)/2);
        if(nums[mid]==val){
         nums.splice(mid,1); max=max-1;
            //console.log(nums,mid)
        }
        else if(nums[mid]<=val) min = min+1;
        else max=max-1;
    }
    return nums.length;
    
};
        
    
    
    
     
    
    
