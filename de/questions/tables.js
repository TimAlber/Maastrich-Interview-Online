function addToTable() {
    const number = document.getElementById("int-number").value;
    const name = document.getElementById("int-name").value;
    const age = document.getElementById("int-age").value;
    const gender = document.getElementById("int-gender").value;
    const content = document.getElementById("int-content").value;
    const frequency = document.getElementById("int-frequency").value;

    var table = document.getElementById("q-2.2");
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerText = number;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = age;
    row.insertCell(3).innerText = gender;
    row.insertCell(4).innerText = content;
    row.insertCell(5).innerText = frequency;
    row.insertCell(6).innerText = '<button type="button" onclick="deleteRow(this)">Zeile Löschen</button>';

    document.getElementById("int-number").value = '';
    document.getElementById("int-name").value = '';
    document.getElementById("int-age").value = '';
    document.getElementById("int-gender").value = '';
    document.getElementById("int-content").value = '';
    document.getElementById("int-frequency").value = '';
}

function addToTableTwo() {
    const year = document.getElementById("int2-year").value;
    const hospital = document.getElementById("int2-hospital").value;
    const kind = document.getElementById("int2-kind").value;
    const lenght = document.getElementById("int2-lenght").value;
    const reason = document.getElementById("int2-reason").value;

    var table = document.getElementById("q-11.1");
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerText = year;
    row.insertCell(1).innerText = hospital;
    row.insertCell(2).innerText = kind;
    row.insertCell(3).innerText = lenght;
    row.insertCell(4).innerText = reason;
    row.insertCell(5).innerText = '<button type="button" onclick="deleteRowTwo(this)">Zeile Löschen</button>';

    document.getElementById("int2-year").value = '';
    document.getElementById("int2-hospital").value = '';
    document.getElementById("int2-kind").value = '';
    document.getElementById("int2-lenght").value = '';
    document.getElementById("int2-reason").value = '';
}

function addToTableThree() {
    const name = document.getElementById("int3-name").value;
    const knows = document.getElementById("int3-knows").value;
    const talk = document.getElementById("int3-can-talk").value;

    var table = document.getElementById("q-12");
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = knows;
    row.insertCell(2).innerText = talk;
    row.insertCell(3).innerText = '<button type="button" onclick="deleteRowThree(this)">Zeile Löschen</button>';

    document.getElementById("int3-name").value = '';
    document.getElementById("int3-knows").value = '';
    document.getElementById("int3-can-talk").value = '';
}

function deleteRowThree(r){
    document.getElementById("q-12").deleteRow(r.parentNode.parentNode.rowIndex);
}

function deleteRowTwo(r){
    document.getElementById("q-11.1").deleteRow(r.parentNode.parentNode.rowIndex);
}

function deleteRow(r){
    document.getElementById("q-2.2").deleteRow(r.parentNode.parentNode.rowIndex);
}
  
