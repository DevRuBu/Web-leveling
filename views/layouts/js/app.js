// Добавление блога
function CreatePage(title, text, id) {
    let url ='http://localhost:3333/';
    fetch(url+id, {
        contentType: "application/json",
        method: "POST",
        body: JSON.stringify({
            title: title,
            text: text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
    console.log(response);
    window.location.reload();
    });
}
// Изменение 
function EditPage(title, text, id) {
    let url ='http://localhost:3333/';
    fetch(url+id, {
        contentType: "application/json",
        method: "PUT",
        body: JSON.stringify({
            title: title,
            text: text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
    console.log(response);
    window.location.reload();
    });
}

// del page
function DeletePage(id) {
    let url ='/'+id;
    console.log(url);
    fetch(url, {
        method: 'DELETE'
    }).then(response => {
    console.log(response);
    window.location.href = '/';
    });
 }

function myFunctionSave() {
	let titleInput = document.getElementsByName("title");
    let idSpan = document.getElementsByName("id");
	let textTexterea = document.getElementsByName("text");
	let titles = titleInput[1].value;
	let texts = textTexterea[0].value;
    let ids = idSpan[0].innerText;
    EditPage(titles, texts, ids);
}
function myFunctionAdd() {
	let titleInput = document.getElementsByName("title");
	let textTexterea = document.getElementsByName("text");
    let idSpan = document.getElementsByName("id");
    console.log(textTexterea);
	let titles = titleInput[1].value;
	let texts = textTexterea[0].value;
    let ids = idSpan[0].innerText;
    CreatePage(titles, texts, ids);
}
function myFunctionReset() {
    //window.location.reload();
    let idSpan = document.getElementsByName("id");
    let id = idSpan[0].innerText;
    let url ='/'+id;
    window.location.href = url;
   /*let form = document.forms;
    form.reset();*/
}
function myFunctionDelete() {
    let idSpan = document.getElementsByName("id");
    let id = idSpan[0].innerText;
    DeletePage(id);
}