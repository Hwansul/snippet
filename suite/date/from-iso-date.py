from datetime import datetime

def from_iso_date(d):
  return datetime.fromisoformat(d)

from_iso_date('2020-10-28T12:30:59.000000') # 2020-10-28 12:30:59
