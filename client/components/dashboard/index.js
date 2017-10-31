import React from 'react';
import DashboardForm from './DashboardForm';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <DashboardForm />
        </div>
      </div>
    );
  }
}

export default Dashboard;
