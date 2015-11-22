function Pixel(x,y){
	x = x || 0;
	y = y || 0;
	this.prevX=x-1;
	this.prevY=y;
	this.x=x;
	this.y=y;
	this.left=false;
	this.right=false;
	this.top=true;
	this.bottom=false;

	this.startX=x;
	this.startY=y;
	this.prevBlackX=x;
	this.prevBlackY=y;
	this.rgb=[Math.floor(Math.random()*254),Math.floor(Math.random()*254),Math.floor(Math.random()*254)];
	this.end=false;
	this.white=0;
	this.arr;
//массив отмеченных пикселей объекта;двумерный;
//	this.arr = [];
}

Pixel.prototype.direction = function(){
var that=this;
	if(that.top){
		that.prevX=that.x;
		that.prevY=that.y;
		that.y--;
		that.top=false;
	}	
		else
			if(that.right){
				that.prevX=that.x;
				that.prevY=that.y;
				that.x++;
				that.right=false;
			}
				else
					if(that.bottom){
						that.prevX=that.x;
						that.prevY=that.y;
						that.y++;
						that.bottom=false;
					}	
						else
							if(that.left){
								that.prevX=that.x;
								that.prevY=that.y;
								that.x--;
								that.left=false;
							}	
		that.nextIteration(arrayPixel);								
}

Pixel.prototype.leftDir = function(){
var that=this;

arrayPixel[that.y][that.x]=that.rgb[0];

	if((that.prevY==that.y)&&(that.prevX<that.x)){

		that.top=true;
	}

	if((that.prevX==that.x)&&(that.prevY>that.y)){

		that.left=true;
	}

	if((that.prevY==that.y)&&(that.prevX>that.x)){

		that.bottom=true;
	}

	if((that.prevX==that.x)&&(that.prevY<that.y)){

		that.right=true;
	}
//that.white=0;

}

Pixel.prototype.rightDir = function(){
var that=this;
	if((that.prevX==that.x)&&(that.prevY>that.y)){

		that.right=true;
	}
	
	if((that.prevY==that.y)&&(that.prevX<that.x)){

		that.bottom=true;
	}

	if((that.prevX==that.x)&&(that.prevY<that.y)){
	
		that.left=true;
	}

	if((that.prevY==that.y)&&(that.prevX>that.x)){
	
		that.top=true;
	}

//that.white++;
that.direction();


}

Pixel.prototype.prevBlack = function() {
	if((this.startY==this.y)&&(this.startX==this.x)){
		this.end=true;
	}
	else
	this.direction();
}

Pixel.prototype.nextIteration = function(array){
array = array || false;
var that=this;
//console.log(" y: "+that.y+" x: "+that.x+" "+array[that.y][that.x]+" "+this.white);
if(array.length>0)
	if(array[that.y][that.x]==255){
	//	this.white++;
	/*	if(this.white==2){
			//if(array[that.y+1][that.x]<255){
				
				
				that.leftDir();
				
			//}
		}
			else{*/
				that.rightDir();
			//}
		
	}
		else 
			if(array[that.y][that.x]<255){
	//			this.white=0;
				that.leftDir();
				that.prevBlack();
			}

}





Pixel.prototype.dir = function(array){
var that=this;

	for(that.y=0;that.y<20;that.y++){
		for(that.x=0;that.x<20;that.x++){
		
			//console.log(array[that.x][that.y]);

		if(array[that.x][that.y]<255){
			console.log("x : "+that.x+" y : "+that.y);
			break;
		}
	}

	//можно убрать второе?x=2 всегда при окончании цикла
	if((that.x != 20)&&(that.y != 20)){
		if(array[that.x][that.y]<255)
			console.log("!x : "+that.x+" y : "+that.y);
		console.log(array[that.x][that.y]);
		setPixel(0,that.x,that.y);
			break;
		}
	}
}


