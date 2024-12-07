const display = document.querySelector(".cal_input");
const buttons = document.querySelectorAll(".button");
const spChars = ["%", "*", "-", "/", "+", "="];
let output = "";

const calculate = (btnvalue) => {
    console.log(btnvalue)
    if (btnvalue === "=" && output !== "") {
        display.value = eval(output.replace("%","/100").replace("X","*"));
        output = display.value;
    } else if (btnvalue === "C") {
        output = "";
    } else if (btnvalue === "DEL") {
        output = output.toString().slice(0, -1);
    } else{
        if (output === "" && spChars.includes(btnvalue))
        return;
    output += btnvalue;

}
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

