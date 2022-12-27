const getcolor = () => {
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("heading").innerText = randomcode
    navigator.clipboard.writeText(randomcode)
}

document.getElementById("btn").addEventListener("click", getcolor)

getcolor();
console.log("hello")