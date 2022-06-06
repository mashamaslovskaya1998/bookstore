import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { bookAPI } from "../../services/bookService";
import { INewBooks, INewBooksApi } from "../../types";

export const initialState: INewBooks = {
  books: [],
  error: null,
  total: "0",
  status: "idle",
};

export const fetchBooks = createAsyncThunk<INewBooksApi>(
  "book/fetchBooks",
  async () => {
    const newBooks = await bookAPI.getNewBooks();
    console.log("newBooks:", newBooks);
    return newBooks;
  }
);

const bookReducer = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.status = "success";
      state.error = action.payload.error;
      state.total = action.payload.total;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error;
      state.status = "error";
    });
  },
});
export default bookReducer.reducer;
