let films = document.querySelector("#films")
let val = document.querySelector("#rating")
let numRating = document.querySelector("#numRating")
let clickDown = false

fetch(`http://api.themoviedb.org/3/movie/popular?api_key=2e901364c3d103dcb00ced520e9bca3c`)
.then(response => response.json())
.then(data => {
    console.log(data)
    val.addEventListener('mousedown', function(){
        clickDown = true
    })
    val.addEventListener('mousemove', function(){
        if(clickDown == true){
        val = document.querySelector("#rating").value
        numRating.innerHTML=`${val}`     
    }}
    )
    val.addEventListener('mouseup', function(){
        clickDown = false
        films.innerHTML=""
        new Rage(data).sortRange()
    })
    returnFunc(data)
}
)

//Task1
class Rage{
    constructor(data){
        this.data = data
    }
    sortRange(){
        for(let i=0; i<this.data.results.length;i++){
            if(Math.floor(this.data.results[i].vote_average) == Math.floor(val)){
                films.innerHTML+=`
                <div>
                    <h2>${this.data.results[i].title}</h2>
                    <h4>Rating:${this.data.results[i].vote_average}</h4>
                    <p>${this.data.results[i].overview}</p>
                </div>
                `
            }
        }        
    }
}

//Task2
function returnFunc (data){
    let arr = []
    for(let i=0; i<data.results.length;i++){
        arr.push(data.results[i].title)
    }
    console.log(arr)
}
