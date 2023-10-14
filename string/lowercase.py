'Hello'.lower()               # 'hello'
'Straße'.lower()              # 'straße'
'Straße'.upper().lower()      # 'strasse'
# Example of incorrect result when used for unicode case-insensitive matching
'Straße'.upper().lower() == 'Straße'.lower() # False ('strasse' != 'straße')

'Hello'.casefold()            # 'hello'
'Straße'.casefold()           # 'strasse'
'Straße'.upper().casefold()   # 'strasse'
# Returns the correct result when used for unicode case-insensitive matching
'Straße'.upper().casefold() == 'Straße'.casefold() # True
