export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}
export interface INewBooksApi {
  books: IBook[];
  error: string;
  total: string;
}
export interface INewBooks {
  books: IBook[];
  error: any;
  total: string;
  status: RequestStatusType;
}
export interface IBookDetailsApi {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: { [key: string]: string };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}
export interface ISearchBooksApi extends INewBooksApi {
  page: string;
}

export interface IUserStore {
  isAuth: boolean;
  email: string | undefined;
  name: string | undefined;
  favorites: IBookDetailsApi[];
  password: string | undefined;
}

export interface IFavorites {
  favorites: IBook[];
}

export interface ICards {
  cards: IBookCard[];
  total: number;
  isLoading: boolean;
}
export interface IBookCard extends IBookDetailsApi {
  amount: number;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";

export interface IBooks {
  response: boolean | null;
  results: IBook[];
  totalResults: number;
  currentPage?: number;
  totalPages: number;
}
export interface ICart {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  quantity: number;
  totalPrice: string;
}
export interface ICartPage {
  results: ICart[];
  vat: number;
  sumTotal: number;
  total: number;
}
export interface ICartInfo {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  publisher: string;
  rating: string;
  authors: string;
}
export interface IBookCard extends IBookDetailsApi {
  amount: number;
}
export interface IBookApi {
  books: IBook[];
  error: any;
  status: RequestStatusType;
  total: string;
  result: IBookDetailsApi;
}
export interface IArguments {
  title: string;
  page: string;
}

export interface IresultBooksApi {
  error: any;
  page: string;
  total: string;
  books: IBook[];
}
