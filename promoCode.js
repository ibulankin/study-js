<script>

//название используемых промокодов
	var code1 = 'Код 1';
	var code2 = 'Код 2';
	var code3 = 'Код 3';
	var code4 = 'Код 4';

//блокировка нажатия кнопки и замена ее текста
function block(){
	$('#btn').attr("onclick","return false");
	$('#btn').html("Изпользуйте код выше");
}

btn.onclick = function(){

	function randomInteger(min, max) {
	    var rand = min + Math.random() * (max + 1 - min);
	    rand = Math.floor(rand);
	    return rand;
	}

	if (randomInteger(1, 50)<15){
		$('.button').toggleClass('active'); //анимация
			setTimeout(function() {
				$("button[data-id=1]").click(); //открытие модального окна
				block()
				$('#changeText').html('Ваш код:<br/>\n' + code1); //смена текста на полученный код
				document.cookie = 'name=code1; path=/; expires=1'; //запись куки
			}, 3000);
		return false
	}
	else if (randomInteger(1, 75)<30){
		$('.button').toggleClass('active');
			setTimeout(function() {
				$("button[data-id=2]").click();
				block()
				$('#changeText').html('Ваш код:<br/>\n' + code2);
				document.cookie = 'name=code2; path=/; expires=1';
			}, 3000);
		return false
	}
	else if (randomInteger(1, 100)<45){
		$('.button').toggleClass('active');
			setTimeout(function() {
				$("button[data-id=3]").click();
				block()
				$('#changeText').html('Ваш код:<br/>\n' + code3);
				document.cookie = 'name=code3; path=/; expires=1';
			}, 3000);
		return false
	}
	else {
		$('.button').toggleClass('active');
			setTimeout(function() {
				$("button[data-id=4]").click();
				block()
				$('#changeText').html('Ваш код:<br/>\n' + code4);
				document.cookie = 'name=code4; path=/; expires=1';
			}, 3000);
		return false
	}	
}

//проверка куки
setInterval(function(){
		if($.cookie("name") == "code1"){
			block()
			$('#changeText').html('Ваш код:<br/>\n' + code1);
		} else if($.cookie("name") =='code2'){
			block()
			$('#changeText').html('Ваш код:<br/>\n' + code2);
		} else if($.cookie("name")=='code3'){
			block()
			$('#changeText').html('Ваш код:<br/>\n' + code3);
		} else if($.cookie("name")=='code4'){
			block()
			$('#changeText').html('Ваш код:<br/>\n' + code4);
		} else {}
	}, 100);

</script>
