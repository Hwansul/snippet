[start_at:stop_before:step]

nums = [1, 2, 3, 4, 5]

nums[1:4]     # [2, 3, 4]   (start at 0, stop before 4)
nums[2:]      # [3, 4, 5]   (start at 0, stop at end of list)
nums[:3]      # [1, 2, 3]   (start at 0, stop before 3)
nums[1:4:2]   # [2, 4]      (start at 1, stop before 4, every 2nd element)
nums[2::2]    # [3, 5]      (start at 2, stop at end of list, every 2nd element)
nums[:3:2]    # [1, 3]      (start at 0, stop before 3, every 2nd element)
nums[::2]     # [1, 3, 5]   (start at 0, stop at end of list, every 2nd element)
nums[::]      # [1, 2, 3, 4, 5] (start at 0, stop at end of list)

nums = [1, 2, 3, 4, 5]

nums[1:-2]    # [2, 3]      (start at 1, stop before 2nd to last)
nums[-3:-1]   # [3, 4]      (start at 3rd to last, stop before last)

nums = [1, 2, 3, 4, 5]

nums[::-1]    # [5, 4, 3, 2, 1]   (reversed)
nums[4:1:-1]  # [5, 4, 3]   (reversed, start at 4, stop after 1)
nums[-1:1:-2] # [5, 3]      (reversed, start at last, stop after 1, every 2nd)

nums = [1, 2, 3, 4, 5]

nums[6:8]     # []
nums[:-10]    # []
