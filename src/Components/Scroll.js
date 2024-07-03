import React from "react";
//props>state>children - children - scroll
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            {/* {/* //can use style.css file & link it/use classname/tachyons. but above one is more efficient. overflowY - JSX & overflow-y - css} */}
            {props.children}
        </div>
    );
    // console.log(props);
    // return props.children wraps all children inside scroll & returns them
};

export default Scroll;