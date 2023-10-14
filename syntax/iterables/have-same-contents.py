def have_same_contents(a, b):
  for v in set(a + b):
    if a.count(v) != b.count(v):
      return False
  return True

have_same_contents([1, 2, 4], [2, 4, 1]) # True
