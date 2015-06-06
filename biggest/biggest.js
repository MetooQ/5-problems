function big(arr){
	var sarr = [];
	for(var i = 0; i<arr.length; i++){
		sarr[i] = arr[i] + '';
	}
	
	
	
	var temp = 0;
	
	for(var i = 0;i<sarr.length; i++){
		for(var j = i + 1; j<sarr.length;j++){
			if(!compare(sarr[i],sarr[j])){
				temp = sarr[i];
				sarr[i] = sarr[j];
				sarr[j] = temp;
			}
		}
	}
	
	
	return sarr;
	
}

function compare(a,b){
	if(a == b){
		return true;
	}else if(a.startsWith(b)){
		return compare(a.substr(b.length),b);		
	}else if(b.startsWith(a)){
		return compare(a,b.substr(a.length));
	}else{
		if(a>b){
			return true;
		}else{
			return false;
		};
	}
}


var arr = [91,9];
var result = big(arr);

console.log(result);