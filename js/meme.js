var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");

function loadFile(event) {
    const img = new Image();
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = () => {
        // alert(img);
        // alert(img.src);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function addText(val) {
    const txt = document.getElementById("txt").value;
    const position = document.getElementById("position").value;

    ctx.font = "21px Comic Sans MS";
    ctx.fillStyle = "red";

    switch (position) {
        case "top":
            ctx.textAlign = "center";
            ctx.fillText(txt, canvas.width / 2, canvas.height / 10);
            break;
        case "down":
            ctx.textAlign = "center";
            ctx.fillText(txt, canvas.width / 2, canvas.height * 9 / 10);
            break;
        case "left":
            ctx.textAlign = "left";
            ctx.fillText(txt, canvas.width * 0.1 / 10, canvas.height / 2);
            break;
        case "right":
            ctx.textAlign = "right";
            ctx.fillText(txt, canvas.width * 9.9 / 10, canvas.height / 2);
            break;
        case "center":
            ctx.textAlign = "center";
            ctx.fillText(txt, canvas.width / 2, canvas.height / 2);
            break;
        default:
            ctx.textAlign = "center";
            ctx.fillText(txt, canvas.width / 2, canvas.height / 2);
    }

}