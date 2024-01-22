const dayName = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: 'long' });

dayName(new Date()); // 'Saturday'
dayName(new Date('09/23/2020'), 'de-DE'); // 'Samstag'
