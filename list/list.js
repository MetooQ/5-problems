function list(arr1,arr2){
	var len  = arr1.length + arr2.length;
	var arr3 = [];
	
	
	var i = 0,j = 0,k = 0;
	while(i<len){
		if(j<arr1.length){
			arr3[i] = arr1[j];
			i++;
			j++;
		}
		if(k<arr2.length){
			arr3[i] = arr2[k];
			i++;
			k++;
		}
	}
	
	return arr3;
	
}


var arr1 = [0,1,2];
var arr2 = ['a','b','c','d','e'];

var arr3 = list(arr1, arr2);
console.log(arr3);