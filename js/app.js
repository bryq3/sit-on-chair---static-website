$(document).ready(function () {
	//form
	var select = $("select");
	var model = select.eq(0);
	var color = select.eq(1);
	var fabric = select.eq(2);

	var modelDiv = $("#yourChair").find("#model");
	var colorDiv = $("#yourChair").find("#color");
	var fabricDiv = $("#yourChair").find("#fabric");
	var transField = $("#transfield");
	var colorPriceDiv = $("#colorPrice");
	var fabricPriceDiv = $("#fabricPrice");


	model.on("click", function () {
		var modelValue = model.val();
		modelDiv.text(modelValue);
	});
	color.on("click", function () {
		var colorValue = color.val();
		colorDiv.text(colorValue);
		colorPriceDiv.text(0);
	});
	fabric.on("click", function () {
		var fabricValue = fabric.val();
		fabricDiv.text(fabricValue);
		var fabricPrice = $("option:selected", this).attr("data");
		fabricPriceDiv.text(fabricPrice);

	});
	//calculation
	var transBox = $("#transBox");
	console.log(transBox);
	transBox.on("click", function () {
		if ($(this).is(":checked")) {
			console.log("transport");
			$("#transPrice").text(80);
		} else {
			$("#transPrice").text(0);
		}
		var colorMoney = $("#colorPrice").text();
		var fabricMoney = $("#fabricPrice").text();
		var transMoney = $("#transPrice").text();
		$("#calc").text(parseInt(colorMoney) + parseInt(fabricMoney) + parseInt(transMoney));
	});
	//green buttons 
	var greenbtns = $(".active");
	greenbtns.on("mouseover", function () {
		$(this).css("background", "white").css("color", "#49a5bf").css("box-shadow", "15px 10px 20px 0 #858585")
	});
	greenbtns.on("mouseout", function () {
		$(this).css("background", "#49a5bf").css("color", "white").css("box-shadow", "none");
	});
	//form validation
	var nameField = $("#imie");
	var emailField = $("#emailAddress");
	var checkbox = $("#checkbox");
	var sendBtn = $("#send");

	sendBtn.on("click", function (e) {
		e.preventDefault();
		if (nameField.val().length < 4) {
			alert("Imię musi składać się z minimum 4 liter")
		} else if (emailField.val().includes("@") == false) {
			alert("Email musi zawierać @");
		} else if (checkbox.is(":checked") == false) {
			alert("musisz zgodzić sie na wykorzystanie danych osobowych")
		}
	});

});