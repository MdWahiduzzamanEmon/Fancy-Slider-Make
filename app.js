const searchBtn = document.getElementById("search-btn");
const searchField = document.getElementById("search");
const imgAdd = document.getElementById("img-add");
const warning = document.getElementById("warning");
const sliderMakeSection = document.getElementById("slider-make-section");


searchBtn.addEventListener("click", () => {
    const inputValue = searchField.value;
    // console.log(inputValue);
    fetchUrl(inputValue);

})

searchField.addEventListener('keyup', (event) => {
    if (event.code == "Enter") {
        const inputValue = searchField.value;
        // console.log(inputValue);
        fetchUrl(inputValue);
    }
})

const fetchUrl = (inputValue) => {
    if (!inputValue) {
        warning.classList.remove("d-none");
    } else {
        warning.classList.add("d-none");
        const url = `https://pixabay.com/api/?key=23294956-7a0fa61160486250046f35cb7&q=${inputValue}`;
        // console.log(url);
        fetch(url)
          .then((res) => res.json())
            .then((data) => {
                if (data.hits.length == 0) {
                    warning.classList.remove("d-none");
                    sliderMakeSection.classList.add("d-none");
                } else {
                    sliderMakeSection.classList.remove("d-none");
                    showImage(data.hits);
                }
            });
        
        searchField.value = "";
        imgAdd.textContent = "";
    }
    
};

const showImage = (datas) => {
    datas.forEach(data => {
        // console.log(data.largeImageURL);
        const div = document.createElement("div");
        div.className = "col-lg-3 col";
        div.innerHTML = `
                    <div class="card">
                        <img src="${data.largeImageURL}" onclick="clickImage('${data.largeImageURL}',event)" class="card-img-top img-fluid" alt="${data.tags}">
                    </div>
        `;
        imgAdd.appendChild(div);
    })
}

 const img = [];

const clickImage = (data, e) => {
    e.target.parentNode.style.border = "2px solid red";
    
    if (img.includes(data)) {
        alert("already added")
    } else {
        img.push(data);
    }

   /*  fetch(data)
        .then(res => res.json())
        .then(datas => console.log(datas)) */
}