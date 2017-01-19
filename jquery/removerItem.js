$(".remove-item").click(function(event){
	event.preventDefault();
	$(this).closest("tr").hide();
	calculaTotal();
});

$(".undo").click(function(){
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass("recuperado");
	carrinho.find("tr:hidden").show().addClass("recuperado");
	calculaTotal();
});

