fs = require('fs');
const book = {
    title : 'The 5am Club',
    author: 'Richard Brandson'
}

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Nduke';
data.age = '22';
const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)
console.log(dataString)

