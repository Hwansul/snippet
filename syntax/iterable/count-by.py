from collections import defaultdict

def count_by(lst, fn = lambda x: x):
  count = defaultdict(int)
  for val in map(fn, lst):
    count[val] += 1
  return dict(count)

from math import floor

count_by([6.1, 4.2, 6.3], floor) # {6: 2, 4: 1}
count_by(['one', 'two', 'three'], len) # {3: 2, 5: 1}
