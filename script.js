document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
document.getElementById('backgroundColor').addEventListener('input', changeBackgroundColor);
document.getElementById('resetButton').addEventListener('click', resetCanvas);

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.style.position = 'absolute';
    img.style.cursor = 'move';
    img.onload = () => URL.revokeObjectURL(img.src); // Free memory
    img.draggable = true;

    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragend', dragEnd);

    document.getElementById('canvas').appendChild(img);
}

function changeBackgroundColor(event) {
    document.getElementById('canvas').style.backgroundColor = event.target.value;
}

function resetCanvas() {
    document.getElementById('canvas').innerHTML = '';
    document.getElementById('canvas').style.backgroundColor = 'white';
}

let offsetX, offsetY;

function dragStart(event) {
    offsetX = event.clientX - event.target.offsetLeft;
    offsetY = event.clientY - event.target.offsetTop;
}

function dragEnd(event) {
    event.target.style.left = `${event.clientX - offsetX}px`;
    event.target.style.top = `${event.clientY - offsetY}px`;
}
