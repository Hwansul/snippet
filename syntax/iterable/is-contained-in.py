def is_contained_in(a, b):
  for v in set(a):
    if a.count(v) > b.count(v):
      return False
  return True

is_contained_in([1, 4], [2, 4, 1]) # True
