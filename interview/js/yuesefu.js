function yuesefu(n, m) {
    if( n === 1) return 0;
    const val = (yuesefu(n-1, m) + m) % n;
    console.log(n, val);
    return val;
}

console.log(yuesefu(13, 13)); // 3