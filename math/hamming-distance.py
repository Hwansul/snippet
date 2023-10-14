def hamming_distance(a, b):
  return bin(a ^ b).count('1')

hamming_distance(2, 3) # 1
