body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
}

header {
    background-color: #007bff;
    color: white;
    padding: 1em;
    width: 100%;
    text-align: center;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.selection-section, .upload-section, .controls {
    margin-bottom: 20px;
}

.canvas-container {
    border: 1px solid #ccc;
    width: 500px;
    height: 500px;
    position: relative;
    background-color: white;
}

#canvas {
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
}

#model {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.draggable {
    position: absolute;
    cursor: move;
    resize: both;
    overflow: auto;
}
