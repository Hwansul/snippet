friends =  [
  {"name": "John", "surname": "Doe", "age": 26},
  {"name": "Jane", "surname": "Doe", "age": 28},
  {"name": "Adam", "surname": "Smith", "age": 30},
  {"name": "Michael", "surname": "Jones", "age": 28}
]

print(
  sorted(
    friends,
    key=lambda friend:
    (friend["age"], friend["surname"], friend["name"])
  )
)
# PRINTS:
# [
#   {'name': 'John', 'surname': 'Doe', 'age': 26},
#   {'name': 'Jane', 'surname': 'Doe', 'age': 28},
#   {'name': 'Michael', 'surname': 'Jones', 'age': 28},
#   {'name': 'Adam', 'surname': 'Smith', 'age': 30}
# ]
