class Solution(object):
    def summaryRanges(self, nums):
        st = ''
        if len(nums) < 1: 
            return nums

        for x in range(len(nums)-1):
            if nums[x]+1 == nums[x+1]:
                if nums[x]-1 != nums[x-1]:
                    st += str(nums[x]) + "->"
            else:
                st += str(nums[x]) + " "
                
        st += str(nums[len(nums)-1])
      
        return st.split(" ")