const cols = document.querySelectorAll('.col');


function generateRandomColor() {
    //RGB
    //#FF0000
    //#00FF00
    //#0000FF

    const hexCodes = '01234567879ABCDEF';

    let color = '';
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }

    return '#' + color
}



function setRandomColors() {
    cols.forEach(col => {
        const text_title = col.querySelector('h2')
        const color = generateRandomColor()


        text_title.textContent = color
        col.style.background = color
    })
}

setRandomColors()
