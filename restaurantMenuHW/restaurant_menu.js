const breakfastMenu = ['Pancakes - $89', 'Eggs Benedict - $134', 'Oatmeal - $70', 'Frittata - $110'];
const mainCourseMenu = ['Steak - $560', 'Pasta - $230', 'Burger - $180', 'Salmon $351'];
const dessertMenu = ['Cake - $80', 'Ice Cream - $40', 'Pudding - $30', 'Fruit Salad - $25'];

const breakfastMenuItemsHTML = breakfastMenu
    .map((item, index) => 
        `<p>Item ${index + 1}: ${item}</p>`)
    .join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;