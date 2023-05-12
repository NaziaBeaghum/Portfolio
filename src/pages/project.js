import React from "react";
export default function Project()
{
    return(
        <div className="project">
            <span className="project_title">Air BNB clone experience</span>
            <p className="project_detail">I have created a clone of air BNB experience.In this project i have used Props for passing data 
                from array to differnt components.Also we can update User Interface by just adding data to the 
                array
            </p>
            <br></br>
            <span className="project_title">Memes Generator</span>
            <p className="project_detail">In this project i have tested how to render input elements and updating the User interface with the
                 given data.To achieve this task ,I have used new React hook named React.useState</p>
                 <br></br>

            <span className="project_title">Notes App</span>   
            <p className="project_detail"> Notes app is used to store some data in different notes.Here I have used React.usestate to update and
                maintain  data.Also i have react.useeffect to store data in the local storage </p>  
            </div>
    )
}