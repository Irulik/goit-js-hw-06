

const inputRangeRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

const fontSizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);

inputRangeRef.addEventListener('input', fontSizeControl);



//метод 2
/*
const fontSizeControl = document.querySelector("#font-size-control");
  const textSpan = document.querySelector("#text");

  fontSizeControl.addEventListener("input", function () {
    const fontSize = fontSizeControl.value + "px";
    textSpan.style.fontSize = fontSize;
  });*/
