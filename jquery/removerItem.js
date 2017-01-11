$(".remove-item").click(function(event){
	event.preventDefault();
	$(this).closest("tr").remove();
	calculaTotal();
});