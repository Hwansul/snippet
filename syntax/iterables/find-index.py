def find_index(lst, fn):
  return next(i for i, x in enumerate(lst) if fn(x))

find_index([1, 2, 3, 4], lambda n: n % 2 == 1) # 0
