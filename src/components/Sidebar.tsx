import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
    return (
        <Grid className="sidebar">
            <Navbar />
            <Search />
            <Grid className="userChatList">
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
                <Chats />
            </Grid>
        </Grid>
    );
};

export default Sidebar;
