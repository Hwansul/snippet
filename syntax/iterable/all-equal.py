def all_equal(lst):
  return len(set(lst)) == 1

all_equal([1, 2, 3, 4, 5, 6]) # False
all_equal([1, 1, 1, 1]) # True
