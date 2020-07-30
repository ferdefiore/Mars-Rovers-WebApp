const LIMITS_ERROR_MSG = "R.I.P: Invalid moves, rover went outside Mars platform. We'll never see him again"
const INPUT_ERROR_MSG = "There is some input error, the page will restart"
const VERIFY_ROVER_LIMITS_MSG = "Verify rover inputs"
const VERIFY_PLATEU_LIMIST_MSG = "Verify plateau limits"
const EMPTY = ""
const marsImageSrc= "res/mars.jpg"
const roverImageSrc = "res/rover.jpg"
let plateauWidth = 0
let plateauHeight = 0
let roverX = 0
let roverY = 0
let roverC = "N"
let instructionSet = EMPTY

function plateauLimitsAreValid(){
    if (plateauHeight >= 0 && plateauWidth >= 0 && plateauWidth != EMPTY && plateauHeight != EMPTY) {
        return true
    }return false
}

function roverLimitsAreValid(){
    if (roverX >= 0 && roverY >= 0 && roverX <= plateauWidth && roverY <= plateauHeight && roverC != EMPTY && roverX != null && roverY != null && roverC != null) {
        if (roverC == 'N' || roverC == 'S' || roverC == 'W' || roverC == 'E'){
            return true
        }
    }return false
}

function instructionSetIsValid(){
    if (instructionSet != EMPTY ){
        return true
    }
    return false
}

const renderPlateauWithRover = (tableDiv) => {
    tableDiv.innerHTML = EMPTY

    const tabla = document.createElement("table")
    tabla.setAttribute("id","example-image-table")
    const tblBody = document.createElement("tbody")

    let invertIndex = plateauHeight
    for (let i = 0; i <= plateauHeight; i++) {
        const hilera = document.createElement("tr")
            for (let j = 0; j <= plateauWidth; j++) {
            let celda = document.createElement("td")
            let textoCelda = document.createElement("IMG")
            
            if (j == roverX && invertIndex==roverY){
                textoCelda.setAttribute("src", roverImageSrc)
            }else{
                textoCelda.setAttribute("src", marsImageSrc)
            }
            
            textoCelda.setAttribute("class","image")
            celda.appendChild(textoCelda)
            hilera.appendChild(celda)
            }
        tblBody.appendChild(hilera)
        invertIndex--
    }
    tabla.appendChild(tblBody)
    tableDiv.appendChild(tabla)
}

window.onload = () =>{
    const tableContainer1 = document.getElementById('table-container1')
    const tableContainer2 = document.getElementById('table-container2')
    const tableContainer3 = document.getElementById('table-container3')

    const renderPlateauBtn = document.getElementById('render-plateau-btn')
    renderPlateauBtn.addEventListener('click',()=> {
        plateauWidth = document.getElementById('width-text').value
        plateauHeight = document.getElementById('height-text').value
        if (plateauLimitsAreValid()){
            renderPlateauWithRover(tableContainer1)
        }else{
            alert(VERIFY_PLATEU_LIMIST_MSG)
        }
    })

    const renderRoverBtn = document.getElementById('render-rover-btn')
    renderRoverBtn.addEventListener('click',()=> {
        roverX = document.getElementById('roverX').value
        roverY = document.getElementById('roverY').value
        roverC = document.getElementById('roverC').value.toUpperCase()
        if (roverLimitsAreValid()){
            renderPlateauWithRover(tableContainer2)    
        }else{
            alert(VERIFY_ROVER_LIMITS_MSG)
        }        
    })

    const runBtn = document.getElementById('run-btn')
    runBtn.addEventListener('click',()=> {      
        instructionSet = document.getElementById('rover-instrucctions').value.toUpperCase()
        roverInformation = document.getElementById('rover-information')
        if(roverLimitsAreValid() && plateauLimitsAreValid() && instructionSetIsValid()){
            fetch(`https://localhost:8443/api/?pw=${plateauWidth}&ph=${plateauHeight}&rx=${roverX}&ry=${roverY}&rc=${roverC}&inst=${instructionSet}`)
            .then((response) => response.json())
            .then((resJson) => {
                roverX = resJson.xPos
                roverY = resJson.yPos
                roverC = resJson.compassPoint
                
                if (roverLimitsAreValid()){
                    renderPlateauWithRover(tableContainer3)
                    roverInformation.innerHTML = `X:${roverX} Y:${roverY} Facing Cardinal Point:${roverC}`
                }else roverInformation.innerHTML = LIMITS_ERROR_MSG
            })
        }else{
            alert(INPUT_ERROR_MSG)
            location.reload()
        }
    })
}