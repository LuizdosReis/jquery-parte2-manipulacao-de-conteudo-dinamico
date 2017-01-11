$(function(){
	var itens = $(".valor-total-item");
	var total = 0;
	for(var i = 0; i < itens.length; i++) {
		var conteudo = $(itens[i]).text();
		var preco = parseFloat(conteudo);
		total += preco;
	}
	$("#valor-total").text(total);
	$("#quantidade-de-itens-distintos").text(itens.length);
});

