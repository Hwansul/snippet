const copySign = (x, y) => Math.sign(x) === Math.sign(y) ? x : -x;

copySign(2, 3); // 2
copySign(2, -3); // -2
copySign(-2, 3); // 2
copySign(-2, -3); // -2
