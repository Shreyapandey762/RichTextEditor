import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import Counter from "../components/Counter";
import UserDataForm from "../components/UserDataForm";
import RichTextEditor from "../components/RichTextEditor";

export interface UserData {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const Home: React.FC = () => {
    

    const [triggerState, setTriggerState] = useState(false);

    return (
        <Box sx={{ padding: 3, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",width:'100vw' }}>
            <Grid container spacing={3} sx={{ width:'100%' }}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: 2, height: "100%" }}>
                        <Counter />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: 2, height: "100%" }}>
                        <RichTextEditor triggerState={triggerState}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <UserDataForm setTriggerState={setTriggerState}/>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
