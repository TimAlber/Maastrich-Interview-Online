setTimeout(function () {
    loadEverything()
}, 10);


function loadEverything(){
    const item = localStorage.getItem("maastricht-interview-data")
    if(item !== null){
        const data = JSON.parse(item);
        setMetaData(data.meta_data);
        setSectionOne(data.section_1);
        setSectionTwo(data.section_2);
        setSectionThree(data.section_3);
    }
}

function setMetaData(data){
    document.getElementById("vh-name").value = data.name
    document.getElementById("vh-adress").value = data.adress
    document.getElementById("vh-phone").value = data.phone
    document.getElementById("vh-birthday").value = data.birthday
    document.getElementById("vh-gender").value = data.gender
    document.getElementById("vh-family-status").value = data.family_status
    document.getElementById("vh-kids-number").value = data.kids_number
    document.getElementById("vh-accommodation").value = data.accommodation
    document.getElementById("vh-work").value = data.work
    document.getElementById("vh-nationality").value = data.nationality
    document.getElementById("vh-name-interviewer").value = data.name_interviewer
    document.getElementById("vh-date-interview").value = data.date_interview
    document.getElementById("vh-date-interview-two").value = data.date_interview_two
    document.getElementById("vh-file-number").value = data.file_number
}

function setSectionOne(data){
    document.getElementById("q-1.1").value = data.q_1_1
    document.getElementById("q-1.2").value = data.q_1_2
    document.getElementById("q-1.3").value = data.q_1_3
    document.getElementById("q-1.4").value = data.q_1_4
    document.getElementById("q-1.5").value = data.q_1_5

    setRadioButton(data.q_1_5_sub.q_1_5_1, "q-1.5.1")
    setRadioButton(data.q_1_5_sub.q_1_5_2, "q-1.5.2")
    setRadioButton(data.q_1_5_sub.q_1_5_3, "q-1.5.3")
    setRadioButton(data.q_1_5_sub.q_1_5_4, "q-1.5.4")
    setRadioButton(data.q_1_5_sub.q_1_5_5, "q-1.5.5")
}

function setSectionTwo(data){
    document.getElementById("q-2.1").value = data.q_2_1
    setTable(data.q_2_2,"q-2.2")
    document.getElementById("q-2.3").value = data.q_2_3
}

