import { FavoriteList } from "../components/FavoriteList/FavoriteList";

export const FavoritesBook = () => {
  // const [newFavorite, setNewFavorite] = useState<INewFavoritesApi>({
  //   favorites: [],
  //   error: "",
  //   total: "",
  // });

  // useEffect(() => {
  //   bookAPI.getNewBooks().then((favorites) => {
  //     setNewFavorite(favorites);
  //   });
  // }, []);
  return <FavoriteList />;
};
