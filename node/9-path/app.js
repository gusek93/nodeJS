const path = require('path');
const { parse } = require('path/posix');


console.log(__dirname);
console.log(__filename);


console.log(path.sep);
console.log(path.delimiter);


console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));


console.log(path.dirname(__filename));


//pase
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root
parsed.name

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));


//normalize
console.log(path.normalize('./folder//////sub'));

// join
console.log(__dirname + path.sep +'image');
console.log(path.join(__dirname, 'images'));