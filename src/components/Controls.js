import React from "react";
import Online from "./dashComponents/Online";
import Volume from "./dashComponents/Volume";
import Quality from "./dashComponents/Quality";

class Controls extends React.Component {
    render() {
        return(
            <div className = 'controlPanel'>
                <Online />
                <Volume />
                <Quality />
            </div>
        )
    }
}

export default Controls;