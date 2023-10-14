from datetime import datetime

def is_weekend(d = datetime.today()):
  return d.weekday() > 4

from datetime import date

is_weekend(date(2020, 10, 25)) # True
is_weekend(date(2020, 10, 28)) # False
