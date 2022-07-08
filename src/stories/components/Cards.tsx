import { Card } from 'antd';
import React from 'react'

interface CardsProps {
    allEmployeeData: any;

}

export const Cards: React.FC<CardsProps> = (props) => {
        return (  <div className="grid-container">
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
      </div>);
}