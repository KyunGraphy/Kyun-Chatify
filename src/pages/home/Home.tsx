import { Avatar, Box, Grid, TextField } from "@mui/material";
import { SlOptionsVertical } from "react-icons/sl";
import { IoCall, IoVideocam, IoSend, IoImageOutline } from "react-icons/io5";
import Ava1 from "../../images/ava1.jpg";
import Ava2 from "../../images/ava2.jpg";
import Ava3 from "../../images/ava3.jpg";
import Ava4 from "../../images/ava4.jpg";
import Ava5 from "../../images/ava5.jpg";
import "./home.css";

const Home = () => {
    return (
        <div className="homeContainer">
            <Grid className="homeBox">
                <Grid className="homeBar" sx={{ height: "12%" }}>
                    <Grid className="homeContact">
                        <div className="homeUser">
                            <Avatar alt="Simon King" src={Ava1} />
                            Simon King
                        </div>
                    </Grid>
                    <Grid className="homeChatTools homeChatToolsBar">
                        <div className="homeUser">
                            <Avatar alt="Steven Cook" src={Ava2} />
                            Steven Cook
                        </div>
                        <div className="homeTitle">Kyun Chatify</div>
                        <div className="chatTools">
                            <IoVideocam />
                            <IoCall />
                            <SlOptionsVertical />
                        </div>
                    </Grid>
                </Grid>
                <Grid className="homeBarContent" sx={{ height: "88%" }}>
                    <Grid
                        className="homeContact"
                        sx={{ flexDirection: "column", overflow: "auto" }}
                    >
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{ width: "100%" }}
                        >
                            <TextField
                                label="Find a user..."
                                variant="standard"
                                sx={{
                                    width: "100%",
                                    input: { color: "#ddd" },
                                }}
                            />
                        </Box>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava2} />
                            <p>
                                <strong>Steven Cook</strong>Let me check
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava3} />
                            <p>
                                <strong>Lisa</strong>See ya
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava4} />
                            <p>
                                <strong>Jennie</strong>I miss you
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava5} />
                            <p>
                                <strong>Scott Lang</strong>Kill him
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava2} />
                            <p>
                                <strong>Steven Cook</strong>Let me check
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava3} />
                            <p>
                                <strong>Lisa</strong>See ya
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava4} />
                            <p>
                                <strong>Jennie</strong>I miss you
                            </p>
                        </div>
                        <div className="homeChatUser">
                            <Avatar alt="Remy Sharp" src={Ava5} />
                            <p>
                                <strong>Scott Lang</strong>Kill him
                            </p>
                        </div>
                    </Grid>
                    <Grid className="homeChatTools homeChatToolsBox">
                        <div className="homeMessages">
                            <span>
                                <Avatar alt="Steven Cook" src={Ava2} />
                                <span className="message">Gud morning</span>
                            </span>
                            <span>
                                <Avatar alt="Steven Cook" src={Ava2} />
                                <span className="message">
                                    Nice to meet you
                                </span>
                            </span>
                            <span className="message owner">
                                Nice to meet you, too
                            </span>
                        </div>
                        <div className="messageType">
                            <input
                                className="homeMessageBox"
                                placeholder="Type your message..."
                            />
                            <span>
                                <IoImageOutline />
                                <IoSend />
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
