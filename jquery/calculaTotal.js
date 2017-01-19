$(function(){
	calculaTotal();
});

var calculaTotal = function(){
	var carrinhos = $(".carrinho");
	carrinhos.each(function(){
		var itens = $(this).find(".valor-total-item:visible");
		var total = 0;
		for(var i = 0; i < itens.length; i++) {
			var conteudo = $(itens[i]).text();
			var preco = parseFloat(conteudo);
			total += preco;
		}
		$(this).find(".valor-total").text(total);
		$(this).find(".quantidade-de-itens-distintos").text(itens.length);
	});
};





