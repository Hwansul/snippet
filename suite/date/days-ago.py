from datetime import timedelta, date

def days_ago(n):
  return date.today() - timedelta(n)

days_ago(5) # date(2020, 10, 23)
