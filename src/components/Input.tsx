import { IoImageOutline, IoAttachOutline } from "react-icons/io5";

const Input = () => {
    return (
        <div className="input">
            <input
                className="inputField"
                type="text"
                placeholder="Type your message..."
            />
            <div className="send">
                <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    id="imgInput"
                />
                <label
                    htmlFor="imgInput"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <IoImageOutline style={{ cursor: "pointer" }} />
                </label>
                <input type="file" style={{ display: "none" }} id="fileInput" />
                <label
                    htmlFor="fileInput"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <IoAttachOutline style={{ cursor: "pointer" }} />
                </label>
                <button className="sendBtn">Send</button>
            </div>
        </div>
    );
};

export default Input;
