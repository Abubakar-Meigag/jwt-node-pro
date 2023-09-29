import React from "react";

const Home = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <nav className="text-white">
        <h1>Fakebook</h1>
        <button className="btn btn-success rounded-0" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Home;
