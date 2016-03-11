var sorts = {};
sorts.bubbleSort = function (arr){
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if(arr[j+1] < arr[j]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
};

var arr1 = [1,4,6,2,0,45,255];
console.log(sorts.bubbleSort(arr1));



function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var minAt = i;
		for (var j = i; j < arr.length; j++) {
			if (arr[j] < arr[minAt]) {
				minAt = j;
			}
		}
		var temp = arr[i];
		arr[i] = arr[minAt];
		arr[minAt] = temp;
	}
	return arr;
} 

// console.log(selectionSort(arr1));



module.exports = sorts;
