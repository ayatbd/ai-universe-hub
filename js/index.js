const loadHubs = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data.tools);
}

const displayHubs = hubs =>{
    // console.log(hubs);
    const hubsContainer = document.getElementById('hubs-container');
    for(const data of hubs){
        console.log(data.features);

        const hubsDiv  = document.createElement('div');
        hubsDiv.classList.add("card", "w-96", "bg-base-100", "shadow-xl", "border", "p-3");
        
        hubsDiv.innerHTML = `
            <figure><img src="${data.image}" alt="Shoes" / ></figure>
            <div class="card-body">
                <h2 class="card-title">Features</h2>
                <p class="mb-3">
                    ${data.features}
                </p>
                <div class="card-footer border-t">
                <h2 class="card-title mt-3">${data.name}</h2>
                </div>
                
                
            </div
        `;
        hubsContainer.appendChild(hubsDiv);

    }
    // datas.forEach(data =>{});
}

loadHubs ();