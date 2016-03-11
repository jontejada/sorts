var sorts = {},
	arr1 = [5,6,3,2,1,4,0],
	arr2 = [1,4,6,2,0,45,255];

//BUBBLE SORT
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
// console.log(sorts.bubbleSort(arr1));

//SELECTION SORT
sorts.selectionSort = function(arr) {
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
};
// console.log(sorts.selectionSort(arr1));

//INSERTION SORT
sorts.insertionSort = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var right = i + 1;
		var left = i;
		while (arr[right] < arr[left] && left >= 0) {
			var temp = arr[right];
			arr[right] = arr[left];
			arr[left] = temp;
			left --;
			right--;
		}
	}
	return arr;
};
// console.log(sorts.insertionSort(arr1));

//QUICK SORT
// sorts.quickSort = function(arr) {
function quickSort(arr,l,h) {
	return arr;
}
// console.log(sorts.quickSort(arr1));
// console.log(quickSort(arr1));

//MERGE SORT
sorts.mergeSort = function(arr) {

	return arr;
};
// console.log(sorts.mergeSort(arr1));

module.exports = sorts;