//========================================== Get Search Input & API Call =============================================================

const loadPhoneData = async() => {
  const getSearchInput = document.getElementById('search_input'); 
        const searchText = getSearchInput.value;
            
        //clear input
        getSearchInput.value = '';

        //error handling
        if(!searchText){
            getSearchInput.placeholder = "Please type your Phone name first!"
            
        }
        else{

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        const res = await fetch(url);
        const getData = await res.json();
        displayPhone(getData.data);  
        
    }
}


//============================================ Display All Searched Phones =====================================================

const displayPhone = (phones) => {

  //Error Handler 
  const errMsg = document.getElementById('err_msg');
  if(!phones.phone_name){
    errMsg.innerText = `None Matched of Your Search`;
  }
  
    const phoneContainer = document.getElementById('phone_container');
    const singlePhoneContainer = document.getElementById('singlePhone_container');

        //clear previous search
        phoneContainer.textContent = '';
        singlePhoneContainer.textContent = '';
    
    //Show only 20 items
    const phoneSliced = phones.slice(0, 20);

    phoneSliced.forEach(phone => {
    const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = 
    `
    <div class="card h-100 text-center shadow-lg">
    <img src="${phone.image}" class="card-img-top mx-auto w-50 pt-3" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">${phone.brand}</p>
      <button onclick="loadSinglePhoneData('${phone.slug}')" class="btn btn-outline-info">See Details</button>
    </div>
  </div>
    `;

    phoneContainer.appendChild(div);

    //clear previous error msg
    errMsg.innerText = '';

 });

}


//=============================================== Single Phone Section ========================================================

const loadSinglePhoneData = async(id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const getData = await res.json();
    displaySinglePhone(getData.data);
}


const displaySinglePhone = (phones) => {
    const singlePhoneContainer = document.getElementById('singlePhone_container');
    singlePhoneContainer.textContent = '';


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
