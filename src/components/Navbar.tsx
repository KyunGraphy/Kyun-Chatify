import { Avatar, Button, Grid } from "@mui/material";
import Ava from "../images/ava1.jpg";

const Navbar = () => {
    return (
        <Grid className="navbar">
            <Button
                variant="text"
                sx={[
                    {
                        color: "white",
                        fontSize: "10px",
                        backgroundColor: "#7b68ee",
                    },
                    {
                        "&:hover": {
                            color: "#2f2d52",
                            backgroundColor: "white",
                        },
                    },
                ]}
            >
                Logout
            </Button>
            <Avatar alt="Simon King" src={Ava} />
            <div className="homeUser">Simon King</div>
        </Grid>
    );
};

export default Navbar;
