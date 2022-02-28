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
    const singlePhoneContainer = document.getElementById('singlePhone_container');

        //clear previous search
        phoneContainer.textContent = '';
        singlePhoneContainer.textContent = '';

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
      <button onclick="loadSinglePhoneData('${phone.slug}')" class="btn btn-primary">See Details</button>
    </div>
  </div>
    `;

    phoneContainer.appendChild(div);

 });

}



const loadSinglePhoneData = async(id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const getData = await res.json();
    displaySinglePhone(getData.data);
}


const displaySinglePhone = (phones) => {
    const singlePhoneContainer = document.getElementById('singlePhone_container');
    singlePhoneContainer.textContent = '';

    console.log(phones.mainFeatures.sensors);

        const div = document.createElement('div');
         div.classList.add('card');
         div.style.width = '24rem';
         div.style.textAlign = 'center';
         div.style.margin = '0 auto';
            
        div.innerHTML = 
            `
            <img src="${phones.image}" class="card-img-top w-50 mx-auto mt-3" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phones.name}</h5>
              <p class="card-text">${phones.brand}</p>
              <p class="card-text">${phones.releaseDate? phones.releaseDate: 'Info Not Available'}</p>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item fw-bold">Main Features</li>
              <li class="list-group-item">${phones.mainFeatures.storage}</li>
              <li class="list-group-item">${phones.mainFeatures.displaySize}</li>
              <li class="list-group-item">${phones.mainFeatures.chipSet}</li>
              <li class="list-group-item">${phones.mainFeatures.memory}</li>
            
            <li class="list-group-item fw-bold">Sensor Information</li>
            <li class="list-group-item">${phones.mainFeatures.sensors}</li>
          
          <li class="list-group-item fw-bold">Other Information</li>
          <li class="list-group-item">${phones?.others?.WLAN? phones.others.WLAN: 'Info Not Available'}</li>
          <li class="list-group-item">${phones?.others?.Bluetooth? phones.others.Bluetooth: 'Info Not Available'}</li>
          <li class="list-group-item">${phones?.others?.GPS? phones.others.GPS: 'Info Not Available'}</li>
          <li class="list-group-item">${phones?.others?.NFC? phones.others.NFC: 'Info Not Available'}</li>
          <li class="list-group-item">${phones?.others?.Radio? phones.others.Radio: 'Info Not Available'}</li>
          <li class="list-group-item">${phones?.others?.USB? phones.others.USB: 'Info Not Available'}</li>
        </ul>

            `;

            singlePhoneContainer.appendChild(div);

}
























