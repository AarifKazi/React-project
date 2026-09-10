import React from "react";
import { Container } from "react-bootstrap";
import {
    FiTarget,
    FiEye,
    FiStar
} from "react-icons/fi";

import "../main.css";


const MissionVision = () => {


const timelineData = [

    {
        icon:<FiTarget/>,
        title:"Our Mission",
        text:"To provide innovative software solutions that help businesses grow with modern technology."
    },


    {
        icon:<FiEye/>,
        title:"Our Vision",
        text:"To become a trusted technology partner by delivering future-ready digital solutions."
    },


    {
        icon:<FiStar/>,
        title:"Our Values",
        text:"We believe in innovation, quality, transparency and customer satisfaction and Solution."
    }


];



return(

<section className="company-timeline">


<Container>


<div className="timeline-heading">


<span>
OUR PURPOSE
</span>


<h2>
Mission & Vision
<strong> Journey</strong>
</h2>


<p>
Building technology solutions that create a better digital future.
</p>


</div>



<div className="timeline-wrapper">


<div className="timeline-line"></div>



{

timelineData.map((item,index)=>(


<div className="timeline-item wow fadeInDown animated"
key={index}>


<div className="timeline-dot">

{item.icon}

</div>



<div className="timeline-content">


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>



</div>


))

}



</div>



</Container>


</section>

)


}


export default MissionVision;