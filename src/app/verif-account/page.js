// verification.js (or verify-account.js) in the pages directory
"use client";

import { useSearchParams } from "next/navigation"; // Import useRouter from next/navigation
import axios from "axios";
import { useState } from "react";

const VerificationPage = () => {
  const [responses, setResponse] = useState("");
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  const verifyAccount = async (type, email, code) => {
    try {
      const response = await axios.post(
        "https://illiyin.goforumrah.com/api/hotel-business/email-verification/verify",
        { email, code }
      );

      console.log("Verification successful:", response.data);
      setResponse(response.data.status_code);
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  if (type && email && code) {
    verifyAccount(type, email, code);
  }

  return <div>{responses}</div>;
};

export default VerificationPage;
