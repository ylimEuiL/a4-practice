$(document).ready(function() {
	$("#JS").hide();
	$("#solaire").hide();
	$("h1").click(function() {
		$(this).next().fadeToggle(1000);
	})
});
