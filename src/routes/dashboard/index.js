import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, CardBody, CardTitle, Button, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import {Card, CardGroup} from 'react-bootstrap';
import Iframe from 'react-iframe';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import MapChart from "../../components/Gmap/index";
import Chart1 from "../../components/Chart1/index";
import Chart2 from "../../components/Chart2/index";
import Process from "../../components/process/index";
// import SimpleMap from './../src/gmap';
require('isomorphic-fetch');

const link = createHttpLink({ uri: "http://157.245.104.15/v1/graphql",

headers:{     
    "x-hasura-admin-secret":"Lets0rg@20@)" 
},
options: {
  reconnect: true,
  // credentials: "include",
  
}



});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default class extends Component {
  render() {

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

          <div style={{"overflow-x": "hidden"}}>
                <h1 style={{marginLeft: "10px"}}>WELCOME</h1>
                <div>
                {/* <Card style={{cursor:"pointer"}}>
                    <div style={{padding:"25px"}}>
                        <i style={{fontSize:"20px"}} class="fas fa-plus-circle"></i>
                        <a style={{fontSize:"20px"}}>Add New Site:</a>
                    </div>
                </Card>  */}
                  <div style={{backgroundColor: "white", padding: "0px 70px 0px 0px", marginBottom: "40px"}}><MapChart/></div>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", backgroundColor: "white", paddingTop: "40px", paddingBottom: "40px"}}>
                    <ApolloProvider client={client}>
                      <Chart1 />
                      <Chart2/>  
                    </ApolloProvider>
                  </div>
                  <Process/>
                </div>
          </div>
        }
      </Fragment>
    );
  }
}