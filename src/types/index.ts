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
  email: string | null;
}

export interface IFavorites {
  favorites: IBook[];
}

export interface ICards {
  cards: IBook[];
}
