import { title } from "process";
import { useNavigate, useParams } from "react-router-dom";

export const Pagination = () => {
  const { page = "" } = useParams();
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`/search/${title}/${Number(page) + 1}`);
  };
  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };
  return (
    <div>
      <button type="button" onClick={handlePrevPage}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
};
