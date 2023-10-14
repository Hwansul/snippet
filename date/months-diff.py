from math import ceil

def months_diff(start, end):
  return ceil((end - start).days / 30)

from datetime import date

months_diff(date(2020, 10, 28), date(2020, 11, 25)) # 1
