def days_diff(start, end):
  return (end - start).days

from datetime import date

days_diff(date(2020, 10, 25), date(2020, 10, 28)) # 3
