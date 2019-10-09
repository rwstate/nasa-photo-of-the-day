import React from "react";

const Header = (props) => {
    return( 
        <div>
            <h1>{props.data.title}</h1>
            <h3>{props.data.date}</h3>
            <p>{props.data.explanation}</p>
        </div>
    );
};

export default Header;