import { Box, TextField, Button, Typography } from "@mui/material";
import { useState, useEffect, ChangeEvent } from "react";

interface UserData {
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
}

const UserDataForm: React.FC = () => {
    const [userData, setUserData] = useState<UserData>(() => {
        const savedData = localStorage.getItem("userData");
        return savedData ? JSON.parse(savedData) : { id: Date.now(), name: "", address: "", email: "", phone: "" };
    });
    const [isDirty, setIsDirty] = useState<boolean>(false);

    useEffect(() => {
        window.onbeforeunload = isDirty ? () => true : null;
        return () => {
            window.onbeforeunload = null;
        };
    }, [isDirty]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDirty(true);
        setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave = () => {
        localStorage.setItem("userData", JSON.stringify(userData));
        setIsDirty(false);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2, maxWidth: 400 }}>
            <Typography variant="h5">User Data Form</Typography>
            <TextField label="Name" name="name" value={userData.name} onChange={handleChange} fullWidth />
            <TextField label="Address" name="address" value={userData.address} onChange={handleChange} fullWidth />
            <TextField label="Email" name="email" value={userData.email} onChange={handleChange} fullWidth />
            <TextField label="Phone" name="phone" value={userData.phone} onChange={handleChange} fullWidth />
            <Button variant="contained" onClick={handleSave}>Save</Button>
        </Box>
    );
};

export default UserDataForm;
