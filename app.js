console.log('Javascript 9')

// const obtenerNombre = () => {
//   //acciones
//   //console.log('Nicolas')
//   const nombreInput = document.getElementById('nombre')
//   console.log(nombreInput.value)
// }

// const registrarme = () => {
//   const user = document.getElementById('user')
//   const password = document.getElementById('password')
//   const repeat = document.getElementById('repeatpassword')

//   if (password.value !== repeat.value) {
//     return alert('Tus contraseñas no son iguales')
//   }
//   const nameUser = document.getElementById('nameUser')
//   nameUser.innerHTML= `<h5>${user.value}</h5>`

//   alert(`Bienvenido ${user.value} a nuestra plataforma`)
// }

const getInfo = () => {
  //let data = []
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(resp => resp.json())
  .then(json => {
    const infoUsuario = document.getElementById('infoUsuario')
    const dataForHtml = json.map(info => `<h3>Title: ${info.title}</h3><p>${info.body}</p>`)

    infoUsuario.innerHTML = dataForHtml
  })
  //console.log(data)

}

const createUser = () => {
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: {
      user: 'ngonzales',
      password: '1234'
    }
  })
  .then(resp => resp.json()
  .then(json => console.log(json)))
}