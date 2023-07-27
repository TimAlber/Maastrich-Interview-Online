setTimeout(function () {
    loadFromLocalStorage()
}, 10);

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("maastricht-interview-data"));
    setMetaData(data.meta_data);
    setSectionOne(data.section_1);
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