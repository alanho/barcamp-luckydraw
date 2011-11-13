/* Author: 

*/



$("#draw_trigger").click(function(e){
	var pos = Math.floor(Math.random()*all.length);
	var r = all[pos];
	
	// just sort it randomly...
	all.sort(function(){
		return (Math.round(Math.random())-0.5);
	});
	
	$("#result").css("color", "#888");
	$("#draw_trigger").text("LOADING...");
	$("#result").prop("_v", 0);
	$("#result").animate({ _v: 200},
		{ duration: 2000, easing: "easeOutExpo", step: function(val) {
			var idx = Math.floor(val);
			$("#result").html(all[idx].name + " ("+all[idx].email+")");
		  },	complete: function(){
				$("#result").css("color", "#fff");
				$("#draw_trigger").text("It's you!!");
			  }
		}
	);
	
	e.preventDefault();
});












