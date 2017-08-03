import React from 'react';
import { connect } from 'react-redux';

class DashboardPage extends React.Component {
  render() {
    return (
      <div className="dashboard row">
        <div className="col s12">
          <div className="col s12 z-depth-5 card-panel">
            <h5 className="center">DASHBOARD</h5>
          </div>
          <div className="row">
            <div className="col s12">
              <ul
                className="tabs tab-demo-active z-depth-1 blue-grey">
                <li className="tab col s4">
                  <a className="white-text waves-effect waves-light active"
                    href="#public">Public</a>
                </li>
                <li className="tab col s4">
                  <a className="white-text waves-effect waves-light"
                    href="#role">Role</a>
                </li>
                <li className="tab col s4">
                  <a className="white-text waves-effect waves-light"
                    href="#private">Private</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(DashboardPage);
