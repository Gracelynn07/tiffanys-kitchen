import './App.css'
import breakfastTable from './assets/food1.jpg'
import burgerFries from './assets/food2.jpg'
import pancakeBlueberry from './assets/food3.jpg'
import pasta from './assets/food4.jpg'
import salad from './assets/food5.jpg'
import sandwich from './assets/food6.jpg'
import steak from './assets/food7.jpg'
import soup from './assets/food8.jpg'
import dessert from './assets/food9.jpg'

export default function Menu() {
    return (
        <section className="page">
            <h2>Menu</h2>
            <div className="menu-grid">

                <div className="menu-item">
                    <img src={breakfastTable} alt="Table full of breakfast food" />
                    <div className="menu-info">
                        <h3>Morning Spread</h3>
                        <p>Eggs, pastries, fruit + fresh coffee</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={burgerFries} alt="Burger and fries" />
                    <div className="menu-info">
                        <h3>Classic Burger</h3>
                        <p>Beef patty, cheddar + crispy fries</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={pancakeBlueberry} alt="Pancake with blueberries" />
                    <div className="menu-info">
                        <h3>Blueberry Pancakes</h3>
                        <p>Fluffy stack, maple syrup, berries</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={pasta} alt="Pasta" />
                    <div className="menu-info">
                        <h3>Homemade Pasta</h3>
                        <p>Freshly made pasta with seasonal sauce</p>
                    </div>
                </div>
                <div className="menu-item">
                    <img src={salad} alt="Salad" />
                    <div className="menu-info">
                        <h3>Fresh Garden Salad</h3>
                        <p>Fresh greens with seasonal vegetables and dressing</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={sandwich} alt="Sandwich" />
                    <div className="menu-info">
                        <h3>Club Sandwich</h3>
                        <p>Ham, turkey, lettuce, tomato, and mayo</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={steak} alt="Steak" />
                    <div className="menu-info">
                        <h3>Grilled Steak</h3>
                        <p>Juicy steak with garlic butter and herbs</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={soup} alt="Soup" />
                    <div className="menu-info">
                        <h3>Seasonal Soup</h3>
                        <p>Warm and comforting soup made with fresh ingredients</p>
                    </div>
                </div>

                <div className="menu-item">
                    <img src={dessert} alt="Dessert" />
                    <div className="menu-info">
                        <h3>Decadent Dessert</h3>
                        <p>Sweet treats to finish your meal</p>
                    </div>
                </div>
            </div>

        </section>
    )
}