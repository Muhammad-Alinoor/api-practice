const search = () => {
    const searchField = document.getElementById("search-field");
    const searchValue = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
}
const displaySearchResult = meals => {
    const mealContainer = document.getElementById("meal-container"); mealContainer.textContent = "";
    document.getElementById("search-field").value = '';
    // console.log(meals)
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="col">
            <div onclick = "loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        </div>
        `;
        mealContainer.appendChild(div);
    })


}
const loadMealDetails = mealIdentity => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIdentity}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}
const displayMealDetails = meals => {
    const mealDetails = document.getElementById("meal-details");
    // console.log(meals);
    // console.log(meal.strMeal);
    const div = document.createElement("div");
    mealDetails.textContent = "";
    div.classList.add("size-the-details");
    div.innerHTML = `
        <div class="card">
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meals.strMeal}</h5>
            <p class="card-text">${meals.strInstructions.slice(0, 250)}</p>
        </div>
    </div>
        `;
    mealDetails.appendChild(div);

}