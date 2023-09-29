import { Avatar } from "@mui/material";
import Ava2 from "../images/ava2.jpg";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <Avatar alt="Simon King" src={Ava2} />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img
                    src="https://images.pexels.com/photos/18122232/pexels-photo-18122232/free-photo-of-bi-n-b-bi-n-d-i-d-ng-nh-ng-cai-gh-x-p.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Message;
