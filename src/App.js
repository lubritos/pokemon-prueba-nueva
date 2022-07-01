import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes />
    </BrowserRouter>
  );
}
