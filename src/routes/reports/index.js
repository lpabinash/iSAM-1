import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import DatePicker from 'react-custom-date-picker';

export default class extends Component {
  state = {
    date: null,
    
  }

  handleDateChange = (date) => {
    this.setState({
      date
    });
  }

  render() {

    const data = [
      "dadfsdfs",
      "afsgs",
      "fgdf",
    ]
     
     const renddata=data.map((item, i) => {
        return (
          <option key={i} value={item}>
            {item}
          </option>)})

    return (
      <Fragment>
        {/* <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
            //   heading={<IntlMessages id="menu.third-single" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row> */}
        {
          /*Enjoy!*/
          <div style={{width:"80vw", backgroundColor:"white",borderRadius:"10px"}}>
            <div style={{padding:"20px"}}>
                <p style={{display:"inline", fontSize:"20px"}}> Date : </p> 
        <DatePicker
        color="purple"
        // width="100px"
        date={this.state.date}
        // endDate={this.state.endDate}
        errorColor="#c32c27"
        handleDateChange={this.handleDateChange}
        // range
        hoverWeek
        inputStyle={{
          borderRadius: "4px",width: "30vw",padding: "12px 20px",display: "inline",border: "1px solid #ccc",
        }}
        lightHeader
      />
      </div>
      <div style={{padding:"20px", justifyContent:"space-between"}}>
        <div  style={{display:"inline",}}>
      <p style={{display:"inline", fontSize:"20px",marginRight:"8px"}}> Site : </p> 
            {/* <label for="country">Country</label> */}
            <select style={{width: "30vw",padding: "12px 20px",display: "inline",border: "1px solid #ccc", borderRadius: "4px"}} id="site">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            {renddata}
            </select>
            </div>
            <div style={{display:"inline",marginLeft:"25vw"}}>
            <button style={{fontSize:"20px",height:"40px",backgroundColor:"grey",border: "1px solid #ccc", borderRadius: "4px"}}>Run Report</button>
            </div>
      </div>
      
      </div>

        }
      </Fragment>
    );
  }
}
