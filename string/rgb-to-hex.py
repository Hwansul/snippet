def rgb_to_hex(r, g, b):
  return ('{:02X}' * 3).format(r, g, b)

rgb_to_hex(255, 165, 1) # 'FFA501'
