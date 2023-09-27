import { Avatar } from "@mui/material";
import Ava2 from "../images/ava2.jpg";

const Chats = () => {
    return (
        <div>
            <div className="userChat">
                <Avatar alt="Simon King" src={Ava2} />
                <div className="userChatBox">
                    <div className="homeUser">Steve Cook</div>{" "}
                    <div className="homeUserContent">Got it</div>{" "}
                </div>
                <div className="chatOnlineBadge"></div>
            </div>
        </div>
    );
};

export default Chats;
