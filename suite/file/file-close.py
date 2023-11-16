f = open('filename', 'w')
f.write('Hello world!')
f.close()

f = open('filename', 'w')
try:
  f.write('Hello world!')
finally:
  f.close()

with open('filename', 'w') as f:
  f.write('Hello world!')
