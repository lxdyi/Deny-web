import { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { useSavedState } from "../hooks/useSavedState"; // Import the custom hook

const SaveIcon = ({ surahId, apiUrl }) => {
  const label = { inputProps: { "aria-label": "Bookmark" } };
  const { userId } = useContext(AppContext);
  const storageKey = `saved-${userId}-${surahId}`;
  const [isChecked, setIsChecked] = useSavedState(storageKey, false);

  const handleSave = async (e) => {
    e.stopPropagation();
    setIsChecked(current => !current); // Optimistically toggle the state
    try {
      const formData = new FormData();
      formData.append("UniqueId", userId);
      formData.append("QuranId", surahId);

      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Save successful:", response.data);
      setIsChecked(true); // Confirm checkbox is checked on successful save
    } catch (error) {
      console.error("Error saving:", error);
      setIsChecked(false); // Revert checkbox on error
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
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
      onChange={handleSave}
      onClick={handleClick}
      checked={isChecked}
    />
  );
};

export default SaveIcon;


