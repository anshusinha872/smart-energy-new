import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./components/Desktop";
import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import Settings from "./components/Settings";
import Reports from "./components/Reports";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Pricing from "./components/Pricing";
import Desktop1 from "./components/Desktop1";
import ThankYou from "./components/ThankYou";
import ThankYou1 from "./components/ThankYou1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/alerts":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/reports":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-10":
        title = "";
        metaDescription = "";
        break;
      case "/thank-you":
        title = "";
        metaDescription = "";
        break;
      case "/thank-you1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/desktop-10" element={<Desktop1 />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/thank-you1" element={<ThankYou1 />} />
    </Routes>
  );
}
export default App;
