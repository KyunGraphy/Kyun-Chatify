import Chat from "../../components/Chat";
import Sidebar from "../../components/Sidebar";
import "./home.css";
import { Grid } from "@mui/material";

const Home = () => {
    return (
        <Grid className="home">
            <Grid className="homeContainer" sx={{ boxShadow: 3 }}>
                <Sidebar />
                <Chat />
            </Grid>
        </Grid>
    );
};

export default Home;
