import { Container, Grid, Modal } from '@mui/material';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import MovieCard from '../components/card/MovieCard';
import Layout from '../components/Layout';
import ModalCard from '../components/modal/ModalCard';
import { MovieListType, responseType } from '../types';
const Home = ({moviesList}:MovieListType) => {
  const [open, setOpen] = useState(false);
  const [choseMovie, setChoseMovie] = useState({});
  
  const handleOpen = (movie:responseType) => {setOpen(true),setChoseMovie(movie)};
  const handleClose = () => setOpen(false);
 
  return (
   <main>

  <Layout >
     <Container>
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {moviesList?.map((movie)=> <Grid onClick={()=>{handleOpen(movie)}} key={movie.id} item md={3} xs={12}>
    <MovieCard movie={movie}/>
    </Grid>)}
    </Grid>
   </Container>
   </Layout>
   <Modal
  open={open}
  onClose={handleClose}>

   <ModalCard movie={choseMovie}/>
  </Modal>
   </main>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps=async()=> {
  const res = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_0m5jc69n`)
  const data = await res.json()
  const {items:moviesList}=data
  console.log("moviesList",moviesList)
  

  return { props: { moviesList } }
}