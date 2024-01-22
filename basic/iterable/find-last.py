def find_last(lst, fn):
  return next(x for x in lst[::-1] if fn(x))

find_last([1, 2, 3, 4], lambda n: n % 2 == 1) # 3
