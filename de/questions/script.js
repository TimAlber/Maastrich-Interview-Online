function saveAll() {
    const obj = {
        meta_data: saveFirstPage(),
        section_1: saveSectionOne(),
        section_2: saveSectionTwo(),
        section_3: saveSectionThree(),
    }
    localStorage.setItem("maastricht-interview-data", JSON.stringify(obj));
    console.log(localStorage.getItem("maastricht-interview-data"));
}

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

    return {
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

function saveSectionOne() {
    const q_1_1 = document.getElementById("q-1.1").value;
    const q_1_2 = document.getElementById("q-1.2").value;
    const q_1_3 = document.getElementById("q-1.3").value;
    const q_1_4 = document.getElementById("q-1.4").value;
    const q_1_5 = document.getElementById("q-1.5").value;

    return {
        q_1_1: q_1_1,
        q_1_2: q_1_2,
        q_1_3: q_1_3,
        q_1_4: q_1_4,
        q_1_5: q_1_5,
        q_1_5_sub: {
            q_1_5_1: getValueFromRadios('q-1.5.1'),
            q_1_5_2: getValueFromRadios('q-1.5.2'),
            q_1_5_3: getValueFromRadios('q-1.5.3'),
            q_1_5_4: getValueFromRadios('q-1.5.4'),
            q_1_5_5: getValueFromRadios('q-1.5.5'),
        }
    }
}

function saveSectionTwo() {
    const q_2_1 = document.getElementById("q-2.1").value;
    const q_2_2 = getTableToArray('q-2.2');
    const q_2_3 = document.getElementById("q-2.3").value;

    return {
        q_2_1: q_2_1,
        q_2_2: q_2_2,
        q_2_3: q_2_3,
    }
}

function saveSectionThree() {
    const q_3_1 = document.getElementById("q-3.1").value;
    const q_3_2 = document.getElementById("q-3.2").value;
    const q_3_4 = document.getElementById("q-3.4").value;

    return {
        q_3_1: q_3_1,
        q_3_2: q_3_2,
        q_3_3: saveSectionThreeTable(),
        q_3_4: q_3_4,
    }
}

function saveSectionThreeTable(){
    return {
        q_3_3_1: {
            yesNo: getValueFromRadios('q-3.3.1.yesNo'),
            age: document.getElementById('q-3.3.1.age').value,
            voices: document.getElementById('q-3.3.1.voices').value,
        },
        q_3_3_2: {
            yesNo: getValueFromRadios('q-3.3.2.yesNo'),
            age: document.getElementById('q-3.3.2.age').value,
            voices: document.getElementById('q-3.3.2.voices').value,
        },
        q_3_3_3: {
            yesNo: getValueFromRadios('q-3.3.3.yesNo'),
            age: document.getElementById('q-3.3.3.age').value,
            voices: document.getElementById('q-3.3.3.voices').value,
        },
        q_3_3_4: {
            yesNo: getValueFromRadios('q-3.3.4.yesNo'),
            age: document.getElementById('q-3.3.4.age').value,
            voices: document.getElementById('q-3.3.4.voices').value,
        },
        q_3_3_5: {
            yesNo: getValueFromRadios('q-3.3.5.yesNo'),
            age: document.getElementById('q-3.3.5.age').value,
            voices: document.getElementById('q-3.3.5.voices').value,
        },
        q_3_3_6: {
            yesNo: getValueFromRadios('q-3.3.6.yesNo'),
            age: document.getElementById('q-3.3.6.age').value,
            voices: document.getElementById('q-3.3.6.voices').value,
        },
        q_3_3_7: {
            yesNo: getValueFromRadios('q-3.3.7.yesNo'),
            age: document.getElementById('q-3.3.7.age').value,
            voices: document.getElementById('q-3.3.7.voices').value,
        },
        q_3_3_8: {
            yesNo: getValueFromRadios('q-3.3.8.yesNo'),
            age: document.getElementById('q-3.3.8.age').value,
            voices: document.getElementById('q-3.3.8.voices').value,
        },
        q_3_3_9: {
            yesNo: getValueFromRadios('q-3.3.9.yesNo'),
            age: document.getElementById('q-3.3.9.age').value,
            voices: document.getElementById('q-3.3.9.voices').value,
        },
        q_3_3_10: {
            yesNo: getValueFromRadios('q-3.3.10.yesNo'),
            age: document.getElementById('q-3.3.10.age').value,
            voices: document.getElementById('q-3.3.10.voices').value,
        },
        q_3_3_11: {
            yesNo: getValueFromRadios('q-3.3.11.yesNo'),
            age: document.getElementById('q-3.3.11.age').value,
            voices: document.getElementById('q-3.3.11.voices').value,
        },
        q_3_3_12: {
            yesNo: getValueFromRadios('q-3.3.12.yesNo'),
            age: document.getElementById('q-3.3.12.age').value,
            voices: document.getElementById('q-3.3.12.voices').value,
        },
        q_3_3_13: {
            yesNo: getValueFromRadios('q-3.3.13.yesNo'),
            age: document.getElementById('q-3.3.13.age').value,
            voices: document.getElementById('q-3.3.13.voices').value,
        },
        q_3_3_14: {
            yesNo: getValueFromRadios('q-3.3.14.yesNo'),
            age: document.getElementById('q-3.3.14.age').value,
            voices: document.getElementById('q-3.3.14.voices').value,
        },
        q_3_3_15: {
            yesNo: getValueFromRadios('q-3.3.15.yesNo'),
            age: document.getElementById('q-3.3.15.age').value,
            voices: document.getElementById('q-3.3.15.voices').value,
        },
        q_3_3_16: {
            yesNo: getValueFromRadios('q-3.3.16.yesNo'),
            age: document.getElementById('q-3.3.16.age').value,
            voices: document.getElementById('q-3.3.16.voices').value,
        },
        q_3_3_17: {
            yesNo: getValueFromRadios('q-3.3.17.yesNo'),
            age: document.getElementById('q-3.3.17.age').value,
            voices: document.getElementById('q-3.3.17.voices').value,
        },
        q_3_3_18: {
            yesNo: getValueFromRadios('q-3.3.18.yesNo'),
            age: document.getElementById('q-3.3.18.age').value,
            voices: document.getElementById('q-3.3.18.voices').value,
        },
        q_3_3_19: {
            yesNo: getValueFromRadios('q-3.3.19.yesNo'),
            age: document.getElementById('q-3.3.19.age').value,
            voices: document.getElementById('q-3.3.19.voices').value,
        },
        q_3_3_20: {
            yesNo: getValueFromRadios('q-3.3.20.yesNo'),
            age: document.getElementById('q-3.3.20.age').value,
            voices: document.getElementById('q-3.3.20.voices').value,
        },
        q_3_3_21: {
            yesNo: getValueFromRadios('q-3.3.21.yesNo'),
            age: document.getElementById('q-3.3.21.age').value,
            voices: document.getElementById('q-3.3.21.voices').value,
        },
        q_3_3_22: {
            yesNo: getValueFromRadios('q-3.3.22.yesNo'),
            age: document.getElementById('q-3.3.22.age').value,
            voices: document.getElementById('q-3.3.22.voices').value,
        },
        q_3_3_23: {
            yesNo: getValueFromRadios('q-3.3.23.yesNo'),
            age: document.getElementById('q-3.3.23.age').value,
            voices: document.getElementById('q-3.3.23.voices').value,
        },
        q_3_3_24: {
            yesNo: getValueFromRadios('q-3.3.24.yesNo'),
            age: document.getElementById('q-3.3.24.age').value,
            voices: document.getElementById('q-3.3.24.voices').value,
        },
        q_3_3_25: {
            text: document.getElementById('q-3.3.25.text').value,
            yesNo: getValueFromRadios('q-3.3.25.yesNo'),
            age: document.getElementById('q-3.3.25.age').value,
            voices: document.getElementById('q-3.3.25.voices').value,
        },
        q_3_3_26: {
            text: document.getElementById('q-3.3.26.text').value,
            yesNo: getValueFromRadios('q-3.3.26.yesNo'),
            age: document.getElementById('q-3.3.26.age').value,
            voices: document.getElementById('q-3.3.26.voices').value,
        },
        q_3_3_27: {
            text: document.getElementById('q-3.3.27.text').value,
            yesNo: getValueFromRadios('q-3.3.27.yesNo'),
            age: document.getElementById('q-3.3.27.age').value,
            voices: document.getElementById('q-3.3.27.voices').value,
        },
    }
}

function getValueFromRadios(name) {
    var eles = document.getElementsByName(name);
    for (const ele of eles) {
        if (ele.checked) {
            return ele.value
        }
    }
}

function getTableToArray(id) {
    const out = []
    const table = document.getElementById(id)
    for (const row of table.rows) {
        const myRow = []
        for (let i = 0; i < row.cells.length - 1; i++) {
            myRow.push(row.cells[i].innerText)
        }
        out.push(myRow)
    }
    return out;
}