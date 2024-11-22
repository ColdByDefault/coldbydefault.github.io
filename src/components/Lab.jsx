import React from "react";
import labItems from "../data/labItems"; /*labItems ../data/labItems */
import LabItems from "./LabItems"; /*LabItems ./LabItems */

function Lab(){ /* Lab */
    return (
    <>
        <div className="flex flex-col md:flex-row items-center h-screen
        justify-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-4 mt-5">
                {labItems.map(project => ( 
                    <LabItems 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    </>
    )
}

export default Lab; /* Lab */