import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/AppContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense, lazy } from "react";

// Lazy load components
const RootLayout = lazy(() => import("./Root/RootLayout"));
const MahfuzatLayout = lazy(() => import("./Root/MahfuzatLayout"));
const Adhdhkar = lazy(() => import("./Pages/Adhdhkar"));
const Surah = lazy(() => import("./Pages/Surah"));
const MahfuzatSurah = lazy(() => import("./Pages/MahfuzatSurah"));
const MahfuzatAdhdkar = lazy(() => import("./Pages/MahfuzatAdhdkar"));

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Suspense
          fallback={
            <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <CircularProgress color="success" />
            </div>
          }
        >
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
        </Suspense>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
