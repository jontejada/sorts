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
// sorts.quickSort = function(arr,left,right) {
function quickSort(arr,left,right) {
	if (right > left) {
		// console.log(arr);
		var index = left;
		var pivot = arr[index];
		arr = partition(arr, pivot);
		quickSort(arr,left, index - 1);
		quickSort(arr,index + 1, right);
	}
	return arr;
}
console.log(quickSort(arr1,0,arr1.length));
// console.log(quickSort(arr1));

function swap(arr, first, second) {
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}

function partition(arr,pivot) {
	var i = 0;
	for (var j = 0; j < arr.length; j++) {
		if (arr[j]!= pivot && arr[j] < pivot) {
			swap(arr,i,j);
			i++;
		}
	}
	return arr;
}


//MERGE SORT
sorts.mergeSort = function(arr) {

	return arr;
};
// console.log(sorts.mergeSort(arr1));

module.exports = sorts;