def byte_size(s):
  return len(s.encode('utf-8'))

byte_size('😀') # 4
byte_size('Hello World') # 11
