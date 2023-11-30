from math import floor

def pad(s, length, char = ' '):
  return s.rjust(floor((len(s) + length)/2), char).ljust(length, char)

pad('cat', 8) # '  cat   '
pad('42', 6, '0') # '004200'
pad('foobar', 3) # 'foobar'
