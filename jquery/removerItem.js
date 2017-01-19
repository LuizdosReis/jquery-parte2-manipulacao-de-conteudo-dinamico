$(".remove-item").click(function(event){
	event.preventDefault();
	$(this).closest("tr").hide();
	calculaTotal();
});

$("#undo").click(function(){
	$("tr:visible").removeClass("recuperado");
	$("tr:hidden").show().addClass("recuperado");
	calculaTotal();
});

