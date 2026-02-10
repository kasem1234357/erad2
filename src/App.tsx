import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AccountingServices from "./pages/AccountingServices";
import VATConsultant from "./pages/VATConsultant";
import FTACompliance from "./pages/FTACompliance";
import AccountingSystemCleanup from "./pages/AccountingSystemCleanup";
import OdooImplementation from "./pages/OdooImplementation";
import OdooPartner from "./pages/OdooPartner";
import VATHealthCheck from "./pages/VATHealthCheck";
import SmallBusinessAccounting from "./pages/SmallBusinessAccounting";
import { useDispatch, useSelector } from "react-redux";
import { useTranslationsQuery } from "./lib/redux/services/Api";
import { useEffect } from "react";
import { setDictonary } from "./lib/redux/slices/controlSlice";
import { cn } from "./lib/utils";

function App() {
    const dispatch = useDispatch();
  const lang = useSelector((state: any) => state?.control?.lang);
  const { data, isSuccess } = useTranslationsQuery(lang);
  useEffect(() => {

    if (data && isSuccess) {
      console.log(data);

      dispatch(setDictonary(data));
    }
  }, [lang, data, isSuccess]);
  return (
    <div className={cn("App",lang === 'ar'&& 'customFont')}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-erad" element={<About />} />
          <Route path="/accounting-services-uae" element={<AccountingServices />} />
          <Route path="/tax-consultant-uae" element={<VATConsultant />} />
          <Route path="/tax-compliance-uae" element={<FTACompliance />} />
          <Route path="/accounting-system-cleanup" element={<AccountingSystemCleanup />} />
          <Route path="/odoo-accounting-implementation-uae" element={<OdooImplementation />} />
          <Route path="/odoo-partner-uae" element={<OdooPartner />} />
          <Route path="/tax-health-check-uae" element={<VATHealthCheck />} />
          <Route path="/accounting-for-small-business-uae" element={<SmallBusinessAccounting />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
