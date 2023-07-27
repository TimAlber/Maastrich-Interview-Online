function pdfExport(){
    console.log("runss")

    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    let myHTML = document.getElementById("output-container").innerHTML;
    mywindow.document.write(myHTML);
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    mywindow.close();
  
    return true;
}