const fs = require('fs');

function testWithHash(nums, target) {
    let hashTable = {};
    let pairs = [];

    for (let i = 0; i < nums.length; i++) {
        let value = parseInt(nums[i])
        let complement = target - value;

        if (hashTable[complement]) {
            pairs.push([value, complement]);
        }

        hashTable[value] = true;
    }

    return pairs;
}

fs.readFile('./source.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const [ nums, target ] = data.split('\n');
    const pairs = testWithHash(nums.split(','), target);
    
    console.log(pairs)
});
