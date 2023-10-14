def some(lst, fn = lambda x: x):
  return any(map(fn, lst))

some([0, 1, 2, 0], lambda x: x >= 2 ) # True
some([0, 0, 1, 0]) # True
