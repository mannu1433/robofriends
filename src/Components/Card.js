import React, { Fragment } from 'react';
// step 1 - const Card = (props) => {
// step 2 below one is combination of these 2 steps- const {name, email, id} = props;
const Card = ({ name, email, id }) => {
    return (
        <Fragment>
            {/* // <h1>RoboFriends</h1> = can't return multiple components */}
            <div className='tc bg-light-green dib br3 pa3 ma2 grow pointer'>
                <img alt='robots' src={`https://robohash.org/${id}?bgset=bg1`} />
                {/* //src is wrapped in template string to make it dynamic */}
                {/* <img alt="robots" src='https://robohash.org/testtest1.png?bgset=bg2'/>
            <img alt="robots" src='https://robohash.org/testtest2.png?ignoreext=false'/>
            <img alt="robots" src='https://robohash.org/620050a4db5104bae758cd75171d64ca?gravatar=hashed'/> 
            <img alt="robots" src='https://robohash.org/test3?set=any'/>           
            <img alt="robots" src='https://robohash.org/robo@robohash.org?gravatar=yes'/> */}
                <div>
                    {/* <h2>{props.name}</h2>   destructured in const & used as below in img src id too*/}
                    <h2>{name}</h2>
                    {/* JSX js obj   */}
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>

    );
}

export default Card;

