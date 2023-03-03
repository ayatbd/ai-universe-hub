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
        console.log(data);

        const hubsDiv  = document.createElement('div');
        hubsDiv.classList.add("card", "w-96", "bg-base-100", "shadow-xl", "border", "p-3");
        
        hubsDiv.innerHTML = `
            <figure><img src="${data.image}" alt="Shoes" / ></figure>
            <div class="card-body">
                <h2 class="card-title">Features</h2>
                <p id="order-list" class="mb-3">
                    ${data.features.forEach(data =>{
                        const orderList = document.getElementById('order-list');
                        const ul = document.createElement('ul');
                        ul.innerHTML = `data`
                        orderList.appendChild(ul);
                        
                    })}
                </p>
                <div class="card-footer border-t flex justify-between items-center pt-3">
                    <div>
                        <h2 class="card-title">${data.name}</h2>
                        <div>
                            <i class="fa-solid fa-calendar-days"></i> ${data.published_in}
                        </div>
                    </div>
                    <button class="bg-red-300 text-red-500 p-1 rounded-full hover:bg-slate-200 fa-solid fa-arrow-right"></button>
                
                </div>

                
                
            </div
        `;
        hubsContainer.appendChild(hubsDiv);

    }
    // datas.forEach(data =>{});
}

loadHubs ();