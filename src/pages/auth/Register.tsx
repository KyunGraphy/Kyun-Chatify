import { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import {
    makeStyles,
    Box,
    Button,
    TextField,
} from "../../components/mui-components";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import addImg from "../../images/addImg.png";

const useStyles = makeStyles(() => ({
    button: {
        width: "70%",
    },
}));

const Register = () => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    return (
        <div className="authContainer">
            <div className="authBox">
                <div className="authTitle">Kyun Chatify</div>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "70%" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Display Name" variant="standard" />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "70%" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Account" variant="standard" />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "70%" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Password"
                        variant="standard"
                        type="password"
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "70%" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Confirm Password"
                        variant="standard"
                        type="password"
                    />
                </Box>
                <input
                    style={{ display: "none" }}
                    accept="image/*"
                    type="file"
                    id="authAva"
                />
                <label htmlFor="authAva" className="authAva">
                    <img src={addImg} alt="" />
                    <span>Add an avatar</span>
                </label>
                {loading ? (
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ justifyContent: "center" }}
                    >
                        <LoadingButton
                            loading
                            variant="outlined"
                            className={classes.button}
                            sx={{
                                background: "#7b68ee",
                            }}
                        >
                            Submit
                        </LoadingButton>
                    </Stack>
                ) : (
                    <Button
                        variant="contained"
                        size="medium"
                        className={classes.button}
                        sx={{
                            background: "#7b68ee",
                        }}
                        onClick={() => setLoading(true)}
                    >
                        Sign Up
                    </Button>
                )}
                <p>
                    You have an account? <Link to="/login">Login</Link>{" "}
                </p>
            </div>
        </div>
    );
};

export default Register;
