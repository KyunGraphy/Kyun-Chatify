import { Box, Grid, TextField } from "@mui/material";

const Search = () => {
    return (
        <Grid className="search">
            <Grid className="searchForm">
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ width: "100%" }}
                >
                    <TextField
                        id="standard-basic"
                        placeholder="Find your chatify..."
                        variant="standard"
                        autoComplete="off"
                        sx={{
                            width: "100%",
                            padding: "0.5em",
                            input: {
                                color: "white",
                            },
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Search;
