import Box from '@mui/material/Box'
import React from 'react'
import RecipeReviewCard from './RecipeReviewCard'

const Feed = () => {
  return (
    <Box flex={4} sx={{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
        padding:'2rem 0'
    }}>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
    </Box>
  )
}

export default Feed
