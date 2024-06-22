import { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../Context/AppContext";

const SaveAdhdhkar = () => {
  const apiUrl = "https://deen.somee.com/api/App/AddAthkarToArchive"; // Corrected API URL
  const label = { inputProps: { "aria-label": "Bookmark" } };
  const { userId } = useContext(AppContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkChange = async () => {
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("UniqueId", { userId }); // Ensure this is the correct user identifier
      formData.append("AthkarId", 123); // Replace 123 with the actual AthkarId you need to bookmark

      // Perform API call to save or remove bookmark
      const response = await fetch(apiUrl, {
        // Use the corrected apiUrl variable
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsBookmarked(!isBookmarked); // Toggle bookmark state on success
      } else {
        console.error("Failed to save bookmark");
      }
    } catch (error) {
      console.error("Error saving bookmark:", error);
    }
  };

  return (
    <Checkbox
      {...label}
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
      size="small"
      checked={isBookmarked}
      onChange={handleBookmarkChange}
    />
  );
};

export default SaveAdhdhkar;
