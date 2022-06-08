var solution = function(isBadVersion) {
    // console.log(isBadVersion);
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        
        
        // console.log(mid)
        
        let mid = Math.floor(n/2)
        if(!isBadVersion(mid)) {
            for (i=mid+1;i<=n;i++){
                if(isBadVersion(i)) return i
            }
                
        }
        else{
            console.log('Im')
            for (i=1;i<=mid;i++){
                if(isBadVersion(i)) return i
            }
            
            
        }
        
        
        
        
        
        
    };
};
