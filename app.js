var app=angular.module('MainApp',[ ]);
app.controller('MainController',function(){
	this.title="Arthur Costa's public";
	this.area=1;
	this.overallprogress=1;
  this.langChoice=0;
  this.changeArea=function(Carea){
		this.area=Carea;
		this.title=titles[this.area-1];
	};
	this.isArea=function(Carea){
		return this.area===Carea;
	};
	this.Xps=xps;
	this.plorder='name';
	this.planguages=ProgLangs;
	this.certificates=certifArray;
});

app.directive('aboutme',function(){
	return{
		templateUrl:'AboutMe.html'
	};
});
app.directive('certif',function(){
	return{
		templateUrl:'certificates.html'
	};
});
app.directive('plang',function(){
	return{
		templateUrl:'ProgLang.html'
	};
});
app.directive('dlang',function(){
	return{
		templateUrl:'LangDetails.html'
	};
});

app.directive('clang',function(){
	return{
		templateUrl:'Languages.html'
	};
});
app.directive('exp',function(){
	return{
		templateUrl:'experience.html'
	};
});
ProgLangs=[
	{
		name:"C++",
		thumb:"pictures/langs/thumb_Cpp.png",
		progress:95,
		relevance:85,
    desc:"C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.",
		experiences:["ICPC Coding","Algorithms tutorials in C++, in the Llamas in pajamas GitHub team"]
	},
	{
		name:"Java",
		thumb:"pictures/langs/thumb_java.png",
		progress:90,
		relevance:82,
    desc:"Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
		experiences:["ICPC Coding","Taught Classes of Algorithms in Java to a Class of 60 Computer Science students as Teacher assistant in the first semester of 2016.","Algorithms tutorials in Java, in the Llamas in pajamas GitHub team"]
	},
	{
		name:"C",
		thumb:"pictures/langs/thumb_C.jpeg",
		progress:88,
		relevance:55,
    desc:"C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations.",
		experiences:["ICPC Coding","Taught Classes of Algorithms in C to a Class of 60 computer engineering students as Teacher assistant in the second semester of 2016.","Algorithms tutorials in C, in the Llamas in pajamas GitHub team"]
	},
	{
		name:"Javascript",
		thumb:"pictures/langs/thumb_js.png",
		progress:70,
		relevance:80,
    desc:"JavaScript is a high-level, dynamic, untyped, and interpreted programming language designed for front-end web applications.",
		experiences:["This website","Collaborations on Codepit.io","Coded the Radix Sort in parkjs814's AlgorithmVisualizer","Sorting Algorithm Tester","Llamas in pajamas Algorithms Page"]
	},
	{
		name:"Html 5",
		thumb:"pictures/langs/thumb_html.png",
		progress:68,
		relevance:60,
    desc:"HTML is a markup language used for structuring and presenting content on the World Wide Web.",
		experiences:["This website","Collaborations on Codepit.io","Sorting Algorithm Tester","Llamas in pajamas Algorithms Page"]
	},
	{
		name:"CSS 3",
		thumb:"pictures/langs/thumb_css.jpeg",
		progress:65,
		relevance:30,
    desc:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
		experiences:["This website","Sorting Algorithm Tester","Llamas in pajamas Algorithms Page"]
	},
	{
		name:"Angular 1.X",
		thumb:"pictures/langs/thumb_ang.png",
		progress:50,
		relevance:50,
    desc:"AngularJS is a complete JavaScript-based open-source front-end web application framework.",
		experiences:["Collaborations on Codepit.io","This little public(Yeah it was a fun playground)","A Redirection Script made to point to newest version of the page"]
	},
	{
		name:"Python 2.7",
		thumb:"pictures/langs/thumb_py.jpeg",
		progress:40,
		relevance:60,
    desc:"Python is a widely used high-level, general-purpose, interpreted, dynamic programming language.",
		experiences:["Competitive Programming on a few Codeforces","Algorithms tutorials in python, in the Llamas in pajamas GitHub team"]
	},
	{
		name:"Node js",
		thumb:"pictures/langs/thumb_node.png",
		progress:20,
		relevance:65,
		desc:"Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications.",
		experiences:["Basic local server setup."]
	},
	{
		name:"Oracle SQL",
		thumb:"pictures/langs/thumb_osql.jpeg",
		progress:20,
		relevance:20,
		desc:"It is an object-relational database management system produced and marketed by Oracle Corporation.",
		experiences:["Projects done on the data management subject."]
	},
	{
		name:"Mongo DB",
		thumb:"pictures/langs/thumb_mongo.jpeg",
		progress:0,
		relevance:45
	},

];
titles=["Arthur Costa's profile","Skills","Achievements","Experience"];
certifArray=[
	[
	{
		name:"FCE",
		thumb:"pictures/thumb_FCE.png",
		link:"certificates/FCE.pdf"
	},
	{
		name:"TOEFL",
		thumb:"pictures/thumb_Toefl.gif",
		link:"certificates/Toefl.pdf"
	},
	{
		name:"MCB80.1X",
		thumb:"pictures/thumb_mcb801.png",
		link:"certificates/HarvardX.pdf"
	},
	{
		name:"Algorithms assistant",
		thumb:"pictures/thumb_ufpe.jpeg",
		link:"certificates/GMOn.pdf"
	}
	],
	[
	{
		name:"University Records",
		thumb:"pictures/thumb_ufpe.jpeg",
		link:"certificates/UFPE.pdf"
	},
	{
		name:"GitHub profile",
		thumb:"pictures/thumb_github.png",
		link:"https://github.com/Arthurlpgc"
	},
	{
		name:"Codeforces",
		thumb:"pictures/thumb_CF.png",
		link:"http://codeforces.com/profile/alpgc"
	},
	{
		name:"ACM - ICPC 2016",
		thumb:"pictures/thumb_icpc.png",
		link:"certificates/UFPE.pdf"
	}
	]
];
xps=[
	{
		name:"Teaching Assistant, Algorithms 2016",
		description:"Provided Additional Lectures to over 50 students (on each semester, total of 2) about several topics, as Graph Searching algorithms, Balanced Binary Search trees, Sorting algorithms"
	},
	{
		name:"",
		description:""
	}
];
