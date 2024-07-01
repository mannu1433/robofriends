import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('NOOOO!');//throws error if error 
    // }
    //CardList - pure function - robots pure/dumb components
    //they don't know anything. They just receive & return something
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
            {/* {cardArray} */}
            {/* <Card id ={robots[0].id} name={robots[0].name} email={robots[0].email}/>
<Card id ={robots[1].id} name={robots[1].name} email={robots[1].email}/>
<Card id ={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
        </div>

    );
}

export default CardList;