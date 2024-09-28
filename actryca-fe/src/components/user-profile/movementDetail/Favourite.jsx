import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
import { Star, Bookmark, EllipsisIcon, Ellipsis, CircleEllipsis, LucideEllipsis } from 'lucide-react';
import actorsData from "../../../utils/actorsData.json";


const calculateAge = (birthDate) => {
  const birth = new Date(birthDate.split("/").reverse().join("-"));
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const Favourite = () => {
  return (
    <Box className="flex items-center gap-9">
      <Grid container spacing={4}>
        {actorsData.map((actor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: 'relative' }} className="flex flex-col items-start rounded-2xl border border-primary-50">

              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: '100vw',
                    height: '300px',
                    objectFit: 'cover',
                  }}
                  image={actor.img}
                  alt={actor.name}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '50%',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: "#6A1B9A",
                    background: "#E3DAF3"
                  }}
                >
                  <Bookmark size={18} fill="#6A1B9A" />
                </Box>


                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                    backgroundColor: '#ffe6cf',
                    borderRadius: '16px',
                    padding: '4px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: "#ff7a00"
                  }}
                >
                  <Star size={16} fill="#ff7a00" />
                  <Typography variant="body2" sx={{ color: '#ff7a00', fontWeight: 'bold' }}>
                    {actor.rating || 'N/A'}
                  </Typography>
                </Box>
              </Box>

              <CardContent>

                <Box className="flex flex-row items-center  gap-2">
                  <Typography  variant="h5" className="text-primary-900 text-[14px] font-medium leading-6">
                    {actor.name}
                  </Typography>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <circle cx="3" cy="3" r="3" fill="#614B8B" />
                  </svg>
                  <Typography  variant="h5" className="text-primary-500 font-sans font-medium italic leading-6 text-[14px]">
                    {calculateAge(actor.birthDate)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favourite;
