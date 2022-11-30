const ar=[10, 5, 6, 7, 8, 9, 1, 3, 4, 2];

for(var i=0, tmp;i<mas.length-1;i++){
for(var j=0;j<mas.length-1;j++){
	if(mas[j]<mas[j+1]){
		tmp=mas[j];
		mas[j]=mas[j+1];
		mas[j+1]=tmp;
	}
}
}

alert( mas);

console.log(mas)