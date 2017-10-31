import React from 'react';
import NavigationBar from './common/NavigationBar';
import Footer from './common/Footer';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
