import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Box, Modal, TextField, Button } from '@mui/material';
import { Pencil, Trash } from 'lucide-react';

const RatingCard = ({ actor, onEdit, onDelete }) => {
  const handleDelete = () => {
    onDelete(actor.id);
  };

  const handleEdit = () => {
    onEdit(actor); 
  };

  return (
    <Card className="flex flex-col w-[297px] items-center rounded-2xl border border-x-primary-50 p-4">
      <Box className="flex flex-row items-center">
        <CardMedia
          component="img"
          height="120"
          image={actor.img}
          alt={actor.name}
          className="w-[100px] h-[120px] rounded-[10px]"
        />
        <CardContent>
          <Box className="flex h-[90px] flex-col justify-between items-start">
            <Typography variant="h6" className="text-primary-900 font-sans text-[16px] font-medium capitalize overflow-ellipsis">
              {actor.name}
            </Typography>
            <Typography variant="h6" component="span" sx={{ color: '#ff9800' }}>
              ★ <span className="text-primary-900 font-sans text-[16px] font-medium capitalize"> {actor.score}</span>
            </Typography>
            <Typography variant="h6" component="span" className="text-primary-500 font-sans text-[14px] font-medium leading-[22px]">
              4/Mayıs/2024
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {actor.date}
          </Typography>
        </CardContent>
      </Box>

      <Box className="flex w-full justify-end items-center">
        <IconButton onClick={handleEdit}>
          <Pencil size={14} className="text-primary-500" />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <Trash size={14} className="text-[#ff004f]" />
        </IconButton>
      </Box>
    </Card>
  );
};

const Rating = ({ actorsData, onEdit, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);

  const handleOpenModal = (actor) => {
    setSelectedActor(actor);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    onDelete(id); 
  };

  return (
    <>
      <Grid container className="justify-center gap-4 w-full">
        {actorsData.map((actor) => (
          <RatingCard
            key={actor.id}
            actor={actor}
            onEdit={handleOpenModal} 
            onDelete={handleDelete}
          />
        ))}
      </Grid>

     
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {selectedActor ? `${selectedActor.name} Puanını Düzenle` : 'Puanını Düzenle'}
          </Typography>
          <TextField
            fullWidth
            label="Adı"
            value={selectedActor ? selectedActor.name : ''}
            sx={{ mt: 2 }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            label="Skor"
            defaultValue={selectedActor ? selectedActor.score : ''}
            sx={{ mt: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleCloseModal} variant="contained">
              Kaydet
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Rating;
