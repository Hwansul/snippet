def append(n, l = []):
  l.append(n)
  return l

append(0) # [0]
append(1) # [0, 1]

def append(n, l = None):
  if l is None:
    l = []
  l.append(n)
  return l

append(0) # [0]
append(1) # [1]
