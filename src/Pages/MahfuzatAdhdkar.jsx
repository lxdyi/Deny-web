import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";

const apiUrl = "https://deen.somee.com/api/App/GetAllSavedAthkar"; // API base URL

const MahfuzatAdhdkar = () => {
  const { userId } = useContext(AppContext); // Correctly using useContext inside the component
  const [athkar, setAthkar] = useState([]); // State to hold the fetched data

  const fetchSavedAthkar = async () => {
    try {
      const response = await fetch(`${apiUrl}?UniqueId=${userId}`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Saved Athkar:", data); // Log the fetched data
        setAthkar(data); // Set the fetched data to state
      } else {
        console.error("Failed to fetch saved Athkar");
      }
    } catch (error) {
      console.error("Error fetching saved Athkar:", error);
    }
  };

  useEffect(() => {
    fetchSavedAthkar(); // Call the fetch function when the component mounts
  }, [userId]); // Dependency array to re-fetch when userId changes

  return (
    <div>
      <h1>Mahfuzat Adhdkar</h1>
    </div>
  );
};

export default MahfuzatAdhdkar;
