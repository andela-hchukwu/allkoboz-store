import React from 'react';

class Footer extends React.Component {

  render() {

    return (

      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>copyright &copy; 2017 allkoboz.com. All Rights Reserved</p>
            </div>
            <div className="col-md-4">
              <p>ALLKOBOZ<br />
                <i className="fa fa-phone"></i> +234 803 921 0339</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
