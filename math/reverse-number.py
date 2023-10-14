from math import copysign

def reverse_number(n):
  return copysign(float(str(n)[::-1].replace('-', '')), n)

reverse_number(981) # 189
reverse_number(-500) # -5
reverse_number(73.6) # 6.37
reverse_number(-5.23) # -32.5
