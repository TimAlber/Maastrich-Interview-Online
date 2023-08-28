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
    setSectionSix(data.section_6);
    setSectionSeven(data.section_7);
    setSectionEight(data.section_8);
    setSectionNine(data.section_9);
    setSectionTen(data.section_10);
    setSectionEleven(data.section_11);
    setSectionTwelve(data.section_12);
    setSectionThirteen(data.section_13);
}

function setMetaData(data) {
    document.getElementById('vh-name').innerText = data.name
    document.getElementById('vh-adress').innerText = data.adress
    document.getElementById('vh-phone').innerText = data.phone
    document.getElementById('vh-birthday').innerText = reformatDate(data.birthday)
    document.getElementById('vh-gender').innerText = data.gender
    document.getElementById('vh-family-status').innerText = data.family_status
    document.getElementById('vh-kids-number').innerText = data.kids_number
    document.getElementById('vh-accommodation').innerText = data.accommodation
    document.getElementById('vh-work').innerText = data.work
    document.getElementById('vh-nationality').innerText = data.nationality
    document.getElementById('vh-name-interviewer').innerText = data.name_interviewer
    document.getElementById('vh-date-interview').innerText = reformatDate(data.date_interview)
    document.getElementById('vh-date-interview-two').innerText = reformatDate(data.date_interview_two)
    document.getElementById('vh-file-number').innerText = data.file_number
}

function setSectionOne(data) {
    document.getElementById('q-1.1').innerText = data.q_1_1
    document.getElementById('q-1.2').innerText = data.q_1_2
    document.getElementById('q-1.3').innerText = data.q_1_3
    document.getElementById('q-1.4').innerText = data.q_1_4
    document.getElementById('q-1.5').innerText = data.q_1_5

    document.getElementById('q-1.5.1').innerText = formatRadioButtons(data.q_1_5_sub.q_1_5_1)
    document.getElementById('q-1.5.2').innerText = formatRadioButtons(data.q_1_5_sub.q_1_5_2)
    document.getElementById('q-1.5.3').innerText = formatRadioButtons(data.q_1_5_sub.q_1_5_3)
    document.getElementById('q-1.5.4').innerText = formatRadioButtons(data.q_1_5_sub.q_1_5_4)
    document.getElementById('q-1.5.5').innerText = formatRadioButtons(data.q_1_5_sub.q_1_5_5)
}

function setSectionTwo(data){
    document.getElementById('q-2.1').innerText = data.q_2_1
    drawTable(data.q_2_2, "q-2.2")
    document.getElementById('q-2.3').innerText = data.q_2_3
}

