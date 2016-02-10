import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Main Layout</h1>
      </div>
    );
  }
}

MainLayout.defaultProps = {
  content: 'PropValue'
};

export { MainLayout };
