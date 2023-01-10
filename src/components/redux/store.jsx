import {  configureStore } from '@reduxjs/toolkit'

import FavoritesSlice from './slice/favorites'


export const store = configureStore({
  reducer: { 
    favorites: FavoritesSlice.reducer
  }
})