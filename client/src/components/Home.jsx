import React from "react";

const Home = () => {
    
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="">
      <nav className="">
        <h1>fakebook</h1>
        <button
          className="btn btn-success w-100 rounded-0"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Home;
