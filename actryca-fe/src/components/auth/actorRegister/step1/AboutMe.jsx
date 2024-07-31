import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

const AboutMe = ({ aboutText, setAboutText, handleClose }) => {
    const [draftText, setDraftText] = React.useState(aboutText);
    const maxChars = 2500;

    const handleDraftTextChange = (event) => {
        setDraftText(event.target.value);
    };

    const handleSave = () => {
        setAboutText(draftText);
        handleClose();
    };

    const handleCancel = () => {
        handleClose();
    };

    return (
        <Box className="flex flex-col justify-between overflow-hidden w-[519px] h-auto p-4">
            <Box className="flex-grow pl-0 pt-4 overflow-hidden">
                <TextField
                    multiline
                    rows={12}
                    fullWidth
                    variant="outlined"
                    value={draftText}
                    placeholder="Hakkımda yazabilirsin."
                    onChange={handleDraftTextChange}
                    inputProps={{
                        maxLength: maxChars,
                        style: {
                            padding: "8px 4px",
                            overflowY: 'auto', // Yatay kaydırma
                        }
                    }}
                    sx={{
                        height: "100%",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            padding: "8px 4px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiInputBase-input": {
                            padding: "0px",
                            overflowY: 'auto', // Yatay kaydırma
                            '&::-webkit-scrollbar': {
                                display: 'none', // Scrollbar'ı gizle
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'transparent',
                            },
                            '-ms-overflow-style': 'none', /* IE ve Edge için scrollbar'ı gizle */
                            'scrollbar-width': 'none', /* Firefox için scrollbar'ı gizle */
                        },
                    }}
                />
            </Box>
            <Box className="mt-4">
                <Typography className="text-right text-red-500">
                    {maxChars - draftText.length}
                </Typography>
            </Box>
            <Box className="flex justify-between mt-4">
                <Button variant="outlined" color="primary" onClick={handleCancel}>
                    Vazgeç
                </Button>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Kaydet
                </Button>
            </Box>
        </Box>
    );
};

export default AboutMe;
