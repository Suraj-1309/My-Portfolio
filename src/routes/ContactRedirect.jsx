// routes/ContactRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Step 1: Navigate to home page
    navigate("/", { replace: true });

    // Step 2: After a short delay, scroll to #contact
    const timeout = setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // 100ms delay gives React time to render the home page

    return () => clearTimeout(timeout);
  }, [navigate]);

  return null;
}
