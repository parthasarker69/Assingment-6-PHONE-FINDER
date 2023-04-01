
// Taking value from searchBox and loading data from the server 

const loadDataAsSearched = () => {
    const searchedText = document.getElementById('input-value').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchedText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhonesOnDisplay(data.data))
}

// Showing the searched Phone in the screen 

const showPhonesOnDisplay = phones => {


    phones.forEach(phone => {
        console.log(phone)

    });
    console.log(phones)
}