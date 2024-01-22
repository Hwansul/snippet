from datetime import timedelta, date

def days_from_now(n):
  return date.today() + timedelta(n)

days_from_now(5) # date(2020, 11, 02)
