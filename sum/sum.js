function Ffor(arr){
	var sum = 0;
	for(var i = 0; i<arr.length; i++){
		sum = sum + arr[i];
	}
	return sum;
}

function Fwhile(arr){
	var sum = 0;
	var i = 0;
	while(i<arr.length){
		sum = sum + arr[i];
		i++;		
	}	
	return sum;
}

function Frecursion(arr,n){
	if(n>0){
		return arr[n-1] + Frecursion(arr,n-1);
	}else{
		return 0;
	}
}




var arr = [0,1,2,3,4];

var sum1 = Ffor(arr);
var sum2 = Fwhile(arr);
var sum3 = Frecursion(arr,arr.length);
console.log(sum1);
console.log(sum2);
console.log(sum3);

