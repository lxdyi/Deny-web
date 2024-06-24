import { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../Context/AppContext";

const SaveAdhdhkar = ({ adhdhkarid }) => {
  const apiUrl = "https://deen.somee.com/api/App/AddAthkarToArchive";
  const label = { inputProps: { "aria-label": "Bookmark" } };
  const { userId } = useContext(AppContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkChange = async () => {
    try {
      const formData = new FormData();
      formData.append("UniqueId", userId);
      formData.append("AthkarId", adhdhkarid);

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsBookmarked(!isBookmarked);
      } else {
        console.error("Failed to save bookmark");
      }
    } catch (error) {
      console.error("Error saving bookmark:", error);
    }
  };
  const handleClick = (e) => {
    e.stopPropagation(); // Stop the event here on click
  };

  return (
    <Checkbox
      {...label}
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
      size="small"
      checked={isBookmarked}
      onChange={handleBookmarkChange}
      onClick={handleClick}
    />
  );
};

export default SaveAdhdhkar;
