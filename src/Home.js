import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ drinks, snacks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold text-center">
              Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>

          {/* Added following to show number of items available in menus and add new items*/}
          <div>         
            <h6>{ snacks.length } - items on snacks menu</h6>
            <h6>{ drinks.length } - different drinks</h6>
            <NavLink to="/add/snacks">Add snacks</NavLink> 
            <br/>
            <NavLink to="/add/drinks">Add drinks</NavLink> 
          </div>

        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
