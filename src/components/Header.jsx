import React, { useState } from "react";

const headerNav = [
  {
    title: "Intro",
    url: "#intro",
  },
  {
    title: "Skill",
    url: "#skill",
  },
  {
    title: "Site",
    url: "#site",
  },
  {
    title: "Prot",
    url: "#prot",
  },
  {
    title: "Contact",
    url: "#contact",
  },
  {
    title: "Footer",
    url: "#footer",
  },
  /* 소문자로 시작 */
];

const Header = () => {

    const [show, setShow] = useState(false);
    const toggleMenu = ()=>{
        setShow((pshow) => !pshow)
        //(pshow => !pshow) : 참이면, 거짓/ 거짓이면, 참 
        //! : 반대값으로 변경
    }

    //show : 상태를 만들고 초기값을 false로 지정
    //setShow : 상태값을 바꾸는 값

    //useState: 상태를 만들어주는 Hook 명령어
    //Hook 명령어: 컴포넌트 안에서 상태를 만들고 관리하는 명령어들

    return (
    <header id="header" role="banner">
        <div className="header_inner">
        <h1 className="header_logo">
            porfolio
            <em>developer</em>
        </h1>
        <nav className={`header_nav ${show ? "show":""}`} 
            role="navigation" 
            aria-label="메인메뉴">
            <ul>
            {headerNav.map((nav, key) => (
                <li key={key}>
                <a href={nav.url}>{nav.title}</a>
                </li>
            ))}
            </ul>
        </nav>
        <nav
            className="header_nav_mobile"
            id="headerToggle"
            role="button"
            tabIndex="0"
            onClick={toggleMenu}
        >
            <span></span>
        </nav>
        </div>
    </header>
    );
};

export default Header;
