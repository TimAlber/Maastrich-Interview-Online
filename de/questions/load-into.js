setTimeout(function () {
    loadEverything()
}, 10);


function loadEverything(){
    const item = localStorage.getItem("maastricht-interview-data")
    if(item !== null){
        const data = JSON.parse(item);
        setMetaData(data.meta_data);
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