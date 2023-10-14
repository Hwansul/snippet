def index_of_all(lst, value):
  return [i for i, x in enumerate(lst) if x == value]

index_of_all([1, 2, 1, 4, 5, 1], 1) # [0, 2, 5]
index_of_all([1, 2, 3, 4], 6) # []
