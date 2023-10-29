// import Login from "./login";
import { AuthProvider } from "./auth/auth";
import RecipeList from "./RecipeList";


const Home = () => {
    return (
        <div className="home-container">
            <RecipeList />
        </div>
    );
};

export default Home;