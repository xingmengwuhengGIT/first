import {FunctionComponent} from "react";
import {useLocation} from "react-router-dom";

const About: FunctionComponent = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h3>about page</h3>
            {/*<div>{location.state}</div>*/}
        </div>
    )
}

export default About
