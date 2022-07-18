const inputField = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener('click', () => {
    searchBtn.href = inputField.value.trim() === "" ? "#" : 
        `https://www.google.com/search?q=${inputField.value}`
})
