// *****---- Below are categories name showing function ****------

// Function load categories from api
const loadTreeCategories = () => {
    const url = `https://openapi.programming-hero.com/api/categories`;
    fetch(url)
        .then((res) => res.json())
        .then(cat => {
            console.log("kire")
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
                <button onclick=loadByCategories(${catName.id}) class="btn bg-transparent border-0 rounded-full text-[#1f2937] font-base text-normal p-0 hover:bg-transparent hover:border-0 hover:shadow-none">${catName.category_name}</button>
            </div>
        `;

        // 4. load the new create element div
    categoriesContainer.append(categoryDiv)

    });
}



// *****---- Below are card showing function ****------

// Function load categories plants on click categories
const loadByCategories = async(id) => {
    let url = `https://openapi.programming-hero.com/api/category/${id}`

    const res = await fetch(url)
    const catGroup = await res.json()
    displayByCatTree(catGroup.plants)
}

// Function Display categories plants at right side onclick the left side categories 
const displayByCatTree = (plants) => {
    // 1. get the container id
    const displayByCatContainer = document.getElementById('display-catdetails-container')
    displayByCatContainer.innerHTML = ""

    // 2. loop through all plants
    plants.forEach(plant => {
        console.log("id")
        console.log(plant.id)
            // 3. create child element inside the container to show the details
            const catDetailsInnerDiv = document.createElement("div")
            catDetailsInnerDiv.innerHTML = `
                <div class="single-card p-5 shadow-lg rounded-lg bg-white">
                        <div>
                            <img class="w-full h-100" src="${plant.image}" />
                            <h3 class="font-bold text-base pt-3 pb-3">${plant.name}</h3>
                            <p class="font-normal text-[14px] text-gray-500">${plant.description}</p>
                        </div>
                        
                        <div class="flex justify-between items-center gap-4 pt-3">
                            <h3 class="bg-[#dcfce8] py-1 px-2 rounded-full text-[#17803d]">${plant.category}</h3>
                            <h2>${plant.price}</h2>
                        </div>

                        <button class="btn btn-full w-full rounded-full bg-[#17803d] text-white p-3 mt-4">Add to card</button>

                </div>
            
            `;

        // 4. append the newly created child to the container
        displayByCatContainer.append(catDetailsInnerDiv)

    });
}



loadTreeCategories()