def most_frequent(lst):
  return max(set(lst), key = lst.count)

most_frequent([1, 2, 1, 2, 3, 2, 1, 4, 2]) #2
