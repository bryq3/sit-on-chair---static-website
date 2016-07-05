$(document).ready(function(){
//form
	var select= $("select");
	var model= select.eq(0);
	var color= select.eq(1);
	var fabric= select.eq(2);
	
	var modelDiv= $("#yourChair").find("#model");
	var colorDiv= $("#yourChair").find("#color");
	var fabricDiv=$("#yourChair").find("#fabric");
	var transField= $("#transfield");
	var colorPriceDiv= $("#colorPrice");
	var fabricPriceDiv= $("#fabricPrice");
	
	
	model.on("click", function(){
		var modelValue= model.val();
		modelDiv.text(modelValue);
	});
	color.on("click", function(){
		var colorValue= color.val();
		colorDiv.text(colorValue);
		colorPriceDiv.text(0);
	});
	fabric.on("click", function(){
		var fabricValue=fabric.val();
		fabricDiv.text(fabricValue);
		var fabricPrice= $("option:selected", this).attr("data");
		fabricPriceDiv.text(fabricPrice);
		
	});
	var transBox= $("#transBox");
	console.log(transBox);
	transBox.on("click", function(){
		if($(this).is(":checked")){
			console.log("transport");
		}
	});
	
});