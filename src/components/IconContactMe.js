import React from "react";

const IconContact = (props) => {
  return (
    <li key={props.name}>
      <a href={props.url} target="_blank">
        <div style={{ marginTop: 120 }}>
          <i
            className={props.class}
            style={{ fontSize: 50, marginBottom: 110 }}
          ></i>
        </div>
      </a>
    </li>
  );
};

export default IconContact;
