function saveFirstPage() {
    const name = document.getElementById("vh-name").value;
    const adress = document.getElementById("vh-adress").value;
    const phone = document.getElementById("vh-phone").value;
    const birthday = document.getElementById("vh-birthday").value;
    const gender = document.getElementById("vh-gender").value;
    const family_status = document.getElementById("vh-family-status").value;
    const kids_number = document.getElementById("vh-kids-number").value;
    const accommodation = document.getElementById("vh-accommodation").value;
    const work = document.getElementById("vh-work").value;
    const nationality = document.getElementById("vh-nationality").value;
    const name_interviewer = document.getElementById("vh-name-interviewer").value;
    const date_interview = document.getElementById("vh-date-interview").value;
    const date_interview_two = document.getElementById("vh-date-interview-two").value;
    const file_number = document.getElementById("vh-file-number").value;

    const obj = {
        meta_data: {
            name: name,
            adress: adress,
            phone: phone,
            birthday: birthday,
            gender: gender,
            family_status: family_status,
            kids_number: kids_number,
            accommodation: accommodation,
            work: work,
            nationality: nationality,
            name_interviewer: name_interviewer,
            date_interview: date_interview,
            date_interview_two: date_interview_two,
            file_number: file_number
        }
    }
    localStorage.setItem("maastricht-interview-data", JSON.stringify(obj));
  }