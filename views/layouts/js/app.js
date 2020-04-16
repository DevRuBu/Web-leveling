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
    });
}

// del page
function DeletePage(id) {
    let url ='/'+id;
    //let tempUrl = 'http://localhost:3333/2';
    console.log(url);
    fetch('http://localhost:3333/2', {
        method: 'DELETE'
    }).then(response => {
    console.log(response);
    });
 }

function myFunctionSave() {
	let titleInput = document.getElementsByName("title");
	let textTexterea = document.getElementsByName("text");
    let idSpan = document.getElementsByName("id");
	let titles = titleInput[1].value;
	let texts = textTexterea[1].value;
    let ids = idSpan[0].innerText;
    EditPage(titles, texts, ids);
}
function myFunctionAdd() {
	let titleInput = document.getElementsByName("title");
	let textTexterea = document.getElementsByName("text");
    let idSpan = document.getElementsByName("id");
	let titles = titleInput[1].value;
	let texts = textTexterea[1].value;
    let ids = idSpan[0].innerText;
    CreatePage(titles, texts, ids);
}
function myFunctionReset() {
    let form = document.forms;
    form.reset();
}
function myFunctionDelete() {
    let idSpan = document.getElementsByName("id");
    let id = idSpan[0].innerText;
    DeletePage(id);
}