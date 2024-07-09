const fetchAthkarId = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.id;
};

const getUpdatedAdhdhkar = async () => {
  try {
    const sleepId = await fetchAthkarId(
      "http://quranapp.somee.com/api/App/GetFirstAthkarSleeping"
    );
    const eveningId = await fetchAthkarId(
      "http://quranapp.somee.com/api/App/GetFirstAthkarEvening"
    );
    const morningId = await fetchAthkarId(
      "http://quranapp.somee.com/api/App/GetFirstAthkarMorning"
    );

    return [
      {
        name: "اذكار النوم",
        id: sleepId,
      },
      {
        name: "اذكار المساء",
        id: eveningId,
      },
      {
        name: "اذكار الصباح",
        id: morningId,
      },
    ];
  } catch (error) {
    console.error("Failed to fetch Athkar IDs:", error);
    return [
      {
        name: "اذكار النوم",
        id: 18,
      },
      {
        name: "اذكار المساء",
        id: 26,
      },
      {
        name: "اذكار الصباح",
        id: 4,
      },
    ];
  }
};

export default getUpdatedAdhdhkar;
