import { useContext, useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../Context/AppContext";
import { useSavedState } from "../hooks/useSavedState"; // Import the custom hook

const SaveAdhdhkar = ({ adhdhkarid }) => {
  const apiUrl = "http://quranapp.somee.com/api/App/AddAthkarToArchive";
  const label = { inputProps: { "aria-label": "Bookmark" } };
  const { userId } = useContext(AppContext);
  const storageKey = `saved-${userId}-${adhdhkarid}`;
  const [isBookmarked, setIsBookmarked] = useSavedState(storageKey, false);

  const handleBookmarkChange = async () => {
    setIsBookmarked((current) => !current); // Optimistically toggle the state
    try {
      const formData = new FormData();
      formData.append("UniqueId", userId);
      formData.append("AthkarId", adhdhkarid);

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to save bookmark");
      }
      setIsBookmarked(true); // Confirm checkbox is checked on successful save
    } catch (error) {
      console.error("Error saving bookmark:", error);
      setIsBookmarked(false); // Revert checkbox on error
    }
  };

  const handleClick = (e) => {
    e.stopPropagation(); // Stop the event here on click
  };

  return (
    <Checkbox
      sx={{
        color: "default",
        "&.Mui-checked": {
          color: "#03AA77",
        },
      }}
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
