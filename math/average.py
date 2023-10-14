def average(*args):
  return sum(args, 0.0) / len(args)

average(*[1, 2, 3]) # 2.0
average(1, 2, 3) # 2.0
