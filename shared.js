function setChecklist(recipe) {
  document.querySelector('#checklist').style.display = 'block'
  document.querySelector('#checklist__title').innerText = `${recipe.title}`

  recipe.ingredients.forEach(ingre => {
    let haveIngredient = checkIngredientInHand(ingre)
    document.querySelector('#checklist__list').innerHTML += `
      <li id='${ingre}'  class='${haveIngredient ? 'strike' : ''}'>${ingre}</li>
    `
  });
}

function checkIngredientInHand(ingreName) {
  let ingredients = JSON.parse(localStorage.getItem('ingredients'))
  let index = ingredients.findIndex(ingre => ingre == ingreName)
  return index > -1 
}

function checkIngredientInRecipe(ingreName) {
  let recipe = JSON.parse(localStorage.getItem('recipe'))
  let index = recipe.ingredients.findIndex(ingre => ingre == ingreName)
  return index > -1
}

function addIngredientToStorage(ingreName) {
  let ingredients = JSON.parse(localStorage.getItem('ingredients'))
  ingredients.push(ingreName)
  localStorage.setItem('ingredients', JSON.stringify(ingredients))

  let checklistItems = Array.from(document.querySelector('#checklist__list').children)
  let item = checklistItems.find(checkItem => checkItem.id == ingreName)
  item.classList.add('strike')
}