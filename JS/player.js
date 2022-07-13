var rows = 0;

function addNews() {
    var newsValue = document.querySelector("input[type='text']").value;
    var trimmed = newsValue.trim();

    if (typeof (newsValue) != "string" || newsValue.length == 0 || trimmed.length == 0) {
        alert("enter a valid name");
    }
    else {
        var tableRow = document.createElement('tr');
        var tableCol1 = document.createElement('td');
        tableCol1.innerText = ++rows + '';
        var tableCol2 = document.createElement('td');
        tableCol2.innerText = newsValue;
        tableRow.appendChild(tableCol1);
        tableRow.appendChild(tableCol2);

        document.getElementsByTagName('table')[0].appendChild(tableRow);
    }
}
function rowsNumber() {
    var rowsNumber = document.getElementById('rows-number');
    if (!rowsNumber) {
        var ele = document.createElement('p')
        ele.setAttribute('id', 'rows-number')
        ele.innerText = rows + '';
        document.getElementById('myWrapper').appendChild(ele);
    } else {
        rowsNumber.innerText = rows + '';
    }
}
