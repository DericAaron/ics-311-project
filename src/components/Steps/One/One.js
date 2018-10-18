import React, { Component } from 'react';

import './One.css';

//material imports
import Paper from '@material-ui/core/Paper';

class One extends Component {

  render() {
    return (
        <div>
          <Paper className="sub">
            <h1>Step 1:</h1>
            <h3>Description</h3>
            <p>My database will be used by an auto dealership chain to keep track of vehicles that move through their individual dealerships, their customers, and which purchased vehicles were bought with service contracts (VSC). The tables will include the following headings: “Dealership”, “Vehicle”, “Customer”, “VSC”, “Lender”, and “Purchase”. The goal for this application is to give manager access to needed sales metrics, customer service access to customer information at a call-center, and vehicle service professionals access to customer contact information to inform them of services available by vsc.</p>
            <h3>Initial Tables</h3>
            <div className="grid-3">
                <Paper>
                    <p>dealership</p>
                    <hr/>
                    <ul>
                        <li>d_name (Primary Key)</li>
                        <li>d_phone</li>
                        <li>d_address</li>
                    </ul>
                </Paper>
                <Paper>
                    <p>purchase</p>
                    <hr/>
                    <ul>
                        <li>p_id (Primary Key)</li>
                        <li>cid</li>
                        <li>vin</li>
                        <li>vsc_id</li>
                        <li>l_id</li>
                        <li>date</li>
                    </ul>
                </Paper>
                <Paper>
                <p>customer</p>
                    <hr/>
                    <ul>
                        <li>cid (Primary Key)</li>
                        <li>c_fname</li>
                        <li>c_lname</li>
                        <li>c_address</li>
                        <li>c_phone</li>
                    </ul>
                </Paper>
                <Paper>
                    <p>vehicle</p>
                    <hr/>
                    <ul>
                        <li>vin (Primary Key)</li>
                        <li>d_name (Foreign Key)</li>
                        <li>v_make</li>
                        <li>v_model</li>
                        <li>v_year</li>
                        <li>v_mileage</li>
                        <li>v_color</li>
                        <li>v_price</li>
                    </ul>
                </Paper>
                <Paper>
                    <p>lender</p>
                    <hr/>
                    <ul>
                        <li>l_id (Primary Key)</li>
                        <li>l_phone</li>
                        <li>l_address</li>
                    </ul>
                </Paper>
                <Paper>
                    <p>vsc</p>
                    <hr/>
                    <ul>
                        <li>vsc_id (Primary Key)</li>
                        <li>vsc_title</li>
                        <li>vsc_description</li>
                        <li>vsc_price</li>
                        <li>vsc_cost</li>
                    </ul>
                </Paper>
            </div>
            {/* end grid */}
            <h3>Business Scenerios</h3>
            <ol>
                <li>List the vin and price of all vehicles at a specific dealership (Inventory)</li>
                <li>List all customers that have purchased a vehicle with a VSC at a specific store (vehicle service)</li>
                <li>Lookup the name and phone number of a customer that purchased a specific vehicle (customer service call center)</li>
                <li>Count the number of VSC’s sold per dealership over a quarter (management metrics)</li>
                <li>List the total amount financed grouped by lender and dealership (goal metrics)</li>
            </ol>
          </Paper>
        </div>

    );
  }
}

export default One;