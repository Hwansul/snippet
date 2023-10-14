from collections import namedtuple

# Regular tuple
p = (2, 4) # p[0] = 2, p[1] = 4

# Named tuple
Point = namedtuple('Point', 'x y')
q = Point(3, 5) # q.x = 3, q.y = 5

from collections import namedtuple

Point = namedtuple('Point', ['x', 'y', 'z'], defaults = [1]);
a = Point(1, 1, 0); # a.x = 1, a.y = 1, a.z = 0

# Default value used for `z`
b = Point(2, 2); # b.x = 2, b.y = 2, b.z = 1 (default)
