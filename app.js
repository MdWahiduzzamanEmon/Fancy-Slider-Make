const searchBtn = document.getElementById("search-btn");
const searchField = document.getElementById("search");
const imgAdd = document.getElementById("img-add");

searchBtn.addEventListener("click", () => {
    const inputValue = searchField.value;
    console.log(inputValue);
    fetchUrl(inputValue);

})

searchField.addEventListener('keyup', (event) => {
    if (event.code == "Enter") {
        const inputValue = searchField.value;
        console.log(inputValue);
        fetchUrl(inputValue);
    }
})

const fetchUrl = (inputValue) => {
    const url = `https://pixabay.com/api/?key=23294956-7a0fa61160486250046f35cb7&q=${inputValue}`;
    // console.log(url);
  fetch(url)
    .then((res) => res.json())
        .then((data) => showImage(data.hits));
    searchField.value="";
    imgAdd.textContent="";
};

const showImage = (datas) => {
    datas.forEach(data => {
        console.log(data.largeImageURL);
        const div = document.createElement("div");
        div.className = "col-lg-3 col";
        div.innerHTML = `
                    <div class="card">
                        <img src="${data.largeImageURL}" class="card-img-top img-fluid" alt="...">
                        
                    </div>
        `;
        imgAdd.appendChild(div);
    })
}