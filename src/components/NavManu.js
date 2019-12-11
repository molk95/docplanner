import React from "react";

function NavMenu(props) {
  return (
    <div className='docplanner-nav'>
      <div className="Docplanner-logo">
        <img
          className="logo-docplanner"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
        />
      </div>
      <div className="header-nav">
      <ul className="header-nav-sections">
        {props.menu.map(el => (
          <li className="dep-button">
            {el.title}
            {!el.drop ? null : (
              <div className="menu-dropped">
              <ul className="menu-dropped-lists">
                {el.drop.map(el => (
                  <li className="menu-dropped-list ">{el}</li>
                ))}
              </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
export default NavMenu;
