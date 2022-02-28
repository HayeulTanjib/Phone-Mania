const loadPhoneData = async() => {
    const getSearchInput = document.getElementById('search_input'); 
        const searchText = getSearchInput.value;
            //console.log(searchText);

        //clear input
        getSearchInput.value = '';

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        const res = await fetch(url);
        const getData = await res.json();
        displayPhone(getData.data);  
}


const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone_container');

        //clear previous search
        phoneContainer.textContent = '';

     phones.forEach(phone => {
    const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = 
    `
    <div class="card h-100 text-center">
    <img src="${phone.image}" class="card-img-top mx-auto w-50 pt-3" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">${phone.brand}</p>
      <button>
    </div>
  </div>
    `;

    phoneContainer.appendChild(div);
 });
}





























