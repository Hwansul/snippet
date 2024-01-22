a = 11
b = 7

temp = a
a = b
b = temp

print(a) # 7
print(b) # 11

a = 11
b = 7

a, b = b, a

print(a) # 7
print(b) # 11

a = 11
b = 7

a = a + b # a = 18, b = 7
b = a - b # a = 18, b = 11
a = a - b # a = 7,  b = 11

print(a) # 7
print(b) # 11
