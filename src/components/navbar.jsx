import React from "react";

function NavBar({ counters }) {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Showing{" "}
            <span className="badge rounded-pill bg-info bg-sm">
              {counters.length}
            </span>{" "}
            Counters.
          </span>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
