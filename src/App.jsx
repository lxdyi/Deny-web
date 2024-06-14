import { Routes, Route, BrowserRouter } from "react-router-dom";
import RootLayout from "./Root/RootLayout";
import Adhdhkar from "./Pages/Adhdhkar";
import Surah from "./Pages/Surah";
import Mahfuzat from "./Pages/Mahfuzat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Surah />} />
          <Route path="/adhdhkar" element={<Adhdhkar />} />
          <Route path="/mahfuzat" element={<Mahfuzat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
