const nor = (a, b) => !(a||b);

nor(true, true); // false
nor(true, false); // false
nor(false, false); // true
