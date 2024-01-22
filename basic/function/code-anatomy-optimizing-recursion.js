const fibonacciNumber = n =>
  n < 2 ? fibonacciNumber(n - 1) + fibonacciNumber(n - 2) : n;

const fibonacciNumber = n => {
  console.log(`[CALLED] fibonacciNumber(${n})`);
  const r = n >= 2 ? fibonacciNumber(n - 1) + fibonacciNumber(n - 2) : n;
  console.log(`[RETURN] ${r} for n=${n}`);
  return r;
}

fibonacciNumber(4);
// [CALLED] fibonacciNumber(4)
// [CALLED] fibonacciNumber(3)
// [CALLED] fibonacciNumber(2)
// [CALLED] fibonacciNumber(1)
// [RETURN] 1 for n=1
// [CALLED] fibonacciNumber(0)
// [RETURN] 0 for n=0
// [RETURN] 1 for n=2
// [CALLED] fibonacciNumber(1)
// [RETURN] 1 for n=1
// [RETURN] 2 for n=3
// [CALLED] fibonacciNumber(2)
// [CALLED] fibonacciNumber(1)
// [RETURN] 1 for n=1
// [CALLED] fibonacciNumber(0)
// [RETURN] 0 for n=0
// [RETURN] 1 for n=2
// [RETURN] 3 for n=4

const fibonacciCache = new Map();

const fibonacciNumber = n => {
  console.log(`[CALL] fibonacciNumber(${n})`);
  const cacheKey = `${n}`;
  let r;
  if(fibonacciCache.has(cacheKey)) {
    r = fibonacciCache.get(cacheKey);
    console.log(`[MEMO] Cache hit for ${n}: ${r}`);
  }
  else {
    r = n >= 2 ? fibonacciNumber(n - 1) + fibonacciNumber(n - 2) : n;
    fibonacciCache.set(cacheKey, r);
    console.log(`[CALC] Computed and stored value for ${n}: ${r}`);
  }
  return r;
}

fibonacciNumber(4);
// [CALL] fibonacciNumber(4)
// [CALL] fibonacciNumber(3)
// [CALL] fibonacciNumber(2)
// [CALL] fibonacciNumber(1)
// [CALC] Computed and stored value for 1: 1
// [CALL] fibonacciNumber(0)
// [CALC] Computed and stored value for 0: 0
// [CALC] Computed and stored value for 2: 1
// [CALL] fibonacciNumber(1)
// [MEMO] Cache hit for 1: 1
// [CALC] Computed and stored value for 3: 2
// [CALL] fibonacciNumber(2)
// [MEMO] Cache hit for 2: 1
// [CALC] Computed and stored value for 4: 3

const fibonacciNumber = n => {
  let r = 0, l = 1, s = 0;
  for(let i = 0; i < n; i++) {
    r = l;
    l = s;
    s = r + l;
    console.log(`[CALC] i = ${i}: r = ${r}, l = ${l}, s = ${s}`);
  }
  return s;
}

fibonacciNumber(4);
// [CALC] i = 0: r = 1, l = 0, s = 1
// [CALC] i = 1: r = 0, l = 1, s = 1
// [CALC] i = 2: r = 1, l = 1, s = 2
// [CALC] i = 3: r = 1, l = 2, s = 3
