const compactJoin = (arr, delim = ',') => arr.filter(Boolean).join(delim);

compactJoin(['a', '', 'b', 'c']); // 'a,b,c'
