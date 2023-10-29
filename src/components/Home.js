// import Login from "./login";
import { AuthProvider } from "./auth/auth";
import RecipeList from "./RecipeList";


const Home = () => {
    return (
        <div className="home-container">
            <RecipeList />
            <footer>Created by The Undevelopers</footer>
        </div>
    );
};

export default Home;