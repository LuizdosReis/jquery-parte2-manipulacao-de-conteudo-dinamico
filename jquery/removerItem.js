$(".remove-item").click(function(event){
	event.preventDefault();
	$("#quantidade-de-itens-distintos").text(parseInt($("#quantidade-de-itens-distintos").text()) - 1);
	var totalAtual = parseFloat($("#valor-total").text());
	var totalItem = parseFloat($(this).closest("tr").find(".valor-total-item").text());

	$("#valor-total").text(totalAtual - totalItem);
	$(this).closest("tr").remove();

});