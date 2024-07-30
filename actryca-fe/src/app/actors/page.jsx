"use client";
import ActorCard from "@/components/home/actors/ActorCard";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Modal,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import actorsData from "../../utils/actorsData.json";
import { SlidersHorizontal, Search } from "lucide-react";
import { AccountCircle } from "@mui/icons-material";

const Page = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const itemsPerPage = 12;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setPage(1);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setPage(1);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredData = actorsData
    .filter(
      (actor) =>
        actor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === "" || actor.category === filter)
    )
    .sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOption === "popular") {
        return b.score - a.score;
      } else if (sortOption === "nameAsc") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "nameDesc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  const count = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box className="flex flex-col justify-center items-center padding gap-8 my-12">
      <Typography
        variant="h4"
        className="ml-2 font-bold font-dm-serif-text text-primary-900"
      >
        Oyuncular
      </Typography>
      <Box className=" w-full px-11">
        <Box className="center items-center !justify-between border-y-2 w-full my-1 ">
          <Button onClick={handleOpen}>
            <SlidersHorizontal strokeWidth={1.5} />
            <Typography
              variant="subtitle1"
              className="ml-2 font-bold text-primary-900"
            >
              {actorsData.length + " Sonuç"}
            </Typography>
          </Button>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              value={searchTerm}
              onChange={handleSearchChange}
              label="Search"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <Search sx={{ color: "action.active", mr: 1, my: 1 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <FormControl
            variant="standard"
            className="w-48 "
            sx={{
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "none",
              },
            }}
          >
            <InputLabel>Sırala</InputLabel>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              label="Sırala"
              className="h-10"
            >
              <MenuItem className="hover:bg-primary-100" value="newest">
                En Yeni
              </MenuItem>
              <MenuItem className="hover:bg-primary-100" value="popular">
                En Popüler
              </MenuItem>
              <MenuItem className="hover:bg-primary-100" value="nameAsc">
                Ada Göre (A/Z)
              </MenuItem>
              <MenuItem className="hover:bg-primary-100" value="nameDesc">
                Ada Göre (Z/A)
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container rowSpacing={4} className="flex justify-evenly w-full ">
        {paginatedData.map((actor, index) => (
          <Grid item key={index}>
            <ActorCard actor={actor} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>

      <Modal open={open} onClose={handleClose} className="center">
        <Box className="bg-white w-3/5 rounded-2xl p-8 flex flex-col gap-4">
          <Typography variant="h6" className="text-center mb-4">
            Filtre
          </Typography>
          <FormControl fullWidth className="gap-2">
            <Typography>Ülke</Typography>
            <Select value={filter} onChange={handleFilterChange}>
              <MenuItem value="">Hepsi</MenuItem>
              <MenuItem value="Turkey">Türkiye</MenuItem>
              {/* Diğer filtreleme seçenekleri */}
            </Select>
            <Typography>Şehir</Typography>
            <Select value={filter} onChange={handleFilterChange}>
              <MenuItem value="">Hepsi</MenuItem>
              <MenuItem value="Istanbul">İstanbul</MenuItem>
              {/* Diğer filtreleme seçenekleri */}
            </Select>

            <Typography>Cinsiyet</Typography>
            <Select value={filter} onChange={handleFilterChange}>
              <MenuItem value="">Hepsi</MenuItem>
              <MenuItem value="Kadın">Kadın</MenuItem>
              {/* Diğer filtreleme seçenekleri */}
            </Select>

            <Typography>Yaş Aralığı</Typography>
            <Box className="flex gap-2 w-full">
              <TextField
                value={filter}
                onChange={handleFilterChange}
                type="number"
                label="En Az"
                variant="outlined"
                fullWidth
              />
              <TextField
                value={filter}
                onChange={handleFilterChange}
                type="number"
                label="En Çok"
                variant="outlined"
                fullWidth
              />
            </Box>
          </FormControl>
          <Box className="flex justify-between mt-4">
            <Button onClick={handleClose}>Filtreyi Temizle</Button>
            <Button variant="contained" onClick={handleClose}>
              Uygula
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Page;
