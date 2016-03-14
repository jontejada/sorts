function quickSort(a, low, high){

	if(high > low){
		var index = getRandomInt(low,high);
		//console.log(low,high,index);
		var pivot  = a[index];
		//console.log("pivot",pivot);
		a = partition(a,pivot);
		//console.log(a);
		quickSort(a,low,index-1);
		quickSort(a,index+1,high);
	}

	console.log(a);
	return a;
}

function  partition (a,pivot) {
	
	var i = 0;
	for( var j=0; j < a.length; j++ ){
		if( a[j]!= pivot && a[j] < pivot ){
			var temp = a[i];
			a[i] = a[j];
			a[j] = temp;
			i++;
		}
	}
	return a;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var arr = [1,3,455,45,32,23,345,43,2,23,234,34];
quickSort(arr,0,arr.length);