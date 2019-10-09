import React from "react";

const Header = (props) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return( 
        <div>
            <h1>{props.data.title}</h1>
            <h3>{props.data.date}</h3>
            <p>{props.data.explanation}</p>
            <form onSubmit={handleSubmit}>
                Change Date (YYYY-MM-DD)
                <input type="text" name="test" value={props.newDate} 
                    onChange={e => props.setNewDate(e.target.value)}>
                </input>
                <input type="submit" onClick={() => props.setSubmit(!props.submit)} ></input>
            </form>
        </div>
    );
};

export default Header;