const map1 = new Map();
map1.set('baz', 'bar');

console.log(map1.has('bar'));
// Expected output: true

console.log(map1.has('baz'));
// Expected output: false