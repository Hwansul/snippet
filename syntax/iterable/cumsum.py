from itertools import accumulate

def cumsum(lst):
  return list(accumulate(lst))

cumsum(range(0, 15, 3)) # [0, 3, 9, 18, 30]
