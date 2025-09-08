// *****---- Below are categories name showing function ****------

// Function load categories from api
const loadTreeCategories = () => {
    const url = `https://openapi.programming-hero.com/api/categories`;
    fetch(url)
        .then((res) => res.json())
        .then(cat => {
            displayTreeCategories(cat.categories)
        })
}

// Function Display Categories name on left side
const displayTreeCategories = (categoryName) => {
    
    // 1. get the container of the section/column
    const categoriesContainer = document.getElementById('tree-categories-container')
    categoriesContainer.innerHTML = ""

    // loop through all categories
    categoryName.forEach(catName => {
        //3. create child for each category
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
            <div>
                <button id="category-btn-${catName.id}" onclick=loadByCategories(${catName.id}) class="category-btns bg-transparent border-0 rounded-full text-[#1f2937] font-base text-normal p-4 text-left hover:bg-transparent hover:border-0 hover:shadow-none">${catName.category_name}</button>
            </div>
        `;

        // 4. load the new create element div
    categoriesContainer.append(categoryDiv)

    });
}



// *****---- Below are card showing function ****------

// Function load categories plants on click categories on right side
const loadByCategories = async(id) => {
    let url = `https://openapi.programming-hero.com/api/category/${id}`

    const res = await fetch(url)
    const catGroup = await res.json()
    removeActive();
    const btnActive = document.getElementById(`category-btn-${id}`)
    btnActive.classList.add('active')
    displayByCatTree(catGroup.plants)
}

const removeActive = () => {
    const plantButton = document.querySelectorAll('.category-btns')
    plantButton.forEach(activeBtn => {
        activeBtn.classList.remove('active')
    })
}

// Function Display categories plants at right side onclick the left side categories 
const displayByCatTree = (plants) => {
    // 1. get the container id
    const displayByCatContainer = document.getElementById('display-catdetails-container')
    displayByCatContainer.innerHTML = ""

    // 2. loop through all plants
    plants.forEach(plant => {
            // 3. create child element inside the container to show the details
            const catDetailsInnerDiv = document.createElement("div")
            catDetailsInnerDiv.innerHTML = `
                <div class="single-card p-5 shadow-lg rounded-lg bg-white">
                        <div>
                            <img class="w-full h-100 object-cover" src="${plant.image}" />
                            <h3 onclick="loadPlantDetails(${plant.id})" class="plant-name font-bold text-base pt-3 pb-3">${plant.name}</h3>
                            <p class="font-normal text-[14px] text-gray-500">${plant.description}</p>
                        </div>
                        
                        <div class="flex justify-between items-center gap-4 pt-3">
                            <h3 class="bg-[#dcfce8] py-1 px-2 rounded-full text-[#17803d]">${plant.category}</h3>
                            <h2 class="plant-price">${plant.price}</h2>
                        </div>

                        <button class="btn-add-cart btn btn-full w-full rounded-full bg-[#17803d] text-white p-3 mt-4">Add to card</button>

                </div>
            
            `;

        // 4. append the newly created child to the container
        displayByCatContainer.append(catDetailsInnerDiv)

    });

    // IF Add to cart button clicks this code will execute
    // const addCartBtns = document.querySelectorAll('.btn-add-cart');
    // addCartBtns.forEach(button => {
    //     button.addEventListener('click', function() {
    //         const card = button.closest('.single-card');
    //         const plantName = card.querySelector('.plant-name').innerText;
    //         const plantPrice = card.querySelector('.plant-price');
    //         const newPrice = parseInt(plantPrice.innerText)

    //         alert(`Added ${plantName} (${plantPrice.innerText}) to the cart`);

            

    //         const sidebarContentDiv = document.getElementById('sidebar-cart-div');
    //         const sidebarTreeName = document.getElementById('added-tree-name');
    //         const sidebarTreePrice = document.getElementById('added-tree-price');
    //         let totalPrice = document.getElementById('total-price');
    //         const sidebarDelete = document.getElementById('delete-icon');
            
    //         // Clone the sidebar-cart-div
    //         const sidebarContainer = document.getElementById('sidebar-container');
    //         let newSidebarContentDiv = sidebarContentDiv.cloneNode(true);
    //         sidebarContainer.classList.remove('hidden');

    //         // update the clone block with new data
    //         sidebarTreeName.innerText = plantName;
    //         sidebarTreePrice.innerText = plantPrice.innerText;
    //         totalPrice.innerText = newPrice

    //         //total price
    //         //newPrice = newPrice + newPrice

    //         // append the new call history block to the parent
    //         sidebarContentDiv.parentNode.append(newSidebarContentDiv)

    //     });
    // });




}


// *****---- Below are card showing function ****------

// function load plant details
const loadPlantDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`

    const res = await fetch(url)
    const wordDetails = await res.json()
    displayPlantDetails(wordDetails.plants)
}

const displayPlantDetails = (plant) => {

    // 1. get the container id
    const modalContainer = document.getElementById('modal-container')
    modalContainer.innerHTML = `
    
        <div>
                <h2 class="font-xl font-bold text-[#000] pb-2">${plant.name}</h2>
                <img class="rounded-xl" src="${plant.image}" />
                <p class="font-base text-[#000] font-bold mt-3">Category: <span class="font-base font-normal text-gray-400">${plant.category}</span></p>
                <p class="font-base text-[#000] font-bold mt-3">price: <span class="font-base font-normal text-gray-400">${plant.price}</span></p>
                <p class="font-base text-[#000] font-bold mt-3">Description: <span class="font-base font-normal text-gray-400">${plant.description}</span>
                </p>
        </div>
    `;
    document.getElementById('plant_modal').showModal()
    
}

// *****---- Below are all plant showing function ****------
const loadAllPlant = () => {
    const url = `https://openapi.programming-hero.com/api/plants`;

    fetch(url)
        .then(res => res.json())
        .then(allPlant => {
            displayByCatTree(allPlant.plants);
        })
};




// *****---- Below are Add to cart button funcitons ****------


// calling the loadTreeCategories() to show left side menu
loadTreeCategories()

// calling the loadAllPlant() to show all plants when page loads
loadAllPlant()