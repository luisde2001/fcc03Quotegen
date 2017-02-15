
  $(document).ready(function() {
   
    $("#getQuote").on("click", function(){
    	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
        $(".quote").html(JSON.stringify(json));
      });
	});//Ends on click function
    
  });//Ends ready function
