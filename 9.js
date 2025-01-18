let warEnd=1945
let warStart=1939

let x='השואה החלה בשנת '
alert(x + warStart)

let c='השואה נגמרה בשנת '
alert(c + warEnd)


alert("המלחמה נמשכה " + (warEnd-warStart) + " שנים")


function checkQuestion(name) {
    var ele = document.getElementsByName(name);
    let answerSelected = false;
    //עבור על כל הרדיו והדפס את הערך של התשובה שנבחרה
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            alert(ele[i].value);
            answerSelected = true;
        }
    }
    //בדוק אם תשובה נבחרה
    if (answerSelected == false) {
        alert("בחר תשובה בבקשה");
    }
}
