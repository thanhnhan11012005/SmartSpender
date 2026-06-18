
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { GoogleOAuthProvider } from "@react-oauth/google";

  const clientId = "608691357879-3ntjeg9nvsdn374411pos762cmq001dn.apps.googleusercontent.com";

  createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  );
  