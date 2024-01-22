from datetime import datetime, timedelta

def add_days(n, d = datetime.today()):
  return d + timedelta(n)

from datetime import date

add_days(5, date(2020, 10, 25)) # date(2020, 10, 30)
add_days(-5, date(2020, 10, 25)) # date(2020, 10, 20)
