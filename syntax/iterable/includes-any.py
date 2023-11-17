def includes_any(lst, values):
  for v in values:
    if v in lst:
      return True
  return False

includes_any([1, 2, 3, 4], [2, 9]) # True
includes_any([1, 2, 3, 4], [8, 9]) # False
