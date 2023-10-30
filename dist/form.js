'use strict'
const titleElement = document.querySelector('#title')
const descriptionElement = document.querySelector('#description')
const priceElement = document.querySelector('#price')
const fileElement = document.querySelector('#file')

const createProduct=()=>{

    // get value from user
    const title = titleElement.value
    const description = descriptionElement.value
    const price = Number(priceElement.value)
    const file = fileElement.files[0]

}
// upload img to server
async const uploadImage=(file)=>{
    //create form data
    const formData = new FormData()

    formData.append('file ',file)
    
    // send to server
    const res = await fetch('https://api.escuelajs.co/api/v1/files/upload',{
         method: 'POST', 
        body: formData
    }) 
}