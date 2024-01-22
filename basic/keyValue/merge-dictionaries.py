def merge_dictionaries(*dicts):
  res = dict()
  for d in dicts:
    res.update(d)
  return res

ages_one = {
  'Peter': 10,
  'Isabel': 11,
}
ages_two = {
  'Anna': 9
}
merge_dictionaries(ages_one, ages_two)
# { 'Peter': 10, 'Isabel': 11, 'Anna': 9 }
