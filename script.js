document.getElementById('addButton').addEventListener('click', function () {
 let li = document.createElement('li');
 li.appendChild(document.createTextNode(document.getElementById('inputField').value));

 let deleteButton = document.createElement('button');
 deleteButton.appendChild(document.createTextNode('effacer'));
 deleteButton.style.marginLeft = '10px';
 deleteButton.style.cursor = 'pointer';
 deleteButton.style.border = 'none';
 deleteButton.style.background = 'none';
 deleteButton.style.color = '#4CAF50';
 deleteButton.style.fontSize = '14px';
 deleteButton.addEventListener('click', function () {
     let li = this.parentElement;
     li.parentElement.removeChild(li);
    });

    li.appendChild(deleteButton);
    document.getElementById('list').appendChild(li);
    document.getElementById('inputField').value = '';
});