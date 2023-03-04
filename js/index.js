const loadHubs = async() =>{
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data.tools);
}

// displaying all hubs 
const displayHubs = hubs =>{
    const processShow = () =>{
        const showButton = document.getElementById('show-all');
        hubs = hubs.slice(0, 6);
        if(hubs.length > 6) {
            hubs = hubs.slice(0, 6);
            showButton.classList.remove('hidden');
        }
        else{
            showButton.classList.add('hidden');
        }
        }

    const hubsContainer = document.getElementById('hubs-container');
    for(const data of hubs){
        // console.log(data);
        // display 6 tools only 
        const hubsDiv  = document.createElement('div');
        hubsDiv.classList.add("card", "w-96", "bg-base-100", "shadow-xl", "border", "p-3");
        
        hubsDiv.innerHTML = `
            <figure><img src="${data.image}" alt="Shoes" / ></figure>
            <div class="card-body">
                <h2 class="card-title">Features</h2>
                <p class="mb-3 text-left">
                    <ol id="${data.id}" class="list-decimal text-left list list-inside">

                    </ol>
                </p>
                <div class="card-footer border-t flex justify-between items-center pt-3">
                    <div>
                        <h2 class="card-title">${data.name}</h2>
                        <div>
                            <i class="fa-solid fa-calendar-days"></i> ${data.published_in}
                        </div>
                    </div>
                    <label for="my-modal-5" btn onclick="fetchModalInfo('${(data.id)}')" class="bg-red-300 text-red-500 p-1 rounded-full hover:bg-slate-200 fa-solid fa-arrow-right"></label>
                
                </div>
            </div
        `;
        hubsContainer.appendChild(hubsDiv);

        // features list items appending
        const featureContainer = document.getElementById(data.id);
            data.features.forEach( (featur) => {
                const featureList = document.createElement('li');
                featureList.innerText = featur;
                featureContainer.appendChild(featureList);
            })

            toggleSpinner(false);
    }
    // datas.forEach(data =>{});
}

// document.getElementById('btn-show-all').addEventListener('click', function(){
    
// })

// fetching data for modal
// --------------------------------------------
const fetchModalInfo = data =>{
    // console.log(data);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${data}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalInfo(data.data))
}

// displaying modal info
// ---------------------------------------

const displayModalInfo = data =>{

    console.log(data);
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = `
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box p-6 w-4/6 max-w-5xl">
            <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-0 top-0">✕</label>
            <!-- modal body  -->
            <div class="flex justify-between items-center rounded-2xl gap-5">
              <div class="w-1/2 bg-red-100 p-6 rounded-2xl">
                <h3 class="font-bold text-left">${data.description}</h3>
                <div class="flex justify-between items-center gap-3 my-5">
                  <div class="bg-white p-5 rounded-2xl"><h6 class="text-xs font-bold text-blue-300 h-7">${data.pricing[0].price}</h6> <h6 class="text-xs font-bold text-blue-300">${data.pricing[0].plan}</h6></div>
                  <div class="bg-white p-5 rounded-2xl"><h6 class="text-xs font-bold text-blue-300 h-7">${data.pricing[1].price}</h6> <h6 class="text-xs font-bold text-blue-300">${data.pricing[1].plan}</h6></div>
                  <div class="bg-white p-5 rounded-2xl"><h6 class="text-xs font-bold text-blue-300 h-7">${data.pricing[2].price}</h6> <h6 class="text-xs font-bold text-blue-300">${data.pricing[2].plan}</h6></div>
                </div>
                <div class="flex justify-between items-center">
                  <div>
                    <h5 class="text-lg font-bold">Features</h5>
                    <ul class="mt-3" id="modal-feature-first">
                      <li>${data.features[1].feature_name}</li>
                      <li>${data.features[2].feature_name}</li>
                      <li>${data.features[3].feature_name}</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="text-lg font-bold">Integrations</h5>
                    <ul id="">
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div class="w-1/2 rounded-2xl p-4 bg-slate-300">
                <img class="h-2/3 rounded-2xl" src="${data.image_link[0]}" alt="">
                <h5 class="text-lg font-bold text-center mt-2">${data.input_output_examples[0].input}</h5>
                <p class="text-center mt-2">${data.input_output_examples[1].input}</p>
              </div>
            </div>
            <!-- modal action button  -->
            <div class="modal-action">
            </div>
          </div>
        </div>
    `;
    modalContainer.appendChild(modalDiv);
    
}




// loading function 
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('spinner');
    if(isLoading){
        loaderSection.classList.remove('hidden')
    }
    else{
        loaderSection.classList.add('hidden');
    }
}


// calling loadHubs 
loadHubs ();