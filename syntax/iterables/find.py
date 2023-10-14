def find(lst, fn):
  return next(x for x in lst if fn(x))

find([1, 2, 3, 4], lambda n: n % 2 == 1) # 1
