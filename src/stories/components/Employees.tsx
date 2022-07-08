import { Button } from 'antd';
import Card from 'antd/lib/card/Card';
import React from 'react';
import './employee.css';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { VscThreeBars } from 'react-icons/vsc';
import Input from 'antd/lib/input/Input';

interface EmployeesProps {
  allEmployeeData: any;
}

export const Employees: React.FC<EmployeesProps> = (props:any) => {
  return (
    <div className="page-wrapper">
      <div className="content ">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee</h3>

              <ul className="breadcrumb">
                <li className="breadcrumb-item">Dashboard</li>

                <li className="breadcrumb-item1 active">/ Employee</li>
              </ul>
            </div>

            <span className="bars-icon">
              <VscThreeBars fill='gray' />
            </span>
            {/* <Button
              style={{
                backgroundColor: '#00c5fb',
                color: 'white',
                border: '1px solid #00c5fb',
                fontSize: 'bold',
              }}
              type="primary"
              shape="round"
              
            >
            Add Employee
            </Button> */}
            <Button 
              style={{
                backgroundColor: '#00c5fb',
                color: 'white',
                border: '1px solid #00c5fb',
                fontSize: 'bold',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }} shape="round"  icon={<PlusOutlined  />} >
        Add Employee
      </Button>
          </div>
        </div>

        <div className="search-section">
          <Input
            style={{
              border: '1px solid #c2c6c9',
              borderRadius: '0.25rem',
              fontSize: '16px',
             
            }}
            type="text"
            className="form-control floating"
            placeholder="Employee ID"
          />{' '}
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
            placeholder="Employee Name"
          />
          <div>
            <select id="select" className="form-select">
              <option selected>Select Designation</option>
              <option> ...</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
        </div>
        <div className="grid-container">
          <>
            {props.allEmployeeData.map((e: any, i: any) => (
              <Card
                key={i}
                bordered={false}
                style={{
                  boxShadow: '2px 2px 5px 0 #888888',
                  // boxShadow:' 0 1px 1px 0 rgb(0 0 0 / 20%)',
                   borderRadius: '4px',
                  // borderRadius:" 0.25rem",
                  color: '#fff',
               
                }}
              >
                <div className="profile-widget">
                  <div className="profile-img">
                    <img
                      src="https://smarthr-react.dreamguystech.com/blue/fa88689eba04e38282d26c8b1a25c274.jpg"
                      alt=""
                    />
                  </div>
                  <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                    {e.name}
                  </h4>
                  <div className="small text-muted">{e.designation}</div>
                </div>
              </Card>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};
