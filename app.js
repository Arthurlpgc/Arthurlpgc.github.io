var app=angular.module('MainApp',[ ]);
app.controller('MainController',function(){
	this.area=2
	this.changeArea=function(Carea){
		this.area=Carea;
	};

	this.isArea=function(Carea){
		return this.area===Carea;
	};
});

app.directive('navbar',function(){
	return{
		templateUrl:'navbar.html'
	};
});
app.directive('mailpage',function(){
	return{
		templateUrl:'mail.html'
	};
});
app.directive('academic',function(){
	return{
		templateUrl:'academic.html'
	};
});
app.directive('projects',function(){
	return{
		templateUrl:'projects.html'
	};
});
