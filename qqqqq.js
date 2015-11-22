
 







 function getMass(o){

	var arr = [];
	for( i = 0;i<20;i++)
	    arr[i]=[];
	 var pix, data, sum, light,s;
	  ctx.drawImage(images[o], 0, 0);
	for(var i = 0;i<20;i++){
	   
	    for(var j = 0;j<20;j++){

	     pix = ctx.getImageData(j,i, 1, 1);
	     data = pix.data;
	    
	     light = (data[0] + data[1] + data[2] ) /3;
	     arr[i][j]=Math.floor(light);
	    }
	   }
	   pixel.dir(arr);
	   return arr;
	};



function setPixel(o,x,y){

	var arr = [];
	for( i = 0;i<20;i++)
	    arr[i]=[];
	 var pix, data, sum, light,s;
	  ctx.drawImage(images[o], 0, 0);
	for(var i = 0;i<20;i++){
	   
	    for(var j = 0;j<20;j++){

	     pix = ctx.getImageData(j,i, 1, 1);
	     data = pix.data;
	     //light = (data[0] * 0.8 + data[1] + data[2] * 0.2) /2;
	     data[0]=255;
	     data[1]=0;
	     data[2]-0;
	     pix.data=data;

	     //light = (data[0] + data[1] + data[2] ) /3;
	     //arr[i][j]=Math.floor(light);
	    }
	   }
	 
	};










while(thisY<height && thisX<width){
	 	console.log(1);
	 	setTimeout(function(){
	 			arrayPixel = getArrayPixel();
	 	getXandY(thisX,thisY,arrayPixel);
	 	objPixels[countObj] = new Pixel(thisX,thisY);
  		objPixels[countObj].direction();
  		if(objPixels[countObj].end){
  		 setArrayPixel(arrayPixel);
  		//putColorData(buffer);
	  	}
	  	countObj++;
	 	},3000);
	 
	 }
    












function setArrayPixel(array){
	var data, light, arr, pix;
	picLength=width*height;
	arr = ctx.getImageData(0,0, width, height);
		var r,g,b,o;
		r=0,g=1,b=2,o=3;

	for(var i = 0;i<height;i++){
		for(var j = 0;j<width;j++/*,r+= 4,g+= 4,b+= 4,o+= 4*/){
			pix = ctx.getImageData(j,i, 1, 1);
	    	data = pix.data;
			//arr[i]=[array[i][j],array[i][j],array[i][j],255];
			
			data[0]=array[i][j];
	     	data[1]=array[i][j];
	     	data[2]=array[i][j];
	     	data[3]=255;
	     	pix.data=data;
			//arr[r]=array[i][j];
	     	//arr[g]=array[i][j];
	     	//arr[b]=array[i][j];
	     	//arr[o]=255;
	     	
		}
	}
	     	

	  
	   console.log(arr);
	  return arr;
}




function setArrayPixel(array){
	var data, light, arr, pix;
	picLength=width*height;
	arr=[];



		var r,g,b,o;
		r=0,g=1,b=2,o=3;

	for(var i = 0;i<height;i++){
		for(var j = 0;j<width;j++,r+= 4,g+= 4,b+= 4,o+= 4){

			//arr[i]=[array[i][j],array[i][j],array[i][j],255];
			
			arr[r]=array[i][j];
	     	arr[g]=array[i][j];
	     	arr[b]=array[i][j];
	     	arr[o]=255;
	     	
		}
	}
	     	

	  
	   console.log(arr);
	  return arr;
}
















function black(){
	var data, light, arr, pix, picLength;
	picLength=width*height;
	data = ctx.getImageData(0,0,width,height);
	console.log(data);
	pix = data.data;
	
	for(var i = 0,j = 1,n = 2;i<picLength*4;i += 4,j += 4,n += 4){



	    if(pix[i]==255)
	     	pix[i]=0;
	     else
	     	pix[i]=255;
	  	
	  	if(pix[j]==255)
	     	pix[j]=0;
	     else
	     	pix[j]=255;

	     if(pix[n]==255)
	     	pix[n]=0;
	     else
	     	pix[n]=255;
	   }
		
	   data.data=pix;
	   putColorData(data);
	   console.log(pix);
}	


function binary(){
	var data, light, arr, pix, picLength;
	picLength=width*height;
	data = ctx.getImageData(0,0,width,height);
	console.log(data);
	pix = data.data;
	
	for(var i = 0,j = 1,n = 2;i<picLength*4;i += 4,j += 4,n += 4){



	    if(pix[i]<255)
	     	pix[i]=0;
  	
	  	if(pix[j]<255)
	     	pix[j]=0;


	     if(pix[n]<255)
	     	pix[n]=0;

	   }
		
	   data.data=pix;
	   putColorData(data);
	   console.log(pix);
}	
	



