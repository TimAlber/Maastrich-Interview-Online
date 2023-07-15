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

    document.getElementById("int-number").value = '';
    document.getElementById("int-name").value = '';
    document.getElementById("int-age").value = '';
    document.getElementById("int-gender").value = '';
    document.getElementById("int-content").value = '';
    document.getElementById("int-frequency").value = '';
}
