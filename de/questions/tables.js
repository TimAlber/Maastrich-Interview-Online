function addToTable() {
    const number = document.getElementById("int-number").value;
    const name = document.getElementById("int-name").value;
    const age = document.getElementById("int-age").value;
    const gender = document.getElementById("int-gender").value;
    const content = document.getElementById("int-content").value;
    const frequency = document.getElementById("int-frequency").value;

    var table = document.getElementById("q-2.2");
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = number;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = age;
    row.insertCell(3).innerHTML = gender;
    row.insertCell(4).innerHTML = content;
    row.insertCell(5).innerHTML = frequency;
    row.insertCell(6).innerHTML = '<button type="button" onclick="deleteRow(this)">Zeile Löschen</button>';

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
    row.insertCell(0).innerHTML = year;
    row.insertCell(1).innerHTML = hospital;
    row.insertCell(2).innerHTML = kind;
    row.insertCell(3).innerHTML = lenght;
    row.insertCell(4).innerHTML = reason;
    row.insertCell(5).innerHTML = '<button type="button" onclick="deleteRowTwo(this)">Zeile Löschen</button>';

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
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = knows;
    row.insertCell(2).innerHTML = talk;
    row.insertCell(3).innerHTML = '<button type="button" onclick="deleteRowThree(this)">Zeile Löschen</button>';

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
  
