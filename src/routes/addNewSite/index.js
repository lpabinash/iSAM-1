import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
// import SimpleMap from 'Components/SimpleMap';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../addNewSite/index.css';
import GoogleMap from "Components/GoogleMap";
import Map from "../../components/Maps/maps";

export default class extends Component {

  state={
    createASiteCircle : "#03a9f4",
    setupDevicesCircle : "#9e9e9e",
    verifyDevicesCircle : "#9e9e9e",
    createEntitiesCircle : "#9e9e9e",
    registrationCompleteCircle : "#9e9e9e",

    createASiteText : "rgba(0, 0, 0, 0.87)",
    setupDevicesText : "rgba(0, 0, 0, 0.26)",
    verifyDevicesText : "rgba(0, 0, 0, 0.26)",
    createEntitiesText : "rgba(0, 0, 0, 0.26)",
    registrationCompleteText : "rgba(0, 0, 0, 0.26)",

    createASiteDisplay: "block",
    setupDevicesDisplay: "none",
    verifyDevicesDisplay: "none",
    createEntitiesDisplay: "none",
    registrationCompleteDisplay: "none",

    metaTagHttpEquiv : "default-style",

    ContinueButtonDisplay :  "block",
    GoBackButtonDisplay :  "none",
    count : 1,

    verifyDevicesInBoxDisplay: "block",
    registerGatewaysDisplay: "none",
    placeAndPlugInGatewayDisplay: "none",
    waitForGatewayStabilizationDisplay: "none",

    verifyDevicesInBoxCircle: "#03a9f4",
    registerGatewaysCircle: "#9e9e9e",
    placeAndPlugInGatewayCircle: "#9e9e9e",
    waitForGatewayStabilizationCircle: "#9e9e9e",

    verifyDevicesInBoxText: "rgba(0, 0, 0, 0.87)",
    registerGatewaysText: "rgba(0, 0, 0, 0.26)",
    placeAndPlugInGatewayText: "rgba(0, 0, 0, 0.26)",
    waitForGatewayStabilizationText: "rgba(0, 0, 0, 0.26)",

    popUpWrapperDisplay: "none",
    popUpDisplay: "none",
    popUpNewEntityWrapperDisplay: "none",
    popUpNewEntityDisplay: "none"

  }

