while True:
  try:
    s = input('Input a number:')
    x = int(s)
  except:
    print('Not a number, try again!')

while True:
  try:
    s = input('Input a number:')
    x = int(s)
  except Exception:
    print('Not a number, try again!')

while True:
  try:
    s = input('Input a number:')
    x = int(s)
  except ValueError:
    print('Not a number, try again!')
