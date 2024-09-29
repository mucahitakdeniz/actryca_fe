import React, { useState } from 'react';
import { Modal, Box, Typography, IconButton, Button, Stack, TextField, Divider } from '@mui/material';
import { Star } from 'lucide-react';

const GivePointModal = ({ open, onClose, actorName }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleRating = (index) => {
        setRating(index);
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <Box
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[882px] h-[544px] bg-white p-4 rounded-2xl border border-primary-50 padding"
                style={{ outline: 'none' }}
            >
                <Box className="flex flex-col items-center gap-14 pb-6">
                
                    <Typography id="modal-title" className="text-primary-900 align-center font-dm-serif-text text-[32px] leading-8 uppercase mt-4">
                    {actorName.toLocaleUpperCase('tr-TR')}
                    </Typography>
                    <Stack className="flex flex-row items-center self-stretch text-left justify-between ">
                        <Typography className="text-name-200 font-sans text-[20px] font-medium leading-6 capitalize">
                            Puanla
                        </Typography>
                        <Stack className="flex flex-row items-center gap-2 m-auto">
                            {[...Array(5)].map((_, index) => (
                                <IconButton key={index} onClick={() => handleRating(index + 1)}>
                                    <Star className={index < rating ? 'text-orange-500' : 'text-gray-300'} />
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
                <Divider />
                <Box className="flex flex-col justify-between items-start">
                    <TextField
                        fullWidth
                        multiline
                        rows={10}
                        placeholder="Yorum eklemek ister misin?"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        inputProps={{ maxLength: 300 }}
                        className="mb-4 p-2 border rounded-lg"
                        sx={{
                            height: "100%",
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                                padding: "8px 0px",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "& .MuiInputBase-input": {
                                padding: "0px",
                                overflowY: 'auto',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'transparent',
                                },
                                '-ms-overflow-style': 'none',
                                'scrollbar-width': 'none',
                            },
                        }}
                    />
                    <Box className="flex flex-row items-center justify-between w-full">
                        <Typography className="text-left text-name-200 font-sans text-[20px] font-normal  leading-6 mb-4 w-full">
                            {300 - comment.length} karakter kaldı
                        </Typography>

                        <Button
                            onClick={onClose}
                            variant="contained"
                            className=" bg-primary-600 text-white hover:bg-primary-700 px-8 py-2 rounded-lg"
                        >
                            Kaydet
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default GivePointModal;

