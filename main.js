
//Show and hide 1
function show() {
    document.getElementById('newnote').style.height="18px"
    document.getElementById('newnote').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide() {
    document.getElementById('newnote').style.height="0px"
    document.getElementById('newnote').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 2
function show() {
    document.getElementById('newnote2').style.height="18px"
    document.getElementById('newnote2').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide2() {
    document.getElementById('newnote2').style.height="0px"
    document.getElementById('newnote2').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 3
function show() {
    document.getElementById('newnote3').style.height="18px"
    document.getElementById('newnote3').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide3() {
    document.getElementById('newnote3').style.height="0px"
    document.getElementById('newnote3').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 4
function show() {
    document.getElementById('newnote4').style.height="18px"
    document.getElementById('newnote4').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide4() {
    document.getElementById('newnote4').style.height="0px"
    document.getElementById('newnote4').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 5
function show() {
    document.getElementById('newnote5').style.height="18px"
    document.getElementById('newnote5').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide5() {
    document.getElementById('newnote5').style.height="0px"
    document.getElementById('newnote5').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 6
function show() {
    document.getElementById('newnote6').style.height="18px"
    document.getElementById('newnote6').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide6() {
    document.getElementById('newnote6').style.height="0px"
    document.getElementById('newnote6').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 7
function show() {
    document.getElementById('newnote7').style.height="18px"
    document.getElementById('newnote7').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide7() {
    document.getElementById('newnote7').style.height="0px"
    document.getElementById('newnote7').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 8
function show() {
    document.getElementById('newnote8').style.height="18px"
    document.getElementById('newnote8').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide8() {
    document.getElementById('newnote8').style.height="0px"
    document.getElementById('newnote8').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 9
function show() {
    document.getElementById('newnote9').style.height="18px"
    document.getElementById('newnote9').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide9() {
    document.getElementById('newnote9').style.height="0px"
    document.getElementById('newnote9').style.display="none"
    document.getElementById('show').style.height="inline"
}

//Show and hide 10
function show() {
    document.getElementById('newnote10').style.height="18px"
    document.getElementById('newnote10').style.display="block"
    document.getElementById('show').style.height="none"

}

function hide10() {
    document.getElementById('newnote10').style.height="0px"
    document.getElementById('newnote10').style.display="none"
    document.getElementById('show').style.height="inline"
}

const BtnAdd = document.querySelector(".adddoc");
const DivContainer = document.getElementById("dropZone");

BtnAdd.addEventListener("click", AddNew);

function AddNew() {
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add("div-shadow");
  DivContainer.appendChild(newDiv);
}
