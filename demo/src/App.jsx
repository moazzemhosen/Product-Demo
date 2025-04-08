import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import ProtectedRoute from "./components/ProtectedRoute";
import DownloadTemp from "./pages/DownloadTemp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dataCollection" element={<PageOne />} />
          <Route path="/reportDashboard" element={<PageTwo />} />
          <Route path="/userManagement" element={<PageThree />} />
          <Route path="/otherSection" element={<PageFour />} />
          <Route path="/downloadtemplate" element={<DownloadTemp/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
