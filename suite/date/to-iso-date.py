from datetime import datetime

def to_iso_date(d):
  return d.isoformat()

from datetime import datetime

to_iso_date(datetime(2020, 10, 25)) # 2020-10-25T00:00:00
