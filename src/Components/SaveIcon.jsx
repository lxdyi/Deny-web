import { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../Context/AppContext"; // Import AppContext
const SaveIcon = ({ surahId, apiUrl }) => {
  const label = { inputProps: { "aria-label": "Bookmark" } };
  const { userId } = useContext(AppContext);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("UniqueId", "user376130");
    formData.append("QuranId", surahId);

    fetch(apiUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Surah saved successfully!");
        } else {
          response
            .text()
            .then((text) => console.error("Failed to save surah:", text));
        }
      })
      .catch((error) => {
        console.error("Error saving surah:", error);
      });
  };

  return (
    <Checkbox
      {...label}
      icon={<BookmarkBorderIcon />}
      checkedIcon={<BookmarkIcon />}
      size="small"
      onChange={handleSave}
    />
  );
};

export default SaveIcon;
