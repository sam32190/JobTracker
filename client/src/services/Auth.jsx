import { jwtDecode } from "jwt-decode";

// Module Reusability

export const GetUserRole = () => {
  const token = localStorage.getItem("token");
  
  // Return null if no token is found
  if (!token) {
    console.log("No token found in localStorage");
    return null;
  }

  try {
    // Decode the JWT token
    const decoded = jwtDecode(token);

    console.log("🔍 Decoded JWT:", decoded); // Print full decoded token

    // Extract the role from the token, checking different possible claim names
    const role =
      decoded.role ||
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    console.log("Extracted Role:", role); // For Debugging Purpose
    return role;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

