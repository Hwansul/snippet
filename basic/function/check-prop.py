def check_prop(fn, prop):
  return lambda obj: fn(obj[prop])

check_age = check_prop(lambda x: x >= 18, 'age')
user = {'name': 'Mark', 'age': 18}
check_age(user) # True
