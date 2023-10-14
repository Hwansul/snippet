def min_n(lst, n = 1):
  return sorted(lst, reverse = False)[:n]

min_n([1, 2, 3]) # [1]
min_n([1, 2, 3], 2) # [1, 2]
