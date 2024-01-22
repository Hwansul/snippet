from collections import Counter

def is_perm(items0, items1):
  return len(items0) == len(items1) and Counter(items0) == Counter(items1)

is_perm([1, 2, 3], [4, 1, 6]) # False
is_perm([1, 2], [2, 1]) # True

is_perm("dad", "add") # True
is_perm("snack", "track") # False
