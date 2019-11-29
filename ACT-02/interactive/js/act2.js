$(":text").keyup(function checkWords(word){

		//this var helps makes the if condition accept uppercase
		var search = $(":text").val().toLowerCase();
		var noWhite = {'color': '#000'};
		var addWhite = {'color': 'white'};


		if (search == "black") {
			//you can do whatever you want here
			$("h1").css(addWhite)
			$("body").css({"background":"black"});
			$(this).val("");
			

		} else if (search == "white"){
			$("h1").css(noWhite)
			$("body").css({"background":"white"});
			
			$(this).val("");

		} else if (search == "red"){
			$("h1").css(noWhite)
			$("body").css({"background":"crimson"})
			$(this).val("");

		} else if (search == "orange"){
			$("h1").css(noWhite)
			$("body").css({"background":"orange"})
			$(this).val("");

		} else if (search == "yellow"){
			$("h1").css(noWhite)
			$("body").css({"background":"gold"})
			$(this).val("");

		} else if (search == "green"){
			$("h1").css(addWhite)
			$("body").css({"background":"green"})
			$(this).val("");

		} else if (search == "blue"){
			$("h1").css(addWhite)
			$("body").css({"background":"#0051d6"})
			$(this).val("");

		} else if (search == "purple"){
			$("h1").css(addWhite)
			$("body").css({"background":"purple"})
			$(this).val("");

		} else if (search == "cyan"){
			$("h1").css(addWhite)
			$("body").css({"background":search})
			$(this).val("");

		} else if (search == "refresh"){
			location.reload();

		} else if (search == "new tab"){
			window.open('http://google.com', '_blank')
			$(this).val("");

		} else if (search == "haha"){
			$(this).val("");
			$("#funny").css({"visibility":"visible"});
			$("#funny").draggable();

		} else if (search == "knock knock"){
			$(this).val("");
			$("#knockJoke").css({"visibility":"visible"});
			$("#knockJoke").draggable();

		} else if (search == "load"){
			$(this).val("");
			$("body").css("cursor", "wait");

		} else if (search == "cursor"){
			$(this).val("");
			$("body").css("cursor", "default");

		} else if (search == "hand"){
			$(this).val("");
			$("body").css("cursor", "pointer");
		
		} else if (search == "scroll up"){
			$(this).val("");
			$("html, body").animate({scrollTop: 0}, 500);

		} else if (search == "scroll down"){
			$(this).val("");
			$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });	

		} else if (search == "print"){
			$(this).val("");
			window.print();
		}
		
		
	})