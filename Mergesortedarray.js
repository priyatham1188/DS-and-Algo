var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n)
    for (i=0;i<n;i++){
        nums1.push(nums2[i])
    }
    nums1.sort((a,b)=> a-b)
};
