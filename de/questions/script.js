function saveAll() {
    const obj = {
        meta_data: saveFirstPage(),
        section_1: saveSectionOne(),
        section_2: saveSectionTwo(),
        section_3: saveSectionThree(),
        section_4: saveSectionFour(),
        section_5: saveSectionFive(),
        section_6: saveSectionSix(),
        section_7: saveSectionSeven(),
        section_8: saveSectionEight(),
        section_9: saveSectionNine(),
        section_10: saveSectionTen(),
        section_11: saveSectionEleven(),
        section_12: saveSectionTwelve(),
        section_13: saveSectionThirteen(),
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

function saveSectionFour(){
    const q_4_1 = document.getElementById("q-4.1").value;
    const q_4_2 = document.getElementById("q-4.2").value;
    const q_4_3 = document.getElementById("q-4.3").value;
    const q_4_4 = document.getElementById("q-4.4").value;

    return {
        q_4_1: q_4_1,
        q_4_2: q_4_2,
        q_4_3: q_4_3,
        q_4_4: q_4_4,
        q_4_4_boxes: {
            q_4_4_1: document.getElementById('q-4.4.1').checked,
            q_4_4_2: document.getElementById('q-4.4.2').checked,
            q_4_4_3: document.getElementById('q-4.4.3').checked,
            q_4_4_4: document.getElementById('q-4.4.4').checked,
            q_4_4_5: document.getElementById('q-4.4.5').checked,
            q_4_4_6: document.getElementById('q-4.4.6').checked,
            q_4_4_7: document.getElementById('q-4.4.7').checked,
            q_4_4_8: document.getElementById('q-4.4.8').checked,
            q_4_4_9: document.getElementById('q-4.4.9').checked,
            q_4_4_10: document.getElementById('q-4.4.10').checked,
            q_4_4_11: document.getElementById('q-4.4.11').checked,
            q_4_4_12: document.getElementById('q-4.4.12').checked,
            q_4_4_13: document.getElementById('q-4.4.13').checked,
        },
        q_4_4_end: document.getElementById('q-4.4.end').value,
    }
}

function saveSectionFive(){
    const q_5_1 = document.getElementById("q-5.1").value;
    const q_5_2 = document.getElementById("q-5.2").value;
    const q_5_3 = document.getElementById("q-5.3").value;

    return {
        q_5_1: q_5_1,
        q_5_2: q_5_2,
        q_5_3: q_5_3
    }
}

function saveSectionSix(){
    return {
        q_6_1: {
            q_6_1_1: getValueFromRadios('q-6.1.1'),
            q_6_1_2: getValueFromRadios('q-6.1.2'),
            q_6_1_3: getValueFromRadios('q-6.1.3'),
            q_6_1_4: getValueFromRadios('q-6.1.4'),
            q_6_1_5: getValueFromRadios('q-6.1.5'),
            q_6_1_6: getValueFromRadios('q-6.1.6'),
            q_6_1_7: getValueFromRadios('q-6.1.7'),
            q_6_1_8: getValueFromRadios('q-6.1.8'),
            q_6_1_9: getValueFromRadios('q-6.1.9'),
            q_6_1_10: getValueFromRadios('q-6.1.10'),
            q_6_1_11: getValueFromRadios('q-6.1.11'),
            q_6_1_12: getValueFromRadios('q-6.1.12'),
            q_6_1_13: getValueFromRadios('q-6.1.13'),
            q_6_1_14: getValueFromRadios('q-6.1.14'),
            q_6_1_15: getValueFromRadios('q-6.1.15'),
            q_6_1_16: getValueFromRadios('q-6.1.16'),
            q_6_1_17: getValueFromRadios('q-6.1.17'),
            q_6_1_18: document.getElementById('q-6.1.18').value,
        },
        q_6_2: document.getElementById('q-6.2').value,
    }
}

function saveSectionSeven(){
    return {
        q_7_1: {
            q_7_1_1: document.getElementById('q-7.1.1').value,
            q_7_1_2: document.getElementById('q-7.1.2').value,
            q_7_1_3: document.getElementById('q-7.1.3').value,
            q_7_1_4: document.getElementById('q-7.1.4').value,
            q_7_1_5: document.getElementById('q-7.1.5').value,
            q_7_1_6: document.getElementById('q-7.1.6').value,
            q_7_1_7: document.getElementById('q-7.1.7').value,
            q_7_1_8: document.getElementById('q-7.1.8').value,
            q_7_1_9: document.getElementById('q-7.1.9').value,
            q_7_1_10: document.getElementById('q-7.1.10').value,
            q_7_1_11: document.getElementById('q-7.1.11').value,
            q_7_1_12: document.getElementById('q-7.1.12').value,
            q_7_1_13: document.getElementById('q-7.1.13').value,
        },
        q_7_2: document.getElementById('q-7.2').value,
        q_7_3: document.getElementById('q-7.3').value,
        q_7_4: document.getElementById('q-7.4').value,
        q_7_5: {
            q_7_5_1: getValueFromRadios('q-7.5.1'),
            q_7_5_2: getValueFromRadios('q-7.5.2'),
            q_7_5_3: getValueFromRadios('q-7.5.3'),
            q_7_5_4: getValueFromRadios('q-7.5.4'),
        }
    }
}

function saveSectionEight() {
    return {
        q_8_1: document.getElementById('q-8.1').value,
        q_8_2: document.getElementById('q-8.2').value,
        q_8_3: document.getElementById('q-8.3').value,
        q_8_4: document.getElementById('q-8.4').value,
        q_8_5: document.getElementById('q-8.5').value,
        q_8_6: document.getElementById('q-8.6').value,
        q_8_7: document.getElementById('q-8.7').value,
        q_8_8: document.getElementById('q-8.8').value,
    }
}

function saveSectionNine(){
    return {
        q_9_1: {
            yesNo: getValueFromRadios('q-9.1.yesNo'),
            how: document.getElementById('q-9.1.how').value,
        },
        q_9_2: {
            yesNo: getValueFromRadios('q-9.2.yesNo'),
            how: document.getElementById('q-9.2.how').value,
        },
        q_9_3: {
            yesNo: getValueFromRadios('q-9.3.yesNo'),
            how: document.getElementById('q-9.3.how').value,
        },
        q_9_4: {
            yesNo: getValueFromRadios('q-9.4.yesNo'),
            how: document.getElementById('q-9.4.how').value,
        },
        q_9_5: {
            yesNo: getValueFromRadios('q-9.5.yesNo'),
            how: document.getElementById('q-9.5.how').value,
        },
        q_9_6: {
            yesNo: getValueFromRadios('q-9.6.yesNo'),
            how: document.getElementById('q-9.6.how').value,
        },
        q_9_7: {
            yesNo: getValueFromRadios('q-9.7.yesNo'),
            how: document.getElementById('q-9.7.how').value,
        },
        q_9_8: {
            yesNo: getValueFromRadios('q-9.8.yesNo'),
            how: document.getElementById('q-9.8.how').value,
        },
        q_9_9: {
            yesNo: getValueFromRadios('q-9.9.yesNo'),
            how: document.getElementById('q-9.9.how').value,
        },
        q_9_10: {
            yesNo: getValueFromRadios('q-9.10.yesNo'),
            how: document.getElementById('q-9.10.how').value,
        },
        q_9_11: {
            yesNo: getValueFromRadios('q-9.11.yesNo'),
            how: document.getElementById('q-9.11.how').value,
        },
        q_9_12: {
            yesNo: getValueFromRadios('q-9.12.yesNo'),
            how: document.getElementById('q-9.12.how').value,
        },
        q_9_13: {
            yesNo: getValueFromRadios('q-9.13.yesNo'),
            how: document.getElementById('q-9.13.how').value,
        },
        q_9_14: {
            yesNo: getValueFromRadios('q-9.14.yesNo'),
            how: document.getElementById('q-9.14.how').value,
        },
        q_9_15: {
            yesNo: getValueFromRadios('q-9.15.yesNo'),
            how: document.getElementById('q-9.15.how').value,
        },
        q_9_16: {
            yesNo: getValueFromRadios('q-9.16.yesNo'),
            how: document.getElementById('q-9.16.how').value,
        },
        q_9_17: {
            yesNo: getValueFromRadios('q-9.17.yesNo'),
            how: document.getElementById('q-9.17.how').value,
        },
        q_9_18: document.getElementById('q-9.18').value,
        q_9_19: document.getElementById('q-9.19').value,
        q_9_20: document.getElementById('q-9.20').value,
        q_9_21: document.getElementById('q-9.21').value,
    }
}

function saveSectionTen() {
    return {
        q_10_1: document.getElementById('q-10.1').value,
        q_10_2: document.getElementById('q-10.2').value,
        q_10_3: document.getElementById('q-10.3').value,
        q_10_4: document.getElementById('q-10.4').value,
        q_10_5: document.getElementById('q-10.5').value,
        q_10_6: document.getElementById('q-10.6').value,
        q_10_7: document.getElementById('q-10.7').value,
        q_10_8: document.getElementById('q-10.8').value,
    }
}

function saveSectionEleven() {
    return {
        q_11_1: getTableToArray('q-11.1'),
        q_11_2: document.getElementById('q-11.2').value,
        q_11_3: document.getElementById('q-11.3').value,
        q_11_4: document.getElementById('q-11.4').value,
    }
}

function saveSectionTwelve() {
    return {
        q_12: getTableToArray('q-12'),
    }
}

function saveSectionThirteen(){
    return {
        q_13: document.getElementById('q-13').value,
    }
}

function getValueFromRadios(name) {
    var eles = document.getElementsByName(name);
    for (const ele of eles) {
        if (ele.checked) {
            return ele.value
        }
    }
    return "empty"
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