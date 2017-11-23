var pizzaData = [
  {
	pizzaName: "The Main Event",
	description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", 
	price: 39.99},
  {
	pizzaName: "My Subways",
	description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",
	price: 21.99},
  {
	pizzaName: "Panda Express",
	description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",
	price: 16.88},
  {
	pizzaName: "Tex Mex",
	description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",
	price: 21.21
  }];

var menu = document.getElementsByClassName('content')[1];

var pizzaArray = document.getElementsByClassName('pizza');

function pizzaMaker(elem, pClass, context) {
	var pizzaPart = document.createElement(elem);
	pizzaPart.className = pClass;
	pizzaPart.innerHTML = '<span>' + context + '</span>';
	console.log(pizzaPart);
	return pizzaPart;
}

// for (var i = 0; i<pizzaData.length; i++){
// 	var newPizza = document.createElement('div');
// 	newPizza.className = 'pizza';

// 	var pName = document.createElement('p');
// 	pName.className = 'pizzaName';
// 	pName.innerHTML = '<span>' + pizzaData[i].pizzaName + '</span>';
// 	newPizza.appendChild(pName);

// 	var pDesc = document.createElement('p');
// 	pDesc.className = 'description';
// 	pDesc.innerHTML = '<span>' + pizzaData[i].description + '</span>';
// 	newPizza.appendChild(pDesc);

// 	var pPrice = document.createElement('p');
// 	pPrice.className = 'price';
// 	pPrice.innerHTML = '<span>' + pizzaData[i].price + '</span>';
// 	newPizza.appendChild(pPrice);

// 	menu.appendChild(newPizza);
// }

// for (var i = 0; i<pizzaData.length; i++){
// 	var newPizza = document.createElement('div');
// 	newPizza.className = 'pizza';

// 	var pName = pizzaMaker('p','pizzaName',pizzaData[i].pizzaName);
// 	newPizza.appendChild(pName);

// 	var pDesc = pizzaMaker('p','description',pizzaData[i].description);
// 	newPizza.appendChild(pDesc);

// 	var pPrice = pizzaMaker('p','price',pizzaData[i].price);
// 	newPizza.appendChild(pPrice);

// 	menu.appendChild(newPizza);
// }

for (var i = 0; i<pizzaData.length; i++){

	pizzaArray[i].innerHTML = "";

	var pName = pizzaMaker('p','pizzaName',pizzaData[i].pizzaName);
	pizzaArray[i].appendChild(pName);

	var pDesc = pizzaMaker('p','description',pizzaData[i].description);
	pizzaArray[i].appendChild(pDesc);

	var pPrice = pizzaMaker('p','price',pizzaData[i].price);
	pizzaArray[i].appendChild(pPrice);

}