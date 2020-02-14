import React from "react";
import styled from "styled-components";

//styled components

const Box = styled.div `
    width: 60%;
    border-radius: 20px;
    margin: 0 auto;
`

const Player = styled.div `
    border-radius: 20px;
    background: grey;
    width: 20%;
    height: 200px;
    padding: 6%;
    margin: 8%;
`



const Card = props => {

    return (
        <div>
            <div>
                <h1>Women's World Cup Players</h1>
            </div>
            <Box>
                {props.things.map (item => {
                    return (      
                        <Player>           
                        Player: {item.name} 
                        <br></br>
                        Country: {item.country} 
                        <br></br>
                        # of searches: {item.searches}
                        </Player>    
                    );
                })}

            </Box>
        </div>
    );
};
export default Card;