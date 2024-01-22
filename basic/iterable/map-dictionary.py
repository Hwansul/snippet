def map_dictionary(itr, fn):
  return dict(zip(itr, map(fn, itr)))

map_dictionary([1, 2, 3], lambda x: x * x) # { 1: 1, 2: 4, 3: 9 }