function setSectionThree(data){
    document.getElementById('q-3.1').innerText = data.q_3_1
    document.getElementById('q-3.2').innerText = data.q_3_2

    document.getElementById('q-3.3.1.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_1.yesNo)
    document.getElementById('q-3.3.1.age').innerText = data.q_3_3.q_3_3_1.age
    document.getElementById('q-3.3.1.voices').innerText = data.q_3_3.q_3_3_1.voices

    document.getElementById('q-3.3.2.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_2.yesNo)
    document.getElementById('q-3.3.2.age').innerText = data.q_3_3.q_3_3_2.age
    document.getElementById('q-3.3.2.voices').innerText = data.q_3_3.q_3_3_2.voices

    document.getElementById('q-3.3.3.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_3.yesNo)
    document.getElementById('q-3.3.3.age').innerText = data.q_3_3.q_3_3_3.age
    document.getElementById('q-3.3.3.voices').innerText = data.q_3_3.q_3_3_3.voices

    document.getElementById('q-3.3.4.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_4.yesNo)
    document.getElementById('q-3.3.4.age').innerText = data.q_3_3.q_3_3_4.age
    document.getElementById('q-3.3.4.voices').innerText = data.q_3_3.q_3_3_4.voices

    document.getElementById('q-3.3.5.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_5.yesNo)
    document.getElementById('q-3.3.5.age').innerText = data.q_3_3.q_3_3_5.age
    document.getElementById('q-3.3.5.voices').innerText = data.q_3_3.q_3_3_5.voices

    document.getElementById('q-3.3.6.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_6.yesNo)
    document.getElementById('q-3.3.6.age').innerText = data.q_3_3.q_3_3_6.age
    document.getElementById('q-3.3.6.voices').innerText = data.q_3_3.q_3_3_6.voices

    document.getElementById('q-3.3.7.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_7.yesNo)
    document.getElementById('q-3.3.7.age').innerText = data.q_3_3.q_3_3_7.age
    document.getElementById('q-3.3.7.voices').innerText = data.q_3_3.q_3_3_7.voices

    document.getElementById('q-3.3.8.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_8.yesNo)
    document.getElementById('q-3.3.8.age').innerText = data.q_3_3.q_3_3_8.age
    document.getElementById('q-3.3.8.voices').innerText = data.q_3_3.q_3_3_8.voices

    document.getElementById('q-3.3.9.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_9.yesNo)
    document.getElementById('q-3.3.9.age').innerText = data.q_3_3.q_3_3_9.age
    document.getElementById('q-3.3.9.voices').innerText = data.q_3_3.q_3_3_9.voices

    document.getElementById('q-3.3.10.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_10.yesNo)
    document.getElementById('q-3.3.10.age').innerText = data.q_3_3.q_3_3_10.age
    document.getElementById('q-3.3.10.voices').innerText = data.q_3_3.q_3_3_10.voices

    document.getElementById('q-3.3.11.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_11.yesNo)
    document.getElementById('q-3.3.11.age').innerText = data.q_3_3.q_3_3_11.age
    document.getElementById('q-3.3.11.voices').innerText = data.q_3_3.q_3_3_11.voices

    document.getElementById('q-3.3.12.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_12.yesNo)
    document.getElementById('q-3.3.12.age').innerText = data.q_3_3.q_3_3_12.age
    document.getElementById('q-3.3.12.voices').innerText = data.q_3_3.q_3_3_12.voices

    document.getElementById('q-3.3.13.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_13.yesNo)
    document.getElementById('q-3.3.13.age').innerText = data.q_3_3.q_3_3_13.age
    document.getElementById('q-3.3.13.voices').innerText = data.q_3_3.q_3_3_13.voices

    document.getElementById('q-3.3.14.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_14.yesNo)
    document.getElementById('q-3.3.14.age').innerText = data.q_3_3.q_3_3_14.age
    document.getElementById('q-3.3.14.voices').innerText = data.q_3_3.q_3_3_14.voices

    document.getElementById('q-3.3.15.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_15.yesNo)
    document.getElementById('q-3.3.15.age').innerText = data.q_3_3.q_3_3_15.age
    document.getElementById('q-3.3.15.voices').innerText = data.q_3_3.q_3_3_15.voices

    document.getElementById('q-3.3.16.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_16.yesNo)
    document.getElementById('q-3.3.16.age').innerText = data.q_3_3.q_3_3_16.age
    document.getElementById('q-3.3.16.voices').innerText = data.q_3_3.q_3_3_16.voices

    document.getElementById('q-3.3.17.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_17.yesNo)
    document.getElementById('q-3.3.17.age').innerText = data.q_3_3.q_3_3_17.age
    document.getElementById('q-3.3.17.voices').innerText = data.q_3_3.q_3_3_17.voices

    document.getElementById('q-3.3.18.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_18.yesNo)
    document.getElementById('q-3.3.18.age').innerText = data.q_3_3.q_3_3_18.age
    document.getElementById('q-3.3.18.voices').innerText = data.q_3_3.q_3_3_18.voices

    document.getElementById('q-3.3.19.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_19.yesNo)
    document.getElementById('q-3.3.19.age').innerText = data.q_3_3.q_3_3_19.age
    document.getElementById('q-3.3.19.voices').innerText = data.q_3_3.q_3_3_19.voices

    document.getElementById('q-3.3.19.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_19.yesNo)
    document.getElementById('q-3.3.19.age').innerText = data.q_3_3.q_3_3_19.age
    document.getElementById('q-3.3.19.voices').innerText = data.q_3_3.q_3_3_19.voices

    document.getElementById('q-3.3.20.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_20.yesNo)
    document.getElementById('q-3.3.20.age').innerText = data.q_3_3.q_3_3_20.age
    document.getElementById('q-3.3.20.voices').innerText = data.q_3_3.q_3_3_20.voices

    document.getElementById('q-3.3.21.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_21.yesNo)
    document.getElementById('q-3.3.21.age').innerText = data.q_3_3.q_3_3_21.age
    document.getElementById('q-3.3.21.voices').innerText = data.q_3_3.q_3_3_21.voices

    document.getElementById('q-3.3.22.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_22.yesNo)
    document.getElementById('q-3.3.22.age').innerText = data.q_3_3.q_3_3_22.age
    document.getElementById('q-3.3.22.voices').innerText = data.q_3_3.q_3_3_22.voices

    document.getElementById('q-3.3.23.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_23.yesNo)
    document.getElementById('q-3.3.23.age').innerText = data.q_3_3.q_3_3_23.age
    document.getElementById('q-3.3.23.voices').innerText = data.q_3_3.q_3_3_23.voices

    document.getElementById('q-3.3.24.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_24.yesNo)
    document.getElementById('q-3.3.24.age').innerText = data.q_3_3.q_3_3_24.age
    document.getElementById('q-3.3.24.voices').innerText = data.q_3_3.q_3_3_24.voices

    document.getElementById('q-3.3.25.text').innerText = data.q_3_3.q_3_3_25.text
    document.getElementById('q-3.3.25.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_25.yesNo)
    document.getElementById('q-3.3.25.age').innerText = data.q_3_3.q_3_3_25.age
    document.getElementById('q-3.3.25.voices').innerText = data.q_3_3.q_3_3_25.voices

    document.getElementById('q-3.3.26.text').innerText = data.q_3_3.q_3_3_26.text
    document.getElementById('q-3.3.26.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_26.yesNo)
    document.getElementById('q-3.3.26.age').innerText = data.q_3_3.q_3_3_26.age
    document.getElementById('q-3.3.26.voices').innerText = data.q_3_3.q_3_3_26.voices

    document.getElementById('q-3.3.27.text').innerText = data.q_3_3.q_3_3_27.text
    document.getElementById('q-3.3.27.yesNo').innerText = formatRadioButtons(data.q_3_3.q_3_3_27.yesNo)
    document.getElementById('q-3.3.27.age').innerText = data.q_3_3.q_3_3_27.age
    document.getElementById('q-3.3.27.voices').innerText = data.q_3_3.q_3_3_27.voices

    document.getElementById('q-3.4').innerText = data.q_3_4
}

function setSectionFour(data){
    document.getElementById('q-4.1').innerText = data.q_4_1
    document.getElementById('q-4.2').innerText = data.q_4_2
    document.getElementById('q-4.3').innerText = data.q_4_3
    document.getElementById('q-4.4').innerText = data.q_4_4

    document.getElementById('q-4.4.1').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_1)
    document.getElementById('q-4.4.2').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_2)
    document.getElementById('q-4.4.3').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_3)
    document.getElementById('q-4.4.4').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_4)
    document.getElementById('q-4.4.5').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_5)
    document.getElementById('q-4.4.6').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_6)
    document.getElementById('q-4.4.7').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_7)
    document.getElementById('q-4.4.8').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_8)
    document.getElementById('q-4.4.9').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_9)
    document.getElementById('q-4.4.10').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_10)
    document.getElementById('q-4.4.11').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_11)
    document.getElementById('q-4.4.12').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_12)
    document.getElementById('q-4.4.13').innerText = formatCheckboxes(data.q_4_4_boxes.q_4_4_13)

    document.getElementById('q-4.4.end').innerText = data.q_4_4_end
}

function setSectionFive(data){
    document.getElementById('q-5.1').innerText = data.q_5_1
    document.getElementById('q-5.2').innerText = data.q_5_2
    document.getElementById('q-5.3').innerText = data.q_5_3
}

function setSectionSix(data){
    document.getElementById('q-6.1.1').innerText = formatRadioButtons(data.q_6_1.q_6_1_1)
    document.getElementById('q-6.1.2').innerText = formatRadioButtons(data.q_6_1.q_6_1_2)
    document.getElementById('q-6.1.3').innerText = formatRadioButtons(data.q_6_1.q_6_1_3)
    document.getElementById('q-6.1.4').innerText = formatRadioButtons(data.q_6_1.q_6_1_4)
    document.getElementById('q-6.1.5').innerText = formatRadioButtons(data.q_6_1.q_6_1_5)
    document.getElementById('q-6.1.6').innerText = formatRadioButtons(data.q_6_1.q_6_1_6)
    document.getElementById('q-6.1.7').innerText = formatRadioButtons(data.q_6_1.q_6_1_7)
    document.getElementById('q-6.1.8').innerText = formatRadioButtons(data.q_6_1.q_6_1_8)
    document.getElementById('q-6.1.9').innerText = formatRadioButtons(data.q_6_1.q_6_1_9)
    document.getElementById('q-6.1.10').innerText = formatRadioButtons(data.q_6_1.q_6_1_10)
    document.getElementById('q-6.1.11').innerText = formatRadioButtons(data.q_6_1.q_6_1_11)
    document.getElementById('q-6.1.12').innerText = formatRadioButtons(data.q_6_1.q_6_1_12)
    document.getElementById('q-6.1.13').innerText = formatRadioButtons(data.q_6_1.q_6_1_13)
    document.getElementById('q-6.1.14').innerText = formatRadioButtons(data.q_6_1.q_6_1_14)
    document.getElementById('q-6.1.15').innerText = formatRadioButtons(data.q_6_1.q_6_1_15)
    document.getElementById('q-6.1.16').innerText = formatRadioButtons(data.q_6_1.q_6_1_16)
    document.getElementById('q-6.1.17').innerText = formatRadioButtons(data.q_6_1.q_6_1_17)

    document.getElementById('q-6.1.18').innerText = data.q_6_1.q_6_1_18
    document.getElementById('q-6.2').innerText = data.q_6_2
}

function setSectionSeven(data){
    document.getElementById('q-7.1.1').innerText = data.q_7_1.q_7_1_1
    document.getElementById('q-7.1.2').innerText = data.q_7_1.q_7_1_2
    document.getElementById('q-7.1.3').innerText = data.q_7_1.q_7_1_3
    document.getElementById('q-7.1.4').innerText = data.q_7_1.q_7_1_4
    document.getElementById('q-7.1.5').innerText = data.q_7_1.q_7_1_5
    document.getElementById('q-7.1.6').innerText = data.q_7_1.q_7_1_6
    document.getElementById('q-7.1.7').innerText = data.q_7_1.q_7_1_7
    document.getElementById('q-7.1.8').innerText = data.q_7_1.q_7_1_8
    document.getElementById('q-7.1.9').innerText = data.q_7_1.q_7_1_9
    document.getElementById('q-7.1.10').innerText = data.q_7_1.q_7_1_10
    document.getElementById('q-7.1.11').innerText = data.q_7_1.q_7_1_11
    document.getElementById('q-7.1.12').innerText = data.q_7_1.q_7_1_12
    document.getElementById('q-7.1.13').innerText = data.q_7_1.q_7_1_13

    document.getElementById('q-7.2').innerText = data.q_7_2
    document.getElementById('q-7.3').innerText = data.q_7_3
    document.getElementById('q-7.4').innerText = data.q_7_4

    document.getElementById('q-7.5.1').innerText = formatRadioButtons(data.q_7_5.q_7_5_1)
    document.getElementById('q-7.5.2').innerText = formatRadioButtons(data.q_7_5.q_7_5_2)
    document.getElementById('q-7.5.3').innerText = formatRadioButtons(data.q_7_5.q_7_5_3)
    document.getElementById('q-7.5.4').innerText = formatRadioButtons(data.q_7_5.q_7_5_4)
}

function setSectionEight(data){
    document.getElementById('q-8.1').innerText = data.q_8_1
    document.getElementById('q-8.2').innerText = data.q_8_2
    document.getElementById('q-8.3').innerText = data.q_8_3
    document.getElementById('q-8.4').innerText = data.q_8_4
    document.getElementById('q-8.5').innerText = data.q_8_5
    document.getElementById('q-8.6').innerText = data.q_8_6
    document.getElementById('q-8.7').innerText = data.q_8_7
    document.getElementById('q-8.8').innerText = data.q_8_8
}

function setSectionNine(data){
    document.getElementById('q-9.1.yesNo').innerText = formatRadioButtons(data.q_9_1.yesNo)
    document.getElementById('q-9.1.how').innerText = data.q_9_1.how

    document.getElementById('q-9.2.yesNo').innerText = formatRadioButtons(data.q_9_2.yesNo)
    document.getElementById('q-9.2.how').innerText = data.q_9_2.how

    document.getElementById('q-9.3.yesNo').innerText = formatRadioButtons(data.q_9_3.yesNo)
    document.getElementById('q-9.3.how').innerText = data.q_9_3.how

    document.getElementById('q-9.4.yesNo').innerText = formatRadioButtons(data.q_9_4.yesNo)
    document.getElementById('q-9.4.how').innerText = data.q_9_4.how

    document.getElementById('q-9.5.yesNo').innerText = formatRadioButtons(data.q_9_5.yesNo)
    document.getElementById('q-9.5.how').innerText = data.q_9_5.how

    document.getElementById('q-9.6.yesNo').innerText = formatRadioButtons(data.q_9_6.yesNo)
    document.getElementById('q-9.6.how').innerText = data.q_9_6.how

    document.getElementById('q-9.7.yesNo').innerText = formatRadioButtons(data.q_9_7.yesNo)
    document.getElementById('q-9.7.how').innerText = data.q_9_7.how

    document.getElementById('q-9.8.yesNo').innerText = formatRadioButtons(data.q_9_8.yesNo)
    document.getElementById('q-9.8.how').innerText = data.q_9_8.how

    document.getElementById('q-9.9.yesNo').innerText = formatRadioButtons(data.q_9_9.yesNo)
    document.getElementById('q-9.9.how').innerText = data.q_9_9.how

    document.getElementById('q-9.10.yesNo').innerText = formatRadioButtons(data.q_9_10.yesNo)
    document.getElementById('q-9.10.how').innerText = data.q_9_10.how

    document.getElementById('q-9.11.yesNo').innerText = formatRadioButtons(data.q_9_11.yesNo)
    document.getElementById('q-9.11.how').innerText = data.q_9_11.how

    document.getElementById('q-9.12.yesNo').innerText = formatRadioButtons(data.q_9_12.yesNo)
    document.getElementById('q-9.12.how').innerText = data.q_9_12.how

    document.getElementById('q-9.13.yesNo').innerText = formatRadioButtons(data.q_9_13.yesNo)
    document.getElementById('q-9.13.how').innerText = data.q_9_13.how

    document.getElementById('q-9.14.yesNo').innerText = formatRadioButtons(data.q_9_14.yesNo)
    document.getElementById('q-9.14.how').innerText = data.q_9_14.how

    document.getElementById('q-9.15.yesNo').innerText = formatRadioButtons(data.q_9_15.yesNo)
    document.getElementById('q-9.15.how').innerText = data.q_9_15.how

    document.getElementById('q-9.16.yesNo').innerText = formatRadioButtons(data.q_9_16.yesNo)
    document.getElementById('q-9.16.how').innerText = data.q_9_16.how

    document.getElementById('q-9.17.yesNo').innerText = formatRadioButtons(data.q_9_17.yesNo)
    document.getElementById('q-9.17.how').innerText = data.q_9_17.how

    document.getElementById('q-9.18').innerText = data.q_9_18
    document.getElementById('q-9.19').innerText = data.q_9_19
    document.getElementById('q-9.20').innerText = data.q_9_20
    document.getElementById('q-9.21').innerText = data.q_9_21
}

function setSectionTen(data){
    document.getElementById('q-10.1').innerText = data.q_10_1
    document.getElementById('q-10.2').innerText = data.q_10_2
    document.getElementById('q-10.3').innerText = data.q_10_3
    document.getElementById('q-10.4').innerText = data.q_10_4
    document.getElementById('q-10.5').innerText = data.q_10_5
    document.getElementById('q-10.6').innerText = data.q_10_6
    document.getElementById('q-10.7').innerText = data.q_10_7
    document.getElementById('q-10.8').innerText = data.q_10_8
}

function setSectionEleven(data){
    drawTable(data.q_11_1, "q-11.1")

    document.getElementById('q-11.2').innerText = data.q_11_2
    document.getElementById('q-11.3').innerText = data.q_11_3
    document.getElementById('q-11.4').innerText = data.q_11_4
}

function setSectionThirteen(data){
    document.getElementById('q-13').innerText = data.q_13
}

function setSectionTwelve(data){
    drawTable(data.q_12, "q-12")
}

function drawTable(data, id) {
    var table = document.getElementById(id);
    for (let row of data) {
        var newRow = table.insertRow(table.rows.length);
        for (let i = 0; i < row.length; i++) {
            var currentCell = newRow.insertCell(i);
            currentCell.innerText = row[i]
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
            return "Yes"
        case 'no':
            return "No"
        case 'toMe':
            return "»to Me«"
        case 'notToMe':
            return "»not to Me«"
        default:
            return "Not specified"
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