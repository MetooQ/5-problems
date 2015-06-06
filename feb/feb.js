function feb(a,b){
	
	var sum = a + b + a+b;
	var arr = [a,b,a+b];
	for(var i = 3; i<100; i++){
		arr[i%3] = arr[(i+1)%3] + arr[(i+2)%3];
		sum = sum + arr[i%3];
	}
	
	return sum;
}


var result = feb(0,1);
console.log(result);