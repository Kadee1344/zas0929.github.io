$(document).ready(function(){
	$("form").find("[name=test]").change(function(){
		$.ajax({
			url:"/todo?test="+$(this).val()+"&test2=foo",
			async:true
		}).done(function(data){
			alert(data)
		})
	})
	$("form").submit(function(event){
		event.preventDefault();
	})
})