// Sample code to read in test cases:
var fs  = require("fs");
var n=2;
var arr = [];
var i=0;

var insertSort = function(line){
	var i=0;
	// find position
	for(; i<arr.length; i++){
		if(arr[i].length < line.length){
			break;
		}
	}
	arr.splice(i, 0, line);
}


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if(i==0){
		// if first line
		n = parseInt(line);
	}else{
		// insert & sort
		insertSort(line);
	}
    i++;
});
for(var i=0; i<n; i++){
	console.log(arr[i]);
}
