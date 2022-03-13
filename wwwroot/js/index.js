const getUrl = '/api/items';
const itemsArea = $('main')[0];

var allItems = [];

async function getItems() {
    await fetch(getUrl)
    .then(items => items.json())
    .then(data => { 
        for(let i = 0; i < data.length; i++) {

            // Declaring todoItem html element
            let todoContainer = document.createElement('div');
            let todoAside = document.createElement('div');
            let todoMain = document.createElement('div');
            let todoHeader = document.createElement('div');
            let todoDates = document.createElement('div'); // hgroup quando refatorando para novas tags
            let todoDesc = document.createElement('div');

            let title = document.createElement('h1');
            let created = document.createElement('h2');
            let completeUntil = document.createElement('h2');
            let desc = document.createElement('p');
            let checkInput = document.createElement('input');
            
            // Adding classes
            todoContainer.classList += 'todo-container';
            todoAside.classList += 'todo-aside';
            todoMain.classList += 'todo-main';
            todoHeader.classList += 'todo-main-header';
            todoDesc.classList += 'todo-main-desc';

            // Changes and child elements
            title.innerHTML = data[i].title;

            let descriptionn = data[i].description;
            if (descriptionn.length > 80) {
                descriptionn = descriptionn.substring(0, 55) + " (...)";
            }

            desc.innerHTML = descriptionn;
            created.innerHTML = "Criado em: " + data[i].createdAt;
            completeUntil.innerHTML = "Completar até: " + data[i].completeUntil;

            checkInput.type = 'checkbox';
            checkInput.checked = data[i].isComplete;

            todoHeader.appendChild(title);
            todoDates.appendChild(created);
            todoDates.appendChild(completeUntil);

            todoDesc.appendChild(desc);

            todoAside.appendChild(checkInput);
            todoHeader.appendChild(todoDates);
            todoMain.appendChild(todoHeader);
            todoMain.appendChild(todoDesc);

            todoContainer.appendChild(todoAside);
            todoContainer.appendChild(todoMain);

            itemsArea.appendChild(todoContainer);

            allItems.push(data[i]);
        }
     });
}

getItems();