from datetime import datetime

def is_weekday(d = datetime.today()):
  return d.weekday() <= 4

from datetime import date

is_weekday(date(2020, 10, 25)) # False
is_weekday(date(2020, 10, 28)) # True
