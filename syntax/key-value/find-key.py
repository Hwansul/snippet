def find_key(dict, val):
  return next(key for key, value in dict.items() if value == val)

ages = {
  'Peter': 10,
  'Isabel': 11,
  'Anna': 9,
}
find_key(ages, 11) # 'Isabel'
