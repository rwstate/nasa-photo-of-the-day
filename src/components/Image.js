import React from "react";
import { tsPropertySignature } from "@babel/types";

const Image = (props) => {
    return (
        <div>
            <img src={props.data.url} alt={props.data.title}/>
        </div>
    );
};

export default Image;