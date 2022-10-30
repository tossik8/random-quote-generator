const generateColor = () =>{
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    return color;
}

export {generateColor};
