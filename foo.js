compiledTemplate = Hogan.compile(template);
contextMaleData1 = {
	messages:1,
	gender:'male',
	username:'kdrdgn'
};
contextMaleData2 = {
	messages:4,
	gender:'male',
	username:'kdrdgn'
};
contextFemaleData1 = {
	messages:1,
	gender:'female',
	username:'okaliptus'
};
contextFemaleData2 = {
	messages:5,
	gender:'female',
	username:'okaliptus'
};

$('selector1').html(compiledPopupTemplate.render(contextMaleData1));
$('selector2').html(compiledPopupTemplate.render(contextMaleData2));
$('selector3').html(compiledPopupTemplate.render(contextFemaleData1));
$('selector4').html(compiledPopupTemplate.render(contextFemaleData2));
