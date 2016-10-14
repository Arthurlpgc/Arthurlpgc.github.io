var square=new Rect(0,0,500,500);
square.addTo(stage);
var squareTouch=new Rect(0,0,500,500);
squareTouch.addTo(stage);
square.fill('#001155');

//graphical variables
var points=[];
var circles=[];
var path;
var curve;
var deltaT=100;//precision
var BN=[[0,1,0]];

//calculating BN
var genBN=function(n){
	if(BN.length>=n)return BN[n-1];
	var aux=genBN(n-1);
	var TBN=[];
	for(var i=0;i<aux.length;i++){
		TBN.push(aux[i]);
	}
	TBN.push(0);
	for(var j=n+1;j>0;j--){
		TBN[j]=TBN[j]+TBN[j-1];
	}
	BN.push(TBN);
	return TBN;
}

//using bernstein formula
var bernMeUp=function(){
	var curvePTS=[points[0],points[1]];
	var n=points.length/2;
	TBN=genBN(n);
	var ts=[1];
	var ats=[1];
	for(var i=0;i<deltaT;i++){
		ts.push(0);
		ats.push(0);
	}
	for(var count=1;count<deltaT+1;count++){
		var t=count/deltaT;
		var ts=[1];
		var ats=[1];
		for(var i=0;i<deltaT;i++){
			ts[i+1]=(ts[i]*t);
			ats[i+1]=(ats[i]*(1-t));
		}
		var Xaux=0;
		var Yaux=0;
		for(var i=0;i<n;i++){
			Xaux=Xaux+TBN[i+1]*points[2*i]*ts[i]*ats[n-i-1];
			Yaux=Yaux+TBN[i+1]*points[2*i+1]*ts[i]*ats[n-i-1];
		}
		curvePTS.push(Xaux);
		curvePTS.push(Yaux);
	}
	curve=new Path(curvePTS);
	curve.stroke('green',1);
	var aux=[square,path,curve,squareTouch];
	for(var i=0;i<circles.length;i++){
		aux.push(circles[i]);
	}
	stage.children(aux);
}

//lines on the screen
var makeLines=function(){
	path=new Path(points);
	path.stroke('yellow',1);
	bernMeUp();
}

//create point and call lines
squareTouch.on('click',function(ev){
	var aux=new Circle(ev.x,ev.y,2);//TODO size of point
	aux.fill('white');
	circles.push(aux);

	//drag event
	var x,y,dx,dy,idx;
	aux.on('multi:pointerdown',function(e){
		x=this.attr('x');
		y=this.attr('y');
		dx=0;dy=0;
		for(var i=0;i<circles.length;i++){
			if(circles[i]===aux){
				idx=i;
			}
		}
	});
	aux.on('multi:drag',function(e){
		this.attr({
			x:x+e.diffX,
			y:y+e.diffY
		});
		dx+=e.diffX;
		dy+=e.diffY;
		points[idx*2]=this.attr('x');
		points[idx*2+1]=this.attr('y');
		deltaT=500;
		makeLines();
	});
	aux.on('multi:pointerup',function(e){
		if(dx*dx+dy*dy<2){
			circles.splice(idx,1);
			points.splice(2*idx,2);
		}
		deltaT=Math.min(2000,20+points.length*5);
		makeLines();
	});

	points.push(ev.x);
	points.push(ev.y);
	deltaT=Math.min(2000,20+points.length*5);
	makeLines();
});
