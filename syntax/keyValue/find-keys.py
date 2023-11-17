def find_keys(dict, val):
  return list(key for key, value in dict.items() if value == val)

ages = {
  'Peter': 10,
  'Isabel': 11,
  'Anna': 10,
}
find_keys(ages, 10) # [ 'Peter', 'Anna' ]
