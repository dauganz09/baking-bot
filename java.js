const settings = {
	"async": true,
	"crossDomain": true,
	"url": "http://api.brainshop.ai/get?bid=172193&key=MiYKQE4QIOMF46oj&uid=[uid]&msg=[msg]=Hello!",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "MiYKQE4QIOMF46oj",
		"X-RapidAPI-Host": "acobot-brainshop-ai-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});