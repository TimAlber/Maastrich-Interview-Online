setTimeout(function(){
    loadFromLocalStorage()
}, 1);

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("maastricht-interview-data"));
    setMetaData(data.meta_data);
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

function reformatDate(stringDate){
    return stringDate.split('-').reverse().join('.');
}