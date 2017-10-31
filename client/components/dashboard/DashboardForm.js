import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }


  render() {
    return (
      <div className="dashboard row">
        <div className="col-md-12">
          <div className="col-md"></div>
        </div>
      </div>
      );
  }
}

Dashboard.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(Dashboard);
