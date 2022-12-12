// const fetchData = async () => {
//     var data = await fetch('http://localhost:1000/')
//     var main = await data.json()
//     console.log(main['msg'])
//     document.getElementById('message').innerText = String(main['msg']);
// }

// const vinu = async () => {
//     var data = await fetch('http://localhost:1000/vinu')
//     var main = await data.json()
//     console.log(main['msg'])
//     document.getElementById('message').innerText = String(main['msg']);
// }


// const muskan = async () => {
//     var data = await fetch('http://localhost:1000/muskan')
//     var main = await data.json()
//     console.log(main['msg'])
//     document.getElementById('message').innerText = String(main['msg']);
// }




// fetchData()


















const nextJoke = async () => {
    var response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=8624dd1f20abcb37ba915359f2dd')
    var data = await response.json()
    console.log(data['jokeContent'])
    document.getElementById('jokeBox').innerText = data['jokeContent']
 
}

