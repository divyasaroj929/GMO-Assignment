import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../table/Table";
import Department from "../department/Dipartment";

import "./login.css";
interface UserDetails {
  name: string;
  email: string;
  phone: string;
}

const SecondPage = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  console.log(userDetails);
  const navigate = useNavigate();

  const turnSignUp = () => {
    navigate("/");
  };

  useEffect(() => {
    // Check if user details are present in localStorage
    const storedUserDetails = localStorage.getItem("userDetails");
    console.log(storedUserDetails);
    console.log("Stored User Details:", storedUserDetails);

    if (storedUserDetails) {
      // Parse the stored data and set it to the state

      try {
        const storedUserDetails = localStorage.getItem("userDetails");
        console.log("Stored User Details:", storedUserDetails);

        if (storedUserDetails) {
          const parsedUserDetails = JSON.parse(
            storedUserDetails
          ) as UserDetails;
          setUserDetails(parsedUserDetails);
        } else {
        }
      } catch (error) {
        console.error("Error parsing user details:", error);
        setUserDetails(null);
      }
    }
  }, []);

  return (
    <div className="parent-container-of-second-page">
      <div className="second-parent">
        <div className="user-details">
          {userDetails ? (
            <>
              <h2>Welcome to the Second Page!</h2>
              <p>User Details</p>
              <ul>
                <li>Name: {userDetails.name}</li>
                <li>Email: {userDetails.email || "N/A"}</li>
                <li>Phone: {userDetails.phone}</li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
      <Department />
      <Table />
      <button onClick={turnSignUp}>click Here</button>
    </div>
  );
};

export default SecondPage;