  onContinueButtonClicked = () => {
    let newCount = this.state.count + 1;
    this.setState({count: newCount});

    if(newCount === 2){
      this.setState({setupDevicesCircle : "#03a9f4", setupDevicesText : "rgba(0, 0, 0, 0.87)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "block"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "block",
      verifyDevicesDisplay: "none",
      createEntitiesDisplay: "none",
      registrationCompleteDisplay: "none"});
    }
    else if(newCount === 3){
      this.setState({verifyDevicesCircle : "#03a9f4", verifyDevicesText : "rgba(0, 0, 0, 0.87)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "block"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "none",
      verifyDevicesDisplay: "block",
      createEntitiesDisplay: "none",
      registrationCompleteDisplay: "none"});
    }
    else if(newCount === 4){
      this.setState({createEntitiesCircle : "#03a9f4", createEntitiesText : "rgba(0, 0, 0, 0.87)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "block"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "none",
      verifyDevicesDisplay: "none",
      createEntitiesDisplay: "block",
      registrationCompleteDisplay: "none"});
    }
    else if(newCount === 5){
      this.setState({registrationCompleteCircle : "#03a9f4", registrationCompleteText : "rgba(0, 0, 0, 0.87)", ContinueButtonDisplay :  "none", GoBackButtonDisplay :  "none", metaTagHttpEquiv : "refresh"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "none",
      verifyDevicesDisplay: "none",
      createEntitiesDisplay: "none",
      registrationCompleteDisplay: "block"});
    }

  }
  onGoBackButtonClicked = () => {
    let newCount = this.state.count - 1;
    this.setState({count: newCount});

    if(newCount === 1){
      this.setState({setupDevicesCircle : "#9e9e9e", setupDevicesText : "rgba(0, 0, 0, 0.26)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "none"});
      this.setState({createASiteDisplay: "block",
      setupDevicesDisplay: "none",
      verifyDevicesDisplay: "none",
      createEntitiesDisplay: "none",
      registrationCompleteDisplay: "none"});
    }
    else if(newCount === 2){
      this.setState({verifyDevicesCircle : "#9e9e9e", verifyDevicesText : "rgba(0, 0, 0, 0.26)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "block"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "block",
      verifyDevicesDisplay: "none",
      createEntitiesDisplay: "none",
      registrationCompleteDisplay: "none"});
    }
    else if(newCount === 3){
      this.setState({createEntitiesCircle : "#9e9e9e", createEntitiesText : "rgba(0, 0, 0, 0.26)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "block"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "none",
      verifyDevicesDisplay: "block",
      createEntitiesDisplay: "none",
      registrationCompleteDisplay: "none"});
    }
    else if(newCount === 4){
      this.setState({registrationCompleteCircle : "#9e9e9e", registrationCompleteText : "rgba(0, 0, 0, 0.26)", ContinueButtonDisplay :  "block", GoBackButtonDisplay :  "block"});
      this.setState({createASiteDisplay: "none",
      setupDevicesDisplay: "none",
      verifyDevicesDisplay: "none",
      createEntitiesDisplay: "block",
      registrationCompleteDisplay: "none"});
    }
  }

  onVerifyDevicesInBoxClicked = () => {
    this.setState({
      verifyDevicesInBoxDisplay: "block",
      registerGatewaysDisplay: "none",
      placeAndPlugInGatewayDisplay: "none",
      waitForGatewayStabilizationDisplay: "none",
    })
  }
  onRegisterGatewaysClicked = () => {
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "block",
      placeAndPlugInGatewayDisplay: "none",
      waitForGatewayStabilizationDisplay: "none",
    })
  }
  onPlaceAndPlugInGatewayClicked = () => {
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "none",
      placeAndPlugInGatewayDisplay: "block",
      waitForGatewayStabilizationDisplay: "none",
    })
  }
  onWaitForGatewayStabilizationClicked = () => {
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "none",
      placeAndPlugInGatewayDisplay: "none",
      waitForGatewayStabilizationDisplay: "block",
    })
  }

  onNextToRegisterGatewayClicked = () => {
    this.setState({registerGatewaysCircle: "#03a9f4", registerGatewaysText: "rgba(0, 0, 0, 0.87)"});
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "block",
      placeAndPlugInGatewayDisplay: "none",
      waitForGatewayStabilizationDisplay: "none",
    })
  }
  onNextToPlaceAndPlugINGatewayClicked = () => {
    this.setState({placeAndPlugInGatewayCircle: "#03a9f4", placeAndPlugInGatewayText: "rgba(0, 0, 0, 0.87)"});
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "none",
      placeAndPlugInGatewayDisplay: "block",
      waitForGatewayStabilizationDisplay: "none",
    })
  }
  onNextToGatewayStabilizationClicked = () => {
    this.setState({waitForGatewayStabilizationCircle: "#03a9f4", waitForGatewayStabilizationText: "rgba(0, 0, 0, 0.87)"});
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "none",
      placeAndPlugInGatewayDisplay: "none",
      waitForGatewayStabilizationDisplay: "block",
    })
  }

  onAddDeviceClicked = () => {
    this.setState({popUpWrapperDisplay: "block", popUpDisplay: "block"});
  }
  closeDeviceDetailsPopUp = () => {
    this.setState({popUpWrapperDisplay: "none", popUpDisplay: "none"});
  }
  onAddClicked = () => {
    this.setState({popUpWrapperDisplay: "none", popUpDisplay: "none", placeAndPlugInGatewayCircle: "#03a9f4", placeAndPlugInGatewayText: "rgba(0, 0, 0, 0.87)"});
    this.setState({
      verifyDevicesInBoxDisplay: "none",
      registerGatewaysDisplay: "none",
      placeAndPlugInGatewayDisplay: "block",
      waitForGatewayStabilizationDisplay: "none",
    })
  }

  onAddEntityClicked = () => {
    this.setState({popUpNewEntityWrapperDisplay: "block", popUpNewEntityDisplay: "block"});
  }
  closeNewEntityPopUp = () => {
    this.setState({popUpNewEntityWrapperDisplay: "none", popUpNewEntityDisplay: "none"});
  }

  render() {
    return (
      <Fragment>
        {/* <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.third-single" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row> */}
        {
          /*Enjoy!*/
          <div class="registration-page">

   {/* //Registration Progress// */}
            <div class="flow">

              <div style={{ flex: "0 0 auto" }}>
                <span class="individual-flow">
                  <span style={{paddingRight: "8px" }}>
                    <svg style={{color: this.state.createASiteCircle, fill: this.state.createASiteCircle}} class="flow-svg" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" ></circle>
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >1</text>
                    </svg>
                  </span>
                  <span style={{color: this.state.createASiteText}}>Create a Site</span>
                </span>
              </div>

              <div class="flow-line">
                <span class="flow-line-styling"></span>
              </div>

              <div style={{ flex: "0 0 auto", marginLeft: "-6px" }}>
                <span class="individual-flow">
                  <span style={{paddingRight: "8px" }}>
                    <svg style={{color: this.state.setupDevicesCircle, fill: this.state.setupDevicesCircle}} class="flow-svg" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" ></circle>
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >2</text>
                    </svg>
                  </span>
                  <span style={{color: this.state.setupDevicesText}}>Setup Devices</span>
                </span>
              </div>

              <div class="flow-line">
                <span class="flow-line-styling"></span>
              </div>

              <div style={{ flex: "0 0 auto", marginLeft: "-6px" }}>
                <span class="individual-flow">
                  <span style={{paddingRight: "8px" }}>
                    <svg style={{color: this.state.verifyDevicesCircle, fill: this.state.verifyDevicesCircle}} class="flow-svg" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" ></circle>
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >3</text>
                    </svg>
                  </span>
                  <span style={{color: this.state.verifyDevicesText}}>Verify Devices</span>
                </span>
              </div>

              <div class="flow-line">
                <span class="flow-line-styling"></span>
              </div>

              <div style={{ flex: "0 0 auto", marginLeft: "-6px" }}>
                <span class="individual-flow">
                  <span style={{paddingRight: "8px" }}>
                    <svg style={{color: this.state.createEntitiesCircle, fill: this.state.createEntitiesCircle}} class="flow-svg" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" ></circle>
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >4</text>
                    </svg>
                  </span>
                  <span style={{color: this.state.createEntitiesText}}>Create Entities</span>
                </span>
              </div>

              <div class="flow-line">
                <span class="flow-line-styling"></span>
              </div>

              <div style={{ flex: "0 0 auto", marginLeft: "-6px" }}>
                <span class="individual-flow">
                  <span style={{paddingRight: "8px" }}>
                    <svg style={{color: this.state.registrationCompleteCircle, fill: this.state.registrationCompleteCircle}} class="flow-svg" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" ></circle>
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >5</text>
                    </svg>
                  </span>
                  <span style={{color: this.state.registrationCompleteText}}>Registration Complete</span>
                </span>
              </div>

            </div>

    {/* //progress button// */}
            <div style={{minHeight: "36px"}}>

              <div class="progress-stepButton-left">
                <div class="progress-button-wrapper">
                  <button style={{display: this.state.GoBackButtonDisplay}} onClick={this.onGoBackButtonClicked} class="progress-button" tabIndex="0">
                    <div class="button-styling">
                      <svg class="button-styling-svg" viewBox="0 0 24 24" >
                        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
                      </svg>
                      <span class="button-text">Go Back</span>
                    </div>
                  </button>
                </div>
              </div>

              <div class="progress-stepButton-right">
                <div class="progress-button-wrapper">
                  <button style={{display: this.state.ContinueButtonDisplay}} onClick={this.onContinueButtonClicked} class="progress-button" tabIndex="0">
                    <div class="button-styling">
                      <svg class="button-styling-svg" viewBox="0 0 24 24" >
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                      </svg>
                      <span class="button-text">Continue</span>
                    </div>
                  </button>
                </div>
              </div>

            </div>

    {/*New Site Page*/}

          {/*Create a Site*/}
          <div style={{display: this.state.createASiteDisplay}}>
            <div class="new-site-page-main">

              <div class="new-site-page-inputs">
                <div style={{paddingBottom: "8px", color: "#212121" }}>
                  <div class="new-site-page-card-text">
                    <div class="new-site-page-tile"><span style={{fontSize: "18px", fontWeight: "500"}}>Create a Site</span></div>

                    {/* <div class="new-site-page-form">
                      <label class="new-site-page-label">Site Name*</label>
                      <div class="label-example">e.g. Ebisu Office</div>
                      <input class="new-site-page-inputField" type="text" />
                      <div>
                        <hr class="new-site-page-hr1" aria-hidden="true"></hr>
                        <hr class="new-site-page-hr2" aria-hidden="true"></hr>
                      </div>
                    </div> */}

                      <div class="wrapper">
                          <label class="item-wrapper">Site Name*</label>
                          <input class="input-field" type="text"/>
                          <div class="input-field-underline">
                              <hr aria-hidden="true" class="under-line1" />
                              <hr aria-hidden="true" class="under-line2" />
                          </div>
                      </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Address*</label>
                        <input class="input-field" type="text"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">City*</label>
                        <input class="input-field" type="text"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Province</label>
                        <input class="input-field" type="text"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Country*</label>
                        <input class="input-field" type="text"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Postal Code</label>
                        <input class="input-field" type="number"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>
                    <div class="wrapper">
                        <label class="item-wrapper">Phone Number</label>
                        <input class="input-field" type="number"/>
                        <div class="input-field-underline">
                            <hr aria-hidden="true" class="under-line1" />
                            <hr aria-hidden="true" class="under-line2" />
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            
              <div class="new-site-page-map">
                {/* <SimpleMap/> */}
                <GoogleMap/>
              </div>

            </div>
          </div>

    {/*Setup Devices*/}
          <div style={{display: this.state.setupDevicesDisplay}} class="setup-devices">
            <div style={{paddingBottom: "8px"}}>
              <div class="new-site-page-card-text">
                <div class="new-site-page-tile"><span style={{fontSize: "20px", lineHeight: "1.2" }}>Setup Devices</span></div>

                <div>

                  <div class="setup-devices-steps">
                    <div style={{flex:"0 0 auto"}}>
                      <button onClick={this.onVerifyDevicesInBoxClicked} class="setup-devices-button" tabIndex="0">
                        <div>
                          <span style={{height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", overflow: "hidden", pointerEvents: "none", zIndex: "1"}}></span>
                          <span style={{height: "64px", color: "rgba(0, 0, 0, 0.87)", display: "flex", alignItems: "center", fontSize: "14px", paddingLeft: "14px", paddingRight: "14px", fontWeight: "500"}}>
                            <span style={{paddingRight: "8px", display: "flex", alignItems: "center"}}>
                              <svg style={{color: this.state.verifyDevicesInBoxCircle, fill: this.state.verifyDevicesInBoxCircle}} class="flow-svg" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" ></circle>
                                <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >1</text>
                              </svg>
                              <span style={{marginLeft: "7px", color: this.state.verifyDevicesInBoxText}}>Verify Devices in Box</span>
                            </span>
                          </span>
                        </div>
                      </button>
                      <div class="devices-description-main">
                        <div class="devices-description-wrapper">
                          <div class="devices-description-box">
                            <div class="animation1" style={{overflow: "hidden", display: this.state.verifyDevicesInBoxDisplay}}>
                              <p>Please verify, based on your order, that you have received the correct quantity of:</p>
                              <ul>
                                <li>Sensors (e.g. THADD, ETADD, DADD, etc.)</li>
                                <li>Repeaters (Echo)</li>
                                <ul>
                                  <li>Repeaters (Echo)</li>
                                </ul>
                                <li>Gateways (NADD)</li>
                                <ul>
                                  <li>One 5V power supply and antenna per gateway</li>
                                </ul>
                              </ul>
                              <div style={{margin: "12px 0px"}}>
                                <div class="progress-button-wrapper">
                                  <button onClick={this.onNextToRegisterGatewayClicked} class="progress-button" tabIndex="0">
                                    <div class="button-styling">
                                      <svg class="button-styling-svg" viewBox="0 0 24 24" >
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                      </svg>
                                      <span class="button-text">Next</span>
                                    </div>
                                 </button>
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="setup-devices-steps">
                    <div style={{flex:"0 0 auto"}}>
                      <button onClick={this.onRegisterGatewaysClicked} class="setup-devices-button" tabIndex="0">
                        <div>
                          <span style={{height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", overflow: "hidden", pointerEvents: "none", zIndex: "1"}}></span>
                          <span style={{height: "64px", color: "rgba(0, 0, 0, 0.87)", display: "flex", alignItems: "center", fontSize: "14px", paddingLeft: "14px", paddingRight: "14px", fontWeight: "500"}}>
                            <span style={{paddingRight: "8px", display: "flex", alignItems: "center"}}>
                              <svg style={{color: this.state.registerGatewaysCircle, fill: this.state.registerGatewaysCircle}} class="flow-svg" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" ></circle>
                                <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >2</text>
                              </svg>
                              <span style={{marginLeft: "7px", color: this.state.registerGatewaysText}}>Register Gateways</span>
                            </span>
                          </span>
                        </div>
                      </button>
                      <div class="devices-description-main">
                        <div class="devices-description-wrapper">
                          <div class="devices-description-box">
                            <div style={{overflow: "hidden", display: this.state.registerGatewaysDisplay}}>
                              <p>For each gateway, identify the <b>Serial Number (S/N)</b> and <b>Mac Address (M/A PB)</b> on the label found on the bottom.</p>
                              <p>Register your gateways by adding them below. When you are finished registering your gateways, continue to the next step.</p>
                              <b>Currently Registered Gateways</b>
                              <span onClick={this.onAddDeviceClicked} style={{marginLeft: "4px",fontSize: ".75rem", color: "#03a9f4", textTransform: "uppercase", fontWeight: "700", lineHeight: "1.2", cursor:"pointer"}}>ADD DEVICE</span>
                              <div style={{margin: "12px 0px"}}>
                                <div class="progress-button-wrapper">
                                  <button onClick={this.onNextToPlaceAndPlugINGatewayClicked} class="progress-button" tabIndex="0">
                                    <div class="button-styling">
                                      <svg class="button-styling-svg" viewBox="0 0 24 24" >
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                      </svg>
                                      <span class="button-text">Next</span>
                                    </div>
                                 </button>
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="setup-devices-steps">
                    <div style={{flex:"0 0 auto"}}>
                      <button onClick={this.onPlaceAndPlugInGatewayClicked} class="setup-devices-button" tabIndex="0">
                        <div>
                          <span style={{height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", overflow: "hidden", pointerEvents: "none", zIndex: "1"}}></span>
                          <span style={{height: "64px", color: "rgba(0, 0, 0, 0.87)", display: "flex", alignItems: "center", fontSize: "14px", paddingLeft: "14px", paddingRight: "14px", fontWeight: "500"}}>
                            <span style={{paddingRight: "8px", display: "flex", alignItems: "center"}}>
                              <svg style={{color: this.state.placeAndPlugInGatewayCircle, fill: this.state.placeAndPlugInGatewayCircle}} class="flow-svg" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" ></circle>
                                <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >3</text>
                              </svg>
                              <span style={{marginLeft: "7px", color: this.state.placeAndPlugInGatewayText}}>Place and Plug in Gateway</span>
                            </span>
                          </span>
                        </div>
                      </button>
                      <div class="devices-description-main">
                        <div class="devices-description-wrapper">
                          <div class="devices-description-box">
                            <div style={{overflow: "hidden", display: this.state.placeAndPlugInGatewayDisplay}}>
                              <p>Identify a location to place the gateway. To ensure a high level of communication between the gateway and sensors, please adhere to the following:</p>
                              <ul>
                                <li>Approximately 6ft (1.8m) away from any electronics or metal surfaces</li>
                                <li>Gateway is mounted indoors and secured onto the appropriate surface</li>
                                <li>Antenna is pointing upwards</li>
                                <li>Power is available and will not be regularly disturbed</li>
                                <li>Appropriate level of cellular signal from the network provider or partner</li>
                              </ul>
                              <p>Plug in the power supply into a standard 120V outlet. A green light on your gateway should turn on, and after 30 seconds, your gateway should start scanning for a network connection. The lights should make a strobing pattern.</p>
                              <p>If you have multiple gateways for your site, please follow the steps above for each gateway.</p>
                              <div style={{margin: "12px 0px"}}>
                                <div class="progress-button-wrapper">
                                  <button onClick={this.onNextToGatewayStabilizationClicked} class="progress-button" tabIndex="0">
                                    <div class="button-styling">
                                      <svg class="button-styling-svg" viewBox="0 0 24 24" >
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                      </svg>
                                      <span class="button-text">Next</span>
                                    </div>
                                 </button>
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="setup-devices-steps">
                    <div style={{flex:"0 0 auto"}}>
                      <button onClick={this.onWaitForGatewayStabilizationClicked} class="setup-devices-button" tabIndex="0">
                        <div>
                          <span style={{height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", overflow: "hidden", pointerEvents: "none", zIndex: "1"}}></span>
                          <span style={{height: "64px", color: "rgba(0, 0, 0, 0.87)", display: "flex", alignItems: "center", fontSize: "14px", paddingLeft: "14px", paddingRight: "14px", fontWeight: "500"}}>
                            <span style={{paddingRight: "8px", display: "flex", alignItems: "center"}}>
                              <svg style={{color: this.state.waitForGatewayStabilizationCircle, fill: this.state.waitForGatewayStabilizationCircle}} class="flow-svg" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" ></circle>
                                <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" >4</text>
                              </svg>
                              <span style={{marginLeft: "7px", color: this.state.waitForGatewayStabilizationText}}>Wait for Gateway Stabilization</span>
                            </span>
                          </span>
                        </div>
                      </button>
                      <div style={{border: "none"}} class="devices-description-main">
                        <div class="devices-description-wrapper">
                          <div class="devices-description-box">
                            <div style={{overflow: "hidden", display: this.state.waitForGatewayStabilizationDisplay}}>
                              <p>After a few minutes, the light pattern will stop, and the signal lights should stay solid.</p>
                              <p>The gateway signal strength should be at least two lights on. If not, consider moving your gateway to a better location for cellular signal strength.</p>
                              <p>Please wait <b>10 minutes</b> to ensure it is fully booted up and has a stable connection.</p>
                              <p>When you are ready to add devices, continue to the next page.</p>
                              <div style={{margin: "12px 0px"}}>
                                <div class="progress-button-wrapper">
                                  {/* <button class="progress-button" tabIndex="0">
                                    <div class="button-styling">
                                      <svg class="button-styling-svg" viewBox="0 0 24 24" >
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                                      </svg>
                                      <span class="button-text">Next</span>
                                    </div>
                                 </button> */}
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

    {/* Verify Devices */}
          <div style={{display: this.state.verifyDevicesDisplay}} class="verify-devices-main">

            <div class="progress-button-wrapper">
              <button onClick={this.onAddDeviceClicked} class="progress-button" tabIndex="0">
                <div class="button-styling">
                  <svg class="button-styling-svg" viewBox="0 0 24 24" >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                  </svg>
                  <span class="button-text">Add Device</span>
                </div>
              </button>
            </div>

            <div>
              <div class="verify-devices-title">
                <span>Gateways</span>
              </div>
              <div class="verify-devices-add">
                <div class="verify-devices-add-text">
                  <span style={{fontSize: "14px"}}><b>No gateways registered to this site. Press</b> 
                    <div style={{margin: "0 5px"}} class="progress-button-wrapper">
                      <button onClick={this.onAddDeviceClicked} class="progress-button" tabIndex="0">
                        <div class="button-styling">
                          <svg class="button-styling-svg" viewBox="0 0 24 24" >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                          <span class="button-text">Add Device</span>
                        </div>
                     </button>
                    </div>
                    <b>to add a new one.</b>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div class="verify-devices-title">
                <span>Sensors</span>
              </div>
              <div class="verify-devices-add">
                <div class="verify-devices-add-text">
                  <span style={{fontSize: "14px"}}><b>No sensors registered to this site. Press</b> 
                    <div style={{margin: "0 5px"}} class="progress-button-wrapper">
                      <button onClick={this.onAddDeviceClicked} class="progress-button" tabIndex="0">
                        <div class="button-styling">
                          <svg class="button-styling-svg" viewBox="0 0 24 24" >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                          <span class="button-text">Add Device</span>
                        </div>
                     </button>
                    </div>
                    <b>to add a new one.</b>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div class="verify-devices-title">
                <span>Repeaters</span>
              </div>
              <div class="verify-devices-add">
                <div class="verify-devices-add-text">
                  <span style={{fontSize: "14px"}}><b>No repeaters registered to this site. Press</b> 
                    <div style={{margin: "0 5px"}} class="progress-button-wrapper">
                      <button onClick={this.onAddDeviceClicked} class="progress-button" tabIndex="0">
                        <div class="button-styling">
                          <svg class="button-styling-svg" viewBox="0 0 24 24" >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                          <span class="button-text">Add Device</span>
                        </div>
                     </button>
                    </div>
                    <b>to add a new one.</b>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="verify-devices-title">
                <span>Mobile Monitors</span>
              </div>
              <div class="verify-devices-add">
                <div class="verify-devices-add-text">
                  <span style={{fontSize: "14px"}}><b>No mobile monitors registered to this site. Press</b> 
                    <div style={{margin: "0 5px"}} class="progress-button-wrapper">
                      <button onClick={this.onAddDeviceClicked} class="progress-button" tabIndex="0">
                        <div class="button-styling">
                          <svg class="button-styling-svg" viewBox="0 0 24 24" >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                          <span class="button-text">Add Device</span>
                        </div>
                     </button>
                    </div>
                    <b>to add a new one.</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

        {/* Create Entities */}
          <div style={{display: this.state.createEntitiesDisplay}} class="create-entities">
            <div class="verify-devices-title">
              <span>Create Entities</span>
            </div>
            <span onClick={this.onAddEntityClicked} style={{margin: " 0 5px",fontSize: ".75rem", color: "#03a9f4", textTransform: "uppercase", fontWeight: "700", lineHeight: "1.2", cursor:"pointer"}}> + ADD ENTITY</span>
            <div class="verify-devices-add">
              <div class="verify-devices-add-text">
                <span style={{fontSize: "14px"}}><b>No entities have been created for this site. Press</b> 
                  <span onClick={this.onAddEntityClicked} style={{margin: " 0 5px",fontSize: ".75rem", color: "#03a9f4", textTransform: "uppercase", fontWeight: "700", lineHeight: "1.2", cursor:"pointer"}}>ADD ENTITY</span>
                  <b>to add a new one.</b>
                </span>
              </div>
            </div>
          </div>

 {/* Registration Complete */}
          <div style={{display: this.state.registrationCompleteDisplay}} class="registration-complete">
            <div class="verify-devices-add">
              <div style={{display: "flex", flexDirection: "column"}} class="verify-devices-add-text">
                <span style={{fontSize: "18px", fontWeight: "700", color:"rgb(3, 169, 244)"}}><b>Congratulations! (Name) is now set up for Safefood!</b></span>
                <span style={{fontSize: "16px"}}>Thank you for registering, You will be redirected to the dashboard in 3 seconds ... <meta http-equiv = {this.state.metaTagHttpEquiv} content = "3; url = http://localhost:3008/app/dashboard" /></span>
                <div style={{border: "1px solid black", height: "370px", margin: " 20px 150px", boxSizing: "border-box"}}><GoogleMap/></div>
              </div>
            </div>
          </div>

          <div style={{display: this.state.popUpWrapperDisplay}} onClick={this.closeDeviceDetailsPopUp} class= "device-details-popUpWrapper"></div>

                    <div style={{display: this.state.popUpDisplay}}>
                      <div class= "device-details-popUp">
                        <div class="new-site-page-tile">
                          <div style={{display: "flex", alignItems:"center", justifyContent: "space-between", marginBottom: "20px"}}>
                            <span style={{fontSize: "20px", lineHeight: "1.2"}}>Setup Devices</span>
                            {/* <div style={{width: "40px"}} class="wrapper">
                              <label class="item-wrapper">Serial Number (S/N)</label>
                              <input class="input-field" type="text"/>
                              <div class="input-field-underline">
                                <hr aria-hidden="true" class="under-line1" />
                                <hr aria-hidden="true" class="under-line2" />
                              </div>
                            </div> */}
                          </div>
                          <span>To add a device, enter the full <b>Serial Number</b> and <b>MAC Address</b> found on the corresponding label. The label can be found on the bottom of the blueRover device.</span>

                          <div class="wrapper">
                            <label class="item-wrapper">Mac Address (M/A PB)</label>
                            <input class="input-field" type="text"/>
                            <div class="input-field-underline">
                              <hr aria-hidden="true" class="under-line1" />
                              <hr aria-hidden="true" class="under-line2" />
                            </div>
                          </div>
                          <div class="wrapper">
                            <label class="item-wrapper">Serial Number (S/N)</label>
                            <input class="input-field" type="text"/>
                            <div class="input-field-underline">
                              <hr aria-hidden="true" class="under-line1" />
                              <hr aria-hidden="true" class="under-line2" />
                            </div>
                          </div>

                          <div style={{margin: "20px 5px 0px 5px"}} class="progress-button-wrapper">
                            <button onClick={this.onAddClicked} class="progress-button" tabIndex="0">
                              <div class="button-styling">
                                <svg class="button-styling-svg" viewBox="0 0 24 24" >
                                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                </svg>
                                <span class="button-text">Add</span>
                              </div>
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div style={{display: this.state.popUpNewEntityWrapperDisplay}} onClick={this.closeNewEntityPopUp} class= "device-details-popUpWrapper"></div>

                    <div style={{display: this.state.popUpNewEntityDisplay}}>
                      <div class= "newEntity-popUp">
                        <h3>New Entity</h3>

                        <div class="newEntity">
                
                          <div style={{display: "flex"}}><div style={{marginRight: "20px"}} class="newEntityNameandModelID">
                            <label class="item-wrapper">Name*</label>
                            <input class="input-field" type="text"/>
                            <div class="input-field-underline">
                              <hr aria-hidden="true" class="under-line1" />
                              <hr aria-hidden="true" class="under-line2" />
                            </div>
                          </div>
                          <div class="newEntityNameandModelID">
                            <label class="item-wrapper">Model ID</label>
                            <input class="input-field" type="text"/>
                            <div class="input-field-underline">
                              <hr aria-hidden="true" class="under-line1" />
                              <hr aria-hidden="true" class="under-line2" />
                            </div>
                          </div></div>

                          <div class="entity-type">
                            <h3 style={{fontWeight: "700"}}>Entity Type*</h3>

                            <div class="entity-type-content">
                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADHx8cjIyPi4uJoaGijo6OpqaleXl709PRbW1sgICAWFhZsbGzR0dHV1dWWlpbb29uwsLAMDAx9fX1UVFRHR0fo6OiNjY3u7u6UlJRWVlbCwsJNTU0uLi5paWk2Nja1tbU+Pj6GhoZzc3MrKyvBO3/IAAADn0lEQVR4nO3dC1baYBRF4YRXhADhqRYJpYrzn2J55A/RgnTVfW+y6PkG4MlGElK1EEWIabJYpjEnXS6SKXNohOwn2FY1yupOO1pvjPoOtuu686LOo2HfQf5Ub2DPuO8gqTPwxSEwjrv1BW5dAvfP1Jr6+u3KQcx3yXjaoUzHyW5e+eqv9RRWrjE7i8t6NjoPDAy+/k2785PI6nL3lJcbz0YTX2iV4z3DlUm54n+HU063TGfWYSY1nbngOSyPjYfK54rzy2I/7P4yn5qFq7X50gfh/Bg5bA3cHsyq8C3sO2z9qONFMStGJy5r4Zz/4bJ2sio2fdbCST/zmTt69DsLDwa+cwfO535ymts4zUXnc9/rH6cdx+vaydj1NDyfiH6XmrX3jdTc+960uJNquw2mHrfAVe6FbRXSVIhTIU6FOBXiVIhTIU6FOBXiVIhTIU6FOBXiVIhTIU6FuAYUvr0M9pZWfyvZgMLiN3xWfy/RgMIHFX6PCnEqxKkQp0KcCnEqxKkQp0KcCnEqxKkQp0KcCnH/48/ausN0z+x/RDSg0JgKcSrEqRCnQpwKcSrE1VU4H3V9jOY1FbpToQpVqMI7LBwmPR/JsKbC+3/FVyFHhTgV4lSIUyGuAYX9E6vBBhQWb9V6x797uv/fH6rwm1SIUyFOhTgV4lSIUyFOhTgV4lSIUyFOhTgV4lSIu/rTRKsPZGlA4Ww12VtZfWBJAwqNqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRBXFKZug6l34fg0OHQbLD79weptN/7UOQ3GZu/9/Em/2Os47fkvej+iUXleWH3s6Gcz7ytb+dGxD05zD75zBz3Xp004Kazeo+mScGKsXNaei7Unl7VC2/GbGL6FW4ets6RY7TpsFSe923WtELvNhgczNl/6KFxrzO8z1mHI8zpzNAzLtjeLZeC76cwl4zBt9jZ0B5NyZWq4csVbOZ5brU8fy42J0cSX8nI+Hlicja3lecDzdqZicz6CeL7rtbIOJWv1wqerHr3WExhF29hHXldgFC1vHx3A47biqsnt4/s29xfCjzqvxn1L1/vti9aWZ2Pu96OZr2SL+e1j/QfpWw0v89dMk0X+Prx90H9puHlZzKC838YEM1ZC108CAAAAAElFTkSuQmCC" />
                                <div class="contentOption-caption">
                                  <span>
                                    Fridge
                                  </span>
                                </div>
                              </div>

                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="https://cdn.onlinewebfonts.com/svg/img_538964.png" />
                                <div class="contentOption-caption">
                                  <span>
                                    Freezer
                                  </span>
                                </div>
                              </div>

                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="https://www.epicentrofestival.com/wp-content/uploads/2019/12/Meat-Clipart-Svg-Non-Veg-Logo-Clipart-Png.jpg" />
                                <div class="contentOption-caption">
                                  <span>
                                    Food Mimic
                                  </span>
                                </div>
                              </div>

                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADHx8cjIyPi4uJoaGijo6OpqaleXl709PRbW1sgICAWFhZsbGzR0dHV1dWWlpbb29uwsLAMDAx9fX1UVFRHR0fo6OiNjY3u7u6UlJRWVlbCwsJNTU0uLi5paWk2Nja1tbU+Pj6GhoZzc3MrKyvBO3/IAAADn0lEQVR4nO3dC1baYBRF4YRXhADhqRYJpYrzn2J55A/RgnTVfW+y6PkG4MlGElK1EEWIabJYpjEnXS6SKXNohOwn2FY1yupOO1pvjPoOtuu686LOo2HfQf5Ub2DPuO8gqTPwxSEwjrv1BW5dAvfP1Jr6+u3KQcx3yXjaoUzHyW5e+eqv9RRWrjE7i8t6NjoPDAy+/k2785PI6nL3lJcbz0YTX2iV4z3DlUm54n+HU063TGfWYSY1nbngOSyPjYfK54rzy2I/7P4yn5qFq7X50gfh/Bg5bA3cHsyq8C3sO2z9qONFMStGJy5r4Zz/4bJ2sio2fdbCST/zmTt69DsLDwa+cwfO535ymts4zUXnc9/rH6cdx+vaydj1NDyfiH6XmrX3jdTc+960uJNquw2mHrfAVe6FbRXSVIhTIU6FOBXiVIhTIU6FOBXiVIhTIU6FOBXiVIhTIU6FuAYUvr0M9pZWfyvZgMLiN3xWfy/RgMIHFX6PCnEqxKkQp0KcCnEqxKkQp0KcCnEqxKkQp0KcCnH/48/ausN0z+x/RDSg0JgKcSrEqRCnQpwKcSrE1VU4H3V9jOY1FbpToQpVqMI7LBwmPR/JsKbC+3/FVyFHhTgV4lSIUyGuAYX9E6vBBhQWb9V6x797uv/fH6rwm1SIUyFOhTgV4lSIUyFOhTgV4lSIUyFOhTgV4lSIu/rTRKsPZGlA4Ww12VtZfWBJAwqNqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRBXFKZug6l34fg0OHQbLD79weptN/7UOQ3GZu/9/Em/2Os47fkvej+iUXleWH3s6Gcz7ytb+dGxD05zD75zBz3Xp004Kazeo+mScGKsXNaei7Unl7VC2/GbGL6FW4ets6RY7TpsFSe923WtELvNhgczNl/6KFxrzO8z1mHI8zpzNAzLtjeLZeC76cwl4zBt9jZ0B5NyZWq4csVbOZ5brU8fy42J0cSX8nI+Hlicja3lecDzdqZicz6CeL7rtbIOJWv1wqerHr3WExhF29hHXldgFC1vHx3A47biqsnt4/s29xfCjzqvxn1L1/vti9aWZ2Pu96OZr2SL+e1j/QfpWw0v89dMk0X+Prx90H9puHlZzKC838YEM1ZC108CAAAAAElFTkSuQmCC" />
                                <div class="contentOption-caption">
                                  <span>
                                    Climatized Area
                                  </span>
                                </div>
                              </div>

                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADHx8cjIyPi4uJoaGijo6OpqaleXl709PRbW1sgICAWFhZsbGzR0dHV1dWWlpbb29uwsLAMDAx9fX1UVFRHR0fo6OiNjY3u7u6UlJRWVlbCwsJNTU0uLi5paWk2Nja1tbU+Pj6GhoZzc3MrKyvBO3/IAAADn0lEQVR4nO3dC1baYBRF4YRXhADhqRYJpYrzn2J55A/RgnTVfW+y6PkG4MlGElK1EEWIabJYpjEnXS6SKXNohOwn2FY1yupOO1pvjPoOtuu686LOo2HfQf5Ub2DPuO8gqTPwxSEwjrv1BW5dAvfP1Jr6+u3KQcx3yXjaoUzHyW5e+eqv9RRWrjE7i8t6NjoPDAy+/k2785PI6nL3lJcbz0YTX2iV4z3DlUm54n+HU063TGfWYSY1nbngOSyPjYfK54rzy2I/7P4yn5qFq7X50gfh/Bg5bA3cHsyq8C3sO2z9qONFMStGJy5r4Zz/4bJ2sio2fdbCST/zmTt69DsLDwa+cwfO535ymts4zUXnc9/rH6cdx+vaydj1NDyfiH6XmrX3jdTc+960uJNquw2mHrfAVe6FbRXSVIhTIU6FOBXiVIhTIU6FOBXiVIhTIU6FOBXiVIhTIU6FuAYUvr0M9pZWfyvZgMLiN3xWfy/RgMIHFX6PCnEqxKkQp0KcCnEqxKkQp0KcCnEqxKkQp0KcCnH/48/ausN0z+x/RDSg0JgKcSrEqRCnQpwKcSrE1VU4H3V9jOY1FbpToQpVqMI7LBwmPR/JsKbC+3/FVyFHhTgV4lSIUyGuAYX9E6vBBhQWb9V6x797uv/fH6rwm1SIUyFOhTgV4lSIUyFOhTgV4lSIUyFOhTgV4lSIu/rTRKsPZGlA4Ww12VtZfWBJAwqNqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRCnQpwKcSrEqRBXFKZug6l34fg0OHQbLD79weptN/7UOQ3GZu/9/Em/2Os47fkvej+iUXleWH3s6Gcz7ytb+dGxD05zD75zBz3Xp004Kazeo+mScGKsXNaei7Unl7VC2/GbGL6FW4ets6RY7TpsFSe923WtELvNhgczNl/6KFxrzO8z1mHI8zpzNAzLtjeLZeC76cwl4zBt9jZ0B5NyZWq4csVbOZ5brU8fy42J0cSX8nI+Hlicja3lecDzdqZicz6CeL7rtbIOJWv1wqerHr3WExhF29hHXldgFC1vHx3A47biqsnt4/s29xfCjzqvxn1L1/vti9aWZ2Pu96OZr2SL+e1j/QfpWw0v89dMk0X+Prx90H9puHlZzKC838YEM1ZC108CAAAAAElFTkSuQmCC" />
                                <div class="contentOption-caption">
                                  <span>
                                    Cool Down
                                  </span>
                                </div>
                              </div>

                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="data:image/png;base64,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" />
                                <div class="contentOption-caption">
                                  <span>
                                    Oven
                                  </span>
                                </div>
                              </div>

                              <div class="entity-type-contentOption">
                                <img style={{width: "100%"}} src="https://cdn2.iconfinder.com/data/icons/transportation-133/100/Food-Truck-01-512.png" />
                                <div class="contentOption-caption">
                                  <span>
                                    Mobile Asset
                                  </span>
                                </div>
                              </div>

                            </div>

                            <div style={{marginTop: "2em"}}>
                              <h3 style={{fontWeight: "700"}}>Sensors</h3>
                              <span onClick={this.onAddEntityClicked} style={{margin: "0px",fontSize: ".75rem", color: "#03a9f4", textTransform: "uppercase", fontWeight: "900", lineHeight: "1.2", cursor:"pointer"}}>+ ADD SENSORS</span>
                            </div>

                            <div style={{marginTop: "2em", marginBottom: "2em"}}>
                              <h3 style={{fontWeight: "700"}}>Mobile Monitors</h3>
                              <span onClick={this.onAddEntityClicked} style={{margin: "0px",fontSize: ".75rem", color: "#03a9f4", textTransform: "uppercase", fontWeight: "900", lineHeight: "1.2", cursor:"pointer"}}>+ ADD SENSORS</span>
                            </div>

                          </div>
                        </div>

                        

                      </div>
                    </div>

        </div>
        }
      </Fragment>
      
    );
  }
}

{/* <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/third-singleCopy`} />
        <Route path={`${match.url}/third-singleCopy`} component={thirdSingleCopy} />
        <Redirect to="/error" />
    </Switch> */}



//     import React, { Component } from 'react';
// import { HorizontalBar } from 'react-chartjs-2';
// require('isomorphic-fetch');
// const data = {
// 	labels: ['January', 'February', 'March', 'April', 'May', 'June'],
// 	datasets: [
// 		{
// 			label: 'My First dataset',
// 			backgroundColor: 'rgba(255,99,132,0.2)',
// 			borderColor: 'rgba(255,99,132,1)',
// 			borderWidth: 1,
// 			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
// 			hoverBorderColor: 'rgba(255,99,132,1)',
// 			// data: []
// 		}
// 	]
// };

// class Trail extends Component {
//   state={
//     data1:[]
//   }
  
// 	render() {
//     fetch("https://more-troll-94.hasura.app/v1/graphql",{
//       method: "POST",
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify({query:`query MyQuery {
//         Weather {
//           Temp_Max
//         }
//       }` 
//        })

//   })
//   .then(res=>res.json())
//   .then(data=>this.setState({data1:data.data.Weather}))
//   console.log(this.state.data1[0])
  
// 		return (
// 			<div className="flex flex-col items-center w-full max-w-md">
				
// 				<HorizontalBar data={this.state.data1} />
// 			</div>
// 		);
// 	}
// }

// export default Trail;