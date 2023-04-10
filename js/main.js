// this is our javascript file.
console.log("linked")

let form = document.querySelector("#movie-filter-form")
let moviesList = document.querySelectorAll(".top-movies-list li")
form.elements["filter-query"].focus()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let filterQuery = event.target.elements["filter-query"]
    filterItemsV1(filterQuery)
    filterQuery.focus()
})

let filterItemsV1 = (filterQuery) => {
    moviesList.forEach((movie) => {
        if (movie.innerText.toLowerCase().includes(filterQuery.value.toLowerCase().trim())){
            movie.classList.remove("hidden-item")
        }
        else{
            movie.classList.add("hidden-item")
        }
    })
}

let filterItemsV2 = (filterQuery) => {
    let moviesListArray = Array.from(moviesList)
    moviesListArray.map((movie) => {
        if (movie.innerText.toLowerCase().includes(filterQuery.value.toLowerCase().trim())){
            movie.classList.remove("hidden-item")
        }
        else{
            movie.classList.add("hidden-item")
        }
    })
}