function setSectionThree(data){
    document.getElementById("q-3.1").value = data.q_3_1
    document.getElementById("q-3.2").value = data.q_3_2

    setRadioButton(data.q_3_3.q_3_3_1.yesNo, "q-3.3.1.yesNo")
    document.getElementById("q-3.3.1.age").value = data.q_3_3.q_3_3_1.age
    document.getElementById("q-3.3.1.voices").value = data.q_3_3.q_3_3_1.voices

    setRadioButton(data.q_3_3.q_3_3_2.yesNo, "q-3.3.2.yesNo")
    document.getElementById("q-3.3.2.age").value = data.q_3_3.q_3_3_2.age
    document.getElementById("q-3.3.2.voices").value = data.q_3_3.q_3_3_2.voices

    setRadioButton(data.q_3_3.q_3_3_3.yesNo, "q-3.3.3.yesNo")
    document.getElementById("q-3.3.3.age").value = data.q_3_3.q_3_3_3.age
    document.getElementById("q-3.3.3.voices").value = data.q_3_3.q_3_3_3.voices

    setRadioButton(data.q_3_3.q_3_3_4.yesNo, "q-3.3.4.yesNo")
    document.getElementById("q-3.3.4.age").value = data.q_3_3.q_3_3_4.age
    document.getElementById("q-3.3.4.voices").value = data.q_3_3.q_3_3_4.voices

    setRadioButton(data.q_3_3.q_3_3_5.yesNo, "q-3.3.5.yesNo")
    document.getElementById("q-3.3.5.age").value = data.q_3_3.q_3_3_5.age
    document.getElementById("q-3.3.5.voices").value = data.q_3_3.q_3_3_5.voices

    setRadioButton(data.q_3_3.q_3_3_6.yesNo, "q-3.3.6.yesNo")
    document.getElementById("q-3.3.6.age").value = data.q_3_3.q_3_3_6.age
    document.getElementById("q-3.3.6.voices").value = data.q_3_3.q_3_3_6.voices

    setRadioButton(data.q_3_3.q_3_3_7.yesNo, "q-3.3.7.yesNo")
    document.getElementById("q-3.3.7.age").value = data.q_3_3.q_3_3_7.age
    document.getElementById("q-3.3.7.voices").value = data.q_3_3.q_3_3_7.voices

    setRadioButton(data.q_3_3.q_3_3_8.yesNo, "q-3.3.8.yesNo")
    document.getElementById("q-3.3.8.age").value = data.q_3_3.q_3_3_8.age
    document.getElementById("q-3.3.8.voices").value = data.q_3_3.q_3_3_8.voices

    setRadioButton(data.q_3_3.q_3_3_9.yesNo, "q-3.3.9.yesNo")
    document.getElementById("q-3.3.9.age").value = data.q_3_3.q_3_3_9.age
    document.getElementById("q-3.3.9.voices").value = data.q_3_3.q_3_3_9.voices

    setRadioButton(data.q_3_3.q_3_3_10.yesNo, "q-3.3.10.yesNo")
    document.getElementById("q-3.3.10.age").value = data.q_3_3.q_3_3_10.age
    document.getElementById("q-3.3.10.voices").value = data.q_3_3.q_3_3_10.voices

    setRadioButton(data.q_3_3.q_3_3_11.yesNo, "q-3.3.11.yesNo")
    document.getElementById("q-3.3.11.age").value = data.q_3_3.q_3_3_11.age
    document.getElementById("q-3.3.11.voices").value = data.q_3_3.q_3_3_11.voices

    setRadioButton(data.q_3_3.q_3_3_12.yesNo, "q-3.3.12.yesNo")
    document.getElementById("q-3.3.12.age").value = data.q_3_3.q_3_3_12.age
    document.getElementById("q-3.3.12.voices").value = data.q_3_3.q_3_3_12.voices

    setRadioButton(data.q_3_3.q_3_3_13.yesNo, "q-3.3.13.yesNo")
    document.getElementById("q-3.3.13.age").value = data.q_3_3.q_3_3_13.age
    document.getElementById("q-3.3.13.voices").value = data.q_3_3.q_3_3_13.voices

    setRadioButton(data.q_3_3.q_3_3_14.yesNo, "q-3.3.14.yesNo")
    document.getElementById("q-3.3.14.age").value = data.q_3_3.q_3_3_14.age
    document.getElementById("q-3.3.14.voices").value = data.q_3_3.q_3_3_14.voices

    setRadioButton(data.q_3_3.q_3_3_15.yesNo, "q-3.3.15.yesNo")
    document.getElementById("q-3.3.15.age").value = data.q_3_3.q_3_3_15.age
    document.getElementById("q-3.3.15.voices").value = data.q_3_3.q_3_3_15.voices

    setRadioButton(data.q_3_3.q_3_3_16.yesNo, "q-3.3.16.yesNo")
    document.getElementById("q-3.3.16.age").value = data.q_3_3.q_3_3_16.age
    document.getElementById("q-3.3.16.voices").value = data.q_3_3.q_3_3_16.voices

    setRadioButton(data.q_3_3.q_3_3_17.yesNo, "q-3.3.17.yesNo")
    document.getElementById("q-3.3.17.age").value = data.q_3_3.q_3_3_17.age
    document.getElementById("q-3.3.17.voices").value = data.q_3_3.q_3_3_17.voices

    setRadioButton(data.q_3_3.q_3_3_18.yesNo, "q-3.3.18.yesNo")
    document.getElementById("q-3.3.18.age").value = data.q_3_3.q_3_3_18.age
    document.getElementById("q-3.3.18.voices").value = data.q_3_3.q_3_3_18.voices

    setRadioButton(data.q_3_3.q_3_3_19.yesNo, "q-3.3.19.yesNo")
    document.getElementById("q-3.3.19.age").value = data.q_3_3.q_3_3_19.age
    document.getElementById("q-3.3.19.voices").value = data.q_3_3.q_3_3_19.voices

    setRadioButton(data.q_3_3.q_3_3_20.yesNo, "q-3.3.20.yesNo")
    document.getElementById("q-3.3.20.age").value = data.q_3_3.q_3_3_20.age
    document.getElementById("q-3.3.20.voices").value = data.q_3_3.q_3_3_20.voices

    setRadioButton(data.q_3_3.q_3_3_21.yesNo, "q-3.3.21.yesNo")
    document.getElementById("q-3.3.21.age").value = data.q_3_3.q_3_3_21.age
    document.getElementById("q-3.3.21.voices").value = data.q_3_3.q_3_3_21.voices

    setRadioButton(data.q_3_3.q_3_3_22.yesNo, "q-3.3.22.yesNo")
    document.getElementById("q-3.3.22.age").value = data.q_3_3.q_3_3_22.age
    document.getElementById("q-3.3.22.voices").value = data.q_3_3.q_3_3_22.voices

    setRadioButton(data.q_3_3.q_3_3_23.yesNo, "q-3.3.23.yesNo")
    document.getElementById("q-3.3.23.age").value = data.q_3_3.q_3_3_23.age
    document.getElementById("q-3.3.23.voices").value = data.q_3_3.q_3_3_23.voices

    setRadioButton(data.q_3_3.q_3_3_24.yesNo, "q-3.3.24.yesNo")
    document.getElementById("q-3.3.24.age").value = data.q_3_3.q_3_3_24.age
    document.getElementById("q-3.3.24.voices").value = data.q_3_3.q_3_3_24.voices

    document.getElementById("q-3.3.25.text").value = data.q_3_3.q_3_3_25.text
    setRadioButton(data.q_3_3.q_3_3_25.yesNo, "q-3.3.25.yesNo")
    document.getElementById("q-3.3.25.age").value = data.q_3_3.q_3_3_25.age
    document.getElementById("q-3.3.25.voices").value = data.q_3_3.q_3_3_25.voices

    document.getElementById("q-3.3.26.text").value = data.q_3_3.q_3_3_26.text
    setRadioButton(data.q_3_3.q_3_3_26.yesNo, "q-3.3.26.yesNo")
    document.getElementById("q-3.3.26.age").value = data.q_3_3.q_3_3_26.age
    document.getElementById("q-3.3.26.voices").value = data.q_3_3.q_3_3_26.voices

    document.getElementById("q-3.3.27.text").value = data.q_3_3.q_3_3_27.text
    setRadioButton(data.q_3_3.q_3_3_27.yesNo, "q-3.3.27.yesNo")
    document.getElementById("q-3.3.27.age").value = data.q_3_3.q_3_3_27.age
    document.getElementById("q-3.3.27.voices").value = data.q_3_3.q_3_3_27.voices

    document.getElementById("q-3.4").value = data.q_3_4
}

function setRadioButton(input, name){
    var eles = document.getElementsByName(name);
    switch (input) {
        case 'yes':
            eles[0].checked = true;
            break;
        case 'no':
            eles[1].checked = true;
            break;
        case 'toMe':
            eles[0].checked = true;
            break;
        case 'notToMe':
            eles[1].checked = true;
            break;
    }
}

function setTable(input, id){
    var table = document.getElementById(id);
    input.shift();

    for (let row of input) {
        var newRow = table.insertRow(table.rows.length);
        for (let i = 0; i < row.length; i++) {
            var currentCell = newRow.insertCell(i);
            currentCell.innerText = row[i]
        }
        var anotherCell = newRow.insertCell(row.length);
        anotherCell.innerHTML = '<button type="button" onclick="deleteRow(this)">Zeile Löschen</button>'
    }
}