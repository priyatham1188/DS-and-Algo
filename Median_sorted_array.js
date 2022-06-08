/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newarr=[...nums1,...nums2].sort((a,b)=> a-b);
    if(newarr.length%2==0){
        let mid = newarr.length/2;
        return (newarr[mid-1]+newarr[mid])/2
    }else
        {
            let mid = Math.floor(newarr.length/2);
            return newarr[mid]
        }
        
    
    
};
