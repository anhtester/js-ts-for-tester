// Nhóm falsy: đặt vào if thì bị coi là false
console.log('false     ->', Boolean(false));
console.log('0         ->', Boolean(0));
console.log("''        ->", Boolean(''));
console.log('null      ->', Boolean(null));
console.log('undefined ->', Boolean(undefined));
console.log('NaN       ->', Boolean(NaN));

// Trông giống "rỗng" hoặc "sai" nhưng lại là truthy
console.log("'0'       ->", Boolean('0'));
console.log("'false'   ->", Boolean('false'));
console.log("' '       ->", Boolean(' '));
console.log('-1        ->', Boolean(-1));
