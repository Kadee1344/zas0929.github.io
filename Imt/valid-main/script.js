'use strict';
$(document).ready(function(){
	_("#auth").init({

		configure:{
					"login" : ".checkLog",
					"passwd": "[name=passwd]",
					"tel": ".telephone",
					"email": ".email"
					},
		confLength:{
					"default" : [8, 12],
					"login"  : [3, 8],
			        "passwd": [4, 10]
					// "asdfdsdf": [3,5]
		},
		classes:{"error"  : "errValid",
				 "success": "sucValid"},

		messages:{errEmpty : "Поле не заполненоsdf",
				  errLengthMax: "Длинна поля болsdfsьше максимальной",
				  errLengthMin: "Длинна поля меньsdfше минимальной",
				  errLogin : "Ошибка логиsdfна",
				  errPasswd : "Ошибка паролfsdfя",
				  errEmail : "Ошибка email",
				  errTel : "Ошибка телефона",
				  errText : "Ошибка текста",
				}
	});

})
