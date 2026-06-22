import breakfastTable from './assets/food1.jpg'
import './App.css'
export default function Home() {
    return (
        <section className="home">
            <div className="hero">
            <img src={breakfastTable} alt="Breakfast Table" className="hero-image" />
            <div className="hero-text">
                <h1>Welcome to Tiffany's Kitchen</h1>
                <p>Simple food, beautiful moments. Made fresh daily!</p>
                <a href="/menu" className="btn">View Menu</a>

                </div>
            </div>

            <div className="features">
                <div className="feature">
                    <h3>Fresh Ingredients</h3>
                    <p>We use only the freshest ingredients in our dishes.</p>
                </div>
                <div className="feature">
                    <h3>Cozy Space</h3>
                    <p>Enjoy your meal in a warm and welcoming environment.</p>
                </div>
                <div className="feature">
                    <h3>Delicious Taste</h3>
                    <p>Our chefs create mouth-watering dishes every day.</p>
                </div>
                <div className="feature">
                    <h3>Fast Service</h3>
                    <p>Walk-ins welcome!</p>
                </div>
            </div>
        </section>
    )
}
