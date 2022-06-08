class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        
      
        
        count_of_nums = {};
        for i in range(len(nums)):
            if ( nums[i] in count_of_nums):
                
                return True
            else: count_of_nums[nums[i]]=1
        print(count_of_nums)
        return False
        

            
        
