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
















