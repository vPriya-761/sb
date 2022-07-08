import { Input } from 'antd';
import React from 'react'

interface ToolboxProps {
id:string ,
name:string,
designation:string
}

export const Toolbox: React.FC<ToolboxProps>= (props) => {
        return (
  
  <div className="search-section">
  <Input
    style={{
      border: '1px solid #c2c6c9',
      borderRadius: '0.25rem',
      fontSize: '16px',
     
    }}
    type="text"
    className="form-control floating"
    placeholder={props.id}
  />
  <Input
    style={{
      border: '1px solid #c2c6c9',
      borderRadius: '0.25rem',
      fontSize: '16px',
      width:"100%",
      marginLeft:'5px'
     
    }}
    type="text"
    className="form-control floating"
    placeholder={props.name}
  />
  <div>
    <select id="select" className="form-select">
      <option selected>{props.designation}</option>
      <option> ...</option>
    </select>
  </div>
  <button className="search-btn">Search</button>
</div>
        );
}
