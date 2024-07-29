"use client";
import ActorCard from "@/components/home/actors/ActorCard";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import actorsData from "../../utils/actorsData.json";

// const data = Array.from({ length: 40 }, (_, index) => index);

const Page = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const count = Math.ceil(actorsData.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedData = actorsData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box className="flex flex-col justify-center items-center padding gap-8 my-12">
      Page
      <Grid container spacing={4} className="flex justify-center">
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
    </Box>
  );
};

export default Page;
