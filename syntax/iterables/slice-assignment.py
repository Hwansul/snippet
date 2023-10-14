[start_at:stop_before:step]

nums = [1, 2, 3, 4, 5]

nums[:1] = [6]        # [6, 2, 3, 4, 5]   (replace elements 0 through 1)
nums[1:3] = [7, 8]    # [6, 7, 8, 4, 5]   (replace elements 1 through 3)
nums[-2:] = [9, 0]    # [6, 7, 8, 9, 0]   (replace the last 2 elements)

nums = [1, 2, 3, 4, 5]

nums[1:4] = [6, 7]    # [1, 6, 7, 5]        (replace 3 elements with 2)
nums[-1:] = [8, 9, 0] # [1, 6, 7, 8, 9, 0]  (replace 1 element with 3)
nums[:1] = []         # [6, 7, 8, 9, 0]     (replace 1 element with 0)

nums = [1, 2, 3, 4, 5]

nums[2:2] = [6, 7]    # [1, 2, 6, 7, 3, 4, 5]   (insert 2 elements)
nums[7:] = [8, 9]     # [1, 2, 6, 7, 3, 4, 5, 8, 9] (append 2 elements)
nums[:0] = [0]        # [0, 1, 2, 6, 7, 3, 4, 5, 8, 9] (prepend 1 element)
nums[:] = [ 4, 2]     # [4, 2]         (replace whole list with a new one)

nums = [1, 2, 3, 4, 5]

nums[2:5:2] = [6, 7]  # [1, 2, 6, 4, 7] (replace every 2nd element, 2 through 5)
nums[2:5:2] = [6, 7, 8] # Throws a ValueError (can't replace 2 elements with 3)
nums[1::-1] = [9, 0]  # [0, 9, 6, 4, 7] (reverse replace, 1 through start)
