let input = document.querySelector('.inputName')
let button = document.querySelector('.inputButton')
let container = document.querySelector('.container')
let randomize = document.querySelector('.random')
let ganadorContainer = document.querySelector('.ganadorContainer')
let nombres =[]

class Nombre{
    constructor(nuevoNombre){
        this.crearDiv(nuevoNombre);
    }
    crearDiv(nuevoNombre){
        let newInput = document.createElement('input');
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="bi bi-lock-fill"></i>'
        editButton.classList.add('editButton')

        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<i class="bi bi-person-dash-fill"></i>'
        deleteButton.classList.add('deleteButton')

        newInput.value = nuevoNombre
        newInput.classList.add('newName')
        newInput.type = 'text'
        newInput.disabled = true

        let nameBox = document.createElement('div')
        nameBox.classList.add('nameBox')

        nameBox.appendChild(newInput)
        nameBox.appendChild(editButton)
        nameBox.appendChild(deleteButton)
        container.appendChild(nameBox)

        editButton.addEventListener('click', function(){
            let indice = nombres.indexOf(newInput.value)
            if(newInput.disabled == true){
                editButton.innerHTML = '<i class="bi bi-unlock-fill"></i>'
                newInput.disabled = !true
                nombres.splice(indice, 1)
            }
            else{
                editButton.innerHTML = '<i class="bi bi-lock-fill"></i>'
                newInput.disabled = true
                nombres.splice(indice, 0, newInput.value)
            }
            
        })

        deleteButton.addEventListener('click', function(){
            let indice = nombres.indexOf(newInput.value)
            nombres.splice(indice,1)

            nameBox.removeChild(newInput)
            nameBox.removeChild(editButton)
            nameBox.removeChild(deleteButton)

        })
    }
}

let nameCheck = ()=>{
    if(input.value !=''){
        let nuevoNombre = new Nombre(input.value)
    }
}

button.addEventListener('click', function(){
    nameCheck()
    nombres.push(input.value)
    input.value=''
})

randomize.addEventListener('click', function(){
    let ganador = nombres[Math.floor(Math.random() * nombres.length)]
    let nombreGanador = document.createElement('h2')
    nombreGanador.classList.add('ganador')
    nombreGanador.innerHTML = ganador
    ganadorContainer.appendChild(nombreGanador)


})




