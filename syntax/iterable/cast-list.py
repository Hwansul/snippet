def cast_list(val):
  return list(val) if isinstance(val, (tuple, list, set, dict)) else [val]

cast_list('foo') # ['foo']
cast_list([1]) # [1]
cast_list(('foo', 'bar')) # ['foo', 'bar']
