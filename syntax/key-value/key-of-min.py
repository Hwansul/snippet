def key_of_min(d):
  return min(d, key = d.get)

key_of_min({'a':4, 'b':0, 'c':13}) # b
