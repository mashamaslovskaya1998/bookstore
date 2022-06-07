import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { bookAPI } from "../../services/bookService";
import {
  IBookApi,
  IBookDetailsApi,
  INewBooksApi,
  IresultBooksApi,
  IArguments,
} from "../../types";

export const initialState: IBookApi = {
  books: [],
  error: null,
  total: "0",
  status: "idle",
  result: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
};

export const fetchBooks = createAsyncThunk<INewBooksApi>(
  "book/fetchBooks",
  async () => {
    const newBooks = await bookAPI.getNewBooks();
    console.log("newBooks:", newBooks);
    return newBooks;
  }
);
export const fetchBookDetails = createAsyncThunk<IBookDetailsApi, string>(
  "books/fetchBookDetails",
  async (id) => {
    const bookDetails = await bookAPI.getBookDetails(id);
    return bookDetails;
  }
);
export const fetchBooksBySearch = createAsyncThunk<IresultBooksApi, IArguments>(
  "books/fetchBooksBySearch",
  async ({ title, page }) => {
    const resultBooks = await bookAPI.getBooksBySearch(title, page);
    return resultBooks;
  }
);

const bookReducer = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = "loading";
      state.error = null;
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
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.status = "success";
      state.total = action.payload.total;
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, action) => {
      state.error = action.error;
      state.status = "error";
    });
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.result = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBookDetails.rejected, (state) => {
      state.status = "loading";
      state.error = null;
    });
  },
});
export default bookReducer.reducer;
