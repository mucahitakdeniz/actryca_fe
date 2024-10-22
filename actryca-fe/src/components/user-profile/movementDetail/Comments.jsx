import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box, Grid, Modal, TextField, Button } from '@mui/material';
import { Pencil, Trash } from 'lucide-react';

const CommentCard = ({ actor, onEdit, onDelete }) => {
  return (
    <Card className="flex flex-col w-[297px] items-start gap-4 rounded-2xl border border-x-primary-50 px-4 py-6">
      <Box className="flex flex-col items-start gap-3">
        <CardMedia
          component="img"
          width="249"
          height="141"
          image={actor.img}
          alt={actor.name}
          className="w-[249px] h-[141px] rounded-[10px] object-cover"
        />
        <CardContent>
          <Box className="flex flex-row h-[60px] justify-between items-start">
            <Typography variant="h6" className="text-primary-900 font-sans text-[14px] font-bold capitalize leading-[22px]">
              {actor.name}
            </Typography>
            <Typography variant="body2" component="span" className="text-primary-500 font-sans text-[14px] font-medium leading-[22px] capitalize">
              3/Mayıs/2023
            </Typography>
          </Box>
          <Typography
            variant="body2"
            className="text-primary-900 font-sans text-[14px] font-medium leading-[22px]"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 8, 
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Enerjisi ve doğal oyunculuğu ekrana gerçekten yansıyor. Karaktere kattığı detaylar, rolü inanılmaz derecede inandırıcı kılıyor. Her sahnede farklı bir derinlik hissettiriyor. Bu detaylar oldukça büyüleyici. Her sahnede derinlemesine bir deneyim yaşatıyor ve izleyiciyi ekrana bağlıyor.
          </Typography>
        </CardContent>
      </Box>

      <Box className="flex w-full justify-end ">
        <IconButton onClick={() => onEdit(actor)}>
          <Pencil size={14} className="text-primary-500" />
        </IconButton>
        <IconButton onClick={() => onDelete(actor.id)}>
          <Trash size={14} className="text-[#ff004f]" />
        </IconButton>
      </Box>
    </Card>
  );
};

const Comments = ({ actorsData, onEdit, onDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);
  const [comment, setComment] = useState("");

  const handleOpenModal = (actor) => {
    setSelectedActor(actor);
    setComment(actor.comment); 
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <Grid container className="flex items-start justify-center gap-4 w-full">
        {actorsData.map((actor) => (
          <Grid item key={actor.id}>
            <CommentCard
              actor={actor}
              onEdit={handleOpenModal} 
              onDelete={onDelete}
            />
          </Grid>
        ))}
      </Grid>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">
            {selectedActor ? selectedActor.name : ''} - Yorumu Düzenle
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Yorumunuzu buraya yazabilirsiniz."
            value={comment} 
            onChange={handleCommentChange}
            inputProps={{
              style: { border: "none", color: "#36383C", textAlign: 'left' }, 
              className: "text-primary-900",
              sx: {
                "&::-webkit-scrollbar": {
                  width: "0px",
                  height: "0px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
              },
            }}
            sx={{
              height: "100%",
              width: "100%",
              border: "none",
              color: "primary.darkest",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                color: "primary.darkest",
              },
              "& .MuiInputBase-inputMultiline": {
                textAlign: 'left', 
              }
            }}
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

export default Comments;
