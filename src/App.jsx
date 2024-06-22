// src/App.js

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/AppContext";
import RootLayout from "./Root/RootLayout";
import MahfuzatLayout from "./Root/MahfuzatLayout";
import Adhdhkar from "./Pages/Adhdhkar";
import Surah from "./Pages/Surah";
import MahfuzatSurah from "./Pages/MahfuzatSurah";
import MahfuzatAdhdkar from "./Pages/MahfuzatAdhdkar";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Surah />} />
            <Route path="/adhdhkar" element={<Adhdhkar />} />
          </Route>
          <Route path="mahfuzat" element={<MahfuzatLayout />}>
            <Route index element={<MahfuzatSurah />} />
            <Route path="mahfuzatAdhdkar" element={<MahfuzatAdhdkar />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
