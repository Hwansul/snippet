def initialize_2d_list(w, h, val = None):
  return [[val for x in range(w)] for y in range(h)]

initialize_2d_list(2, 2, 0) # [[0, 0], [0, 0]]
