import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import Counter from "../components/Counter";
import UserDataForm from "../components/UserDataForm";
import RichTextEditor from "../components/RichTextEditor";

const Home: React.FC = () => {
    return (
        <Box sx={{ padding: 3, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid container spacing={3} sx={{ maxWidth: "90vw" }}>
                {/* Counter Component - Top Left */}
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: 2, height: "100%" }}>
                        <Counter />
                    </Paper>
                </Grid>

                {/* Rich Text Editor - Top Right */}
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: 2, height: "100%" }}>
                        <RichTextEditor />
                    </Paper>
                </Grid>

                {/* User Data Form - Full Width Below */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <UserDataForm />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
