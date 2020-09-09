import React from 'react';
import pakistan from "@svg-maps/pakistan.districts";
import { RadioSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,  faPhoneAlt, faEnvelopeOpenText  } from '@fortawesome/free-solid-svg-icons';

import {Col} from 'reactstrap';

 function ContactUs() {
    return (
        <div className="container">
             <div className="row">
                <Col md={6}>
                <h2 className="display-5"> <span className="text-danger">Contact Us</span></h2>
                    <h5>New York</h5>
                    <p className="lead">
                    <FontAwesomeIcon style={{color:'green'}} icon={faMapMarkerAlt}/> 41 Elmwood St.
                     Staten Island, NY 10306 <br/>
                    <FontAwesomeIcon style={{color:'green'}} icon={faPhoneAlt}/>  92222-33-3-3 <br/>
                    <FontAwesomeIcon style={{color:'green'}} icon={faEnvelopeOpenText} /> www.mailxxx.com
                     </p>
                     
                     <hr/>
                     <h5>Perth</h5>
                    <p className="lead">
                    <FontAwesomeIcon style={{color:'green'}} icon={faMapMarkerAlt}/> 41 Elmwood St.
                     Staten Island, NY 10306 <br/>
                    <FontAwesomeIcon style={{color:'green'}} icon={faPhoneAlt}/>  92222-33-3-3 <br/>
                    <FontAwesomeIcon style={{color:'green'}} icon={faEnvelopeOpenText} /> www.mailxxx.com
                     </p>
                    
                </Col>
                <Col md={6}>
                <RadioSVGMap style={{width:'50px', height:'50px'}}  map={pakistan} selectedLocationId = 'Okara' />

                </Col>
            </div>
                
        </div>
    )
}
export default ContactUs
