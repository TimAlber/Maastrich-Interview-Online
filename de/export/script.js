setTimeout(function () {
    loadFromLocalStorage()
}, 10);

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("maastricht-interview-data"));
    setMetaData(data.meta_data);
    setSectionOne(data.section_1);
    setSectionTwo(data.section_2);
    setSectionThree(data.section_3);
    setSectionFour(data.section_4);
    setSectionFive(data.section_5);
}

function setMetaData(data) {
    document.getElementById('vh-name').innerHTML = data.name
    document.getElementById('vh-adress').innerHTML = data.adress
    document.getElementById('vh-phone').innerHTML = data.phone
    document.getElementById('vh-birthday').innerHTML = reformatDate(data.birthday)
    document.getElementById('vh-gender').innerHTML = data.gender
    document.getElementById('vh-family-status').innerHTML = data.family_status
    document.getElementById('vh-kids-number').innerHTML = data.kids_number
    document.getElementById('vh-accommodation').innerHTML = data.accommodation
    document.getElementById('vh-work').innerHTML = data.work
    document.getElementById('vh-nationality').innerHTML = data.nationality
    document.getElementById('vh-name-interviewer').innerHTML = data.name_interviewer
    document.getElementById('vh-date-interview').innerHTML = reformatDate(data.date_interview)
    document.getElementById('vh-date-interview-two').innerHTML = reformatDate(data.date_interview_two)
    document.getElementById('vh-file-number').innerHTML = data.file_number
}

function setSectionOne(data) {
    document.getElementById('q-1.1').innerHTML = data.q_1_1
    document.getElementById('q-1.2').innerHTML = data.q_1_2
    document.getElementById('q-1.3').innerHTML = data.q_1_3
    document.getElementById('q-1.4').innerHTML = data.q_1_4
    document.getElementById('q-1.5').innerHTML = data.q_1_5

    document.getElementById('q-1.5.1').innerHTML = formatRadioButtons(data.q_1_5_sub.q_1_5_1)
    document.getElementById('q-1.5.2').innerHTML = formatRadioButtons(data.q_1_5_sub.q_1_5_2)
    document.getElementById('q-1.5.3').innerHTML = formatRadioButtons(data.q_1_5_sub.q_1_5_3)
    document.getElementById('q-1.5.4').innerHTML = formatRadioButtons(data.q_1_5_sub.q_1_5_4)
    document.getElementById('q-1.5.5').innerHTML = formatRadioButtons(data.q_1_5_sub.q_1_5_5)
}

function setSectionTwo(data){
    document.getElementById('q-2.1').innerHTML = data.q_2_1
    drawTable(data.q_2_2)
    document.getElementById('q-2.3').innerHTML = data.q_2_3
}

function setSectionThree(data){
    document.getElementById('q-3.1').innerHTML = data.q_3_1
    document.getElementById('q-3.2').innerHTML = data.q_3_2

    document.getElementById('q-3.3.1.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_1.yesNo)
    document.getElementById('q-3.3.1.age').innerHTML = data.q_3_3.q_3_3_1.age
    document.getElementById('q-3.3.1.voices').innerHTML = data.q_3_3.q_3_3_1.voices

    document.getElementById('q-3.3.2.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_2.yesNo)
    document.getElementById('q-3.3.2.age').innerHTML = data.q_3_3.q_3_3_2.age
    document.getElementById('q-3.3.2.voices').innerHTML = data.q_3_3.q_3_3_2.voices

    document.getElementById('q-3.3.3.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_3.yesNo)
    document.getElementById('q-3.3.3.age').innerHTML = data.q_3_3.q_3_3_3.age
    document.getElementById('q-3.3.3.voices').innerHTML = data.q_3_3.q_3_3_3.voices

    document.getElementById('q-3.3.4.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_4.yesNo)
    document.getElementById('q-3.3.4.age').innerHTML = data.q_3_3.q_3_3_4.age
    document.getElementById('q-3.3.4.voices').innerHTML = data.q_3_3.q_3_3_4.voices

    document.getElementById('q-3.3.5.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_5.yesNo)
    document.getElementById('q-3.3.5.age').innerHTML = data.q_3_3.q_3_3_5.age
    document.getElementById('q-3.3.5.voices').innerHTML = data.q_3_3.q_3_3_5.voices

    document.getElementById('q-3.3.6.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_6.yesNo)
    document.getElementById('q-3.3.6.age').innerHTML = data.q_3_3.q_3_3_6.age
    document.getElementById('q-3.3.6.voices').innerHTML = data.q_3_3.q_3_3_6.voices

    document.getElementById('q-3.3.7.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_7.yesNo)
    document.getElementById('q-3.3.7.age').innerHTML = data.q_3_3.q_3_3_7.age
    document.getElementById('q-3.3.7.voices').innerHTML = data.q_3_3.q_3_3_7.voices

    document.getElementById('q-3.3.8.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_8.yesNo)
    document.getElementById('q-3.3.8.age').innerHTML = data.q_3_3.q_3_3_8.age
    document.getElementById('q-3.3.8.voices').innerHTML = data.q_3_3.q_3_3_8.voices

    document.getElementById('q-3.3.9.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_9.yesNo)
    document.getElementById('q-3.3.9.age').innerHTML = data.q_3_3.q_3_3_9.age
    document.getElementById('q-3.3.9.voices').innerHTML = data.q_3_3.q_3_3_9.voices

    document.getElementById('q-3.3.10.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_10.yesNo)
    document.getElementById('q-3.3.10.age').innerHTML = data.q_3_3.q_3_3_10.age
    document.getElementById('q-3.3.10.voices').innerHTML = data.q_3_3.q_3_3_10.voices

    document.getElementById('q-3.3.11.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_11.yesNo)
    document.getElementById('q-3.3.11.age').innerHTML = data.q_3_3.q_3_3_11.age
    document.getElementById('q-3.3.11.voices').innerHTML = data.q_3_3.q_3_3_11.voices

    document.getElementById('q-3.3.12.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_12.yesNo)
    document.getElementById('q-3.3.12.age').innerHTML = data.q_3_3.q_3_3_12.age
    document.getElementById('q-3.3.12.voices').innerHTML = data.q_3_3.q_3_3_12.voices

    document.getElementById('q-3.3.13.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_13.yesNo)
    document.getElementById('q-3.3.13.age').innerHTML = data.q_3_3.q_3_3_13.age
    document.getElementById('q-3.3.13.voices').innerHTML = data.q_3_3.q_3_3_13.voices

    document.getElementById('q-3.3.14.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_14.yesNo)
    document.getElementById('q-3.3.14.age').innerHTML = data.q_3_3.q_3_3_14.age
    document.getElementById('q-3.3.14.voices').innerHTML = data.q_3_3.q_3_3_14.voices

    document.getElementById('q-3.3.15.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_15.yesNo)
    document.getElementById('q-3.3.15.age').innerHTML = data.q_3_3.q_3_3_15.age
    document.getElementById('q-3.3.15.voices').innerHTML = data.q_3_3.q_3_3_15.voices

    document.getElementById('q-3.3.16.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_16.yesNo)
    document.getElementById('q-3.3.16.age').innerHTML = data.q_3_3.q_3_3_16.age
    document.getElementById('q-3.3.16.voices').innerHTML = data.q_3_3.q_3_3_16.voices

    document.getElementById('q-3.3.17.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_17.yesNo)
    document.getElementById('q-3.3.17.age').innerHTML = data.q_3_3.q_3_3_17.age
    document.getElementById('q-3.3.17.voices').innerHTML = data.q_3_3.q_3_3_17.voices

    document.getElementById('q-3.3.18.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_18.yesNo)
    document.getElementById('q-3.3.18.age').innerHTML = data.q_3_3.q_3_3_18.age
    document.getElementById('q-3.3.18.voices').innerHTML = data.q_3_3.q_3_3_18.voices

    document.getElementById('q-3.3.19.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_19.yesNo)
    document.getElementById('q-3.3.19.age').innerHTML = data.q_3_3.q_3_3_19.age
    document.getElementById('q-3.3.19.voices').innerHTML = data.q_3_3.q_3_3_19.voices

    document.getElementById('q-3.3.19.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_19.yesNo)
    document.getElementById('q-3.3.19.age').innerHTML = data.q_3_3.q_3_3_19.age
    document.getElementById('q-3.3.19.voices').innerHTML = data.q_3_3.q_3_3_19.voices

    document.getElementById('q-3.3.20.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_20.yesNo)
    document.getElementById('q-3.3.20.age').innerHTML = data.q_3_3.q_3_3_20.age
    document.getElementById('q-3.3.20.voices').innerHTML = data.q_3_3.q_3_3_20.voices

    document.getElementById('q-3.3.21.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_21.yesNo)
    document.getElementById('q-3.3.21.age').innerHTML = data.q_3_3.q_3_3_21.age
    document.getElementById('q-3.3.21.voices').innerHTML = data.q_3_3.q_3_3_21.voices

    document.getElementById('q-3.3.22.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_22.yesNo)
    document.getElementById('q-3.3.22.age').innerHTML = data.q_3_3.q_3_3_22.age
    document.getElementById('q-3.3.22.voices').innerHTML = data.q_3_3.q_3_3_22.voices

    document.getElementById('q-3.3.23.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_23.yesNo)
    document.getElementById('q-3.3.23.age').innerHTML = data.q_3_3.q_3_3_23.age
    document.getElementById('q-3.3.23.voices').innerHTML = data.q_3_3.q_3_3_23.voices

    document.getElementById('q-3.3.24.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_24.yesNo)
    document.getElementById('q-3.3.24.age').innerHTML = data.q_3_3.q_3_3_24.age
    document.getElementById('q-3.3.24.voices').innerHTML = data.q_3_3.q_3_3_24.voices

    document.getElementById('q-3.3.25.text').innerHTML = data.q_3_3.q_3_3_25.text
    document.getElementById('q-3.3.25.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_25.yesNo)
    document.getElementById('q-3.3.25.age').innerHTML = data.q_3_3.q_3_3_25.age
    document.getElementById('q-3.3.25.voices').innerHTML = data.q_3_3.q_3_3_25.voices

    document.getElementById('q-3.3.26.text').innerHTML = data.q_3_3.q_3_3_26.text
    document.getElementById('q-3.3.26.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_26.yesNo)
    document.getElementById('q-3.3.26.age').innerHTML = data.q_3_3.q_3_3_26.age
    document.getElementById('q-3.3.26.voices').innerHTML = data.q_3_3.q_3_3_26.voices

    document.getElementById('q-3.3.27.text').innerHTML = data.q_3_3.q_3_3_27.text
    document.getElementById('q-3.3.27.yesNo').innerHTML = formatRadioButtons(data.q_3_3.q_3_3_27.yesNo)
    document.getElementById('q-3.3.27.age').innerHTML = data.q_3_3.q_3_3_27.age
    document.getElementById('q-3.3.27.voices').innerHTML = data.q_3_3.q_3_3_27.voices

    document.getElementById('q-3.4').innerHTML = data.q_3_4
}

function setSectionFour(data){
    document.getElementById('q-4.1').innerHTML = data.q_4_1
    document.getElementById('q-4.2').innerHTML = data.q_4_2
    document.getElementById('q-4.3').innerHTML = data.q_4_3
    document.getElementById('q-4.4').innerHTML = data.q_4_4

    document.getElementById('q-4.4.1').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_1)
    document.getElementById('q-4.4.2').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_2)
    document.getElementById('q-4.4.3').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_3)
    document.getElementById('q-4.4.4').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_4)
    document.getElementById('q-4.4.5').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_5)
    document.getElementById('q-4.4.6').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_6)
    document.getElementById('q-4.4.7').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_7)
    document.getElementById('q-4.4.8').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_8)
    document.getElementById('q-4.4.9').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_9)
    document.getElementById('q-4.4.10').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_10)
    document.getElementById('q-4.4.11').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_11)
    document.getElementById('q-4.4.12').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_12)
    document.getElementById('q-4.4.13').innerHTML = formatCheckboxes(data.q_4_4_boxes.q_4_4_13)

    document.getElementById('q-4.4.end').innerHTML = data.q_4_4_end
}

function setSectionFive(data){
    document.getElementById('q-5.1').innerHTML = data.q_5_1
    document.getElementById('q-5.2').innerHTML = data.q_5_2
    document.getElementById('q-5.3').innerHTML = data.q_5_3
}

function drawTable(data) {
    var table = document.getElementById("q-2.2");
    for (let row of data) {
        var newRow = table.insertRow(table.rows.length);
        for (let i = 0; i < row.length; i++) {
            var currentCell = newRow.insertCell(i);
            currentCell.innerHTML = row[i]
            currentCell.style.textAlign = "center"
        }
    }
}

function reformatDate(stringDate) {
    return stringDate.split('-').reverse().join('.');
}

function formatRadioButtons(input) {
    switch (input) {
        case 'yes':
            return "Ja"
        case 'no':
            return "Nein"
        case 'toMe':
            return "»zu mir«"
        case 'notToMe':
            return "»nicht zu mir«"
        default:
            return "Keine Angabe"
    }
}

function formatCheckboxes(input){
    switch (input) {
        case true:
            return "✓"
        case false:
            return " "
        default:
            return " "
    }
}