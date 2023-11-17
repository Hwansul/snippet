from collections.abc import Iterable

def deep_flatten(lst):
  return ([a for i in lst for a in
          deep_flatten(i)] if isinstance(lst, Iterable) else [lst])

deep_flatten([1, [2], [[3], 4], 5]) # [1, 2, 3, 4, 5]
