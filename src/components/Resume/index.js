import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
 
  

const Resume = ({total}) => {
    return(
        <C.Container> 
            <ResumeItem title="Valor em Estoque" value= {total}/>
        </C.Container>

    )
};

export default Resume;