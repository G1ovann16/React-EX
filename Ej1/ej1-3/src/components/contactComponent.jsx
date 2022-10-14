import React, { useState } from "react";
import PropTypes from "prop-types";
import { ContactClass } from "../models/contact.class";

const ContactComponent = ({ contact }) => {
  let [line, setLine] = useState(contact.conected);

 const onChange=()=>{
setLine(!line)
}

  return (
    <div>
      <h2> name : {contact.name}</h2>
      <h3> lastName : {contact.lastName} </h3>
      <h4> mail: {contact.mail} </h4>
      <h5>
        {" "}
        line: {line
          ? "You are off line !!"
          : "You are on line!!!"}{" "}
      </h5>
      <button onClick={onChange}>On/Off</button>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(ContactClass),
};

export default ContactComponent;
