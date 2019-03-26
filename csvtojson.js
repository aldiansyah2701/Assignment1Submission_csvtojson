var csvjson = require('csvjson');
var fs = require('fs');
var options = {
    delimiter : ','
};
var file_data = fs.readFileSync('customer-data.csv', { encoding : 'utf8'});
var result = csvjson.toObject(file_data, options);
fs.writeFile ("resultjson.json", JSON.stringify(result), function(err) {
    if (err) throw err;
    console.log('complete');
    });
console.log(result);