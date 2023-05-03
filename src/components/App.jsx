import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { HomePage } from "pages/HomePage/HomePage";
import { RegisterPage } from "pages/Registration/RegistrationPage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { ContactsPage } from "pages/UserPage/UserMenu";


export const App = () => {
      return (
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      );
    };
    