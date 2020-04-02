function GetPage(id) {
    $.ajax({
        url: "http://localhost:3333/blog/" + id,
        type: "GET",
        contentType: "application/json",
        success: function (page) {
            document.elements["title"].value = page.title;
            document.elements["text"].value = page.text;
        }
    });
}
/*
function GetPages() {
    $.ajax({
        url: "/blog",
        type: "GET",
        contentType: "application/json",
        success: function (page) {
            document.elements["title"].value = page.title;
            document.elements["text"].value = page.text;
        }
    });
}*/

function GetPages(){
    var x = new XMLHttpRequest();
    x.open("GET", "/blog");
    x.onload = function (){
        var data = JSON.parse(x.responseText);
        console.log(data);
        console.info(data);
        document.elements["title"].value = data[1].title;
        document.elements["text"].value = data[1].text;
    }
}
// загрузка блогов
//url: "http://localhost:3333/blog/",
GetPages();
/*
// Создаём объект класса XMLHttpRequest
const request = new XMLHttpRequest();
request.open('GET', "http://localhost:3333/blog");
// Указываем заголовки для сервера, говорим что тип данных, - контент который мы хотим получить должен быть не закодирован. 
request.setRequestHeader('Content-Type', 'application/json');
// Здесь мы получаем ответ от сервера на запрос, лучше сказать ждем ответ от сервера 
request.addEventListener("readystatechange", () => {
 //   request.readyState - возвращает текущее состояние объекта XHR(XMLHttpRequest) объекта, 
 //бывает 4 состояния 4-е состояние запроса - операция полностью завершена, пришел ответ от сервера, 
 //вот то что нам нужно request.status это статус ответа, 
 //нам нужен код 200 это нормальный ответ сервера, 401 файл не найден, 500 сервер дал ошибку и прочее...   
	if (request.readyState === 4 && request.status === 200) {
	
      // выводим в консоль то что ответил сервер
	  console.log( request.responseTex );
    }
});
 
// Выполняем запрос 
request.send();
*/