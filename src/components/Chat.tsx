import { Avatar, Grid } from "@mui/material";
import { SlOptionsVertical } from "react-icons/sl";
import { IoCall, IoVideocam } from "react-icons/io5";
import Ava from "../images/ava2.jpg";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return (
        <Grid className="chat">
            <Grid className="chatInfo">
                <span>
                    <Avatar src={Ava} alt="Avatar" />
                    Steve Cook
                </span>
                <h3>Kyun Chatify</h3>
                <div className="chatIcon">
                    <IoVideocam />
                    <IoCall />
                    <SlOptionsVertical />
                </div>
            </Grid>
            <Grid sx={{ height: "100%" }}>
                <Messages />
                <Input />
            </Grid>
        </Grid>
    );
};

export default Chat;
