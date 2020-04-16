   $(document).ready(function() {
   		url = document.location.href;
           if ( url.match(/utm_term=block/)){ // метку можно изменить на свою
               window.location = "http://block-city.plp7.ru/"; // Ссылка для перенаправления.
           }
   });