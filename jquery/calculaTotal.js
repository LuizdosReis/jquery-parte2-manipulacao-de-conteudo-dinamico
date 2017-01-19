var umaPropaganda = function(){
	var propagandas = ["O que acha de comprar uma motocicleta?",
               "O que acha de comprar uma lancha?",
               "O que acha de comprar uma bicicleta?",
               "O que acha de comprar uma carro?"
               ];
    var texto = propagandas[Math.floor(propagandas.length*Math.random())];
    var tr = $("<tr>").addClass("propaganda").append($("<td>"));
    tr.find("td").attr("colspan",6).text(texto);
    return tr;	
};

daDestaque = function(){
	$(this).addClass("hovering");
};

tiraDestaque = function(){
	$(this).removeClass("hovering");
};

alteraPropagandas = function(event){
	event.preventDefault();
	$(".propaganda").fadeToggle();
	$(".alterna-propaganda").toggle();
}

$(function(){
	calculaTotal();
	$(".carrinho").each(function(){
		$(this).find("tr:nth-child(3n),tr:last").each(function(){
			umaPropaganda().insertAfter($(this));
		});
	});
	$(".carrinho tbody tr").hover(daDestaque,tiraDestaque);
	$(".alterna-propaganda").click(alteraPropagandas);
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





