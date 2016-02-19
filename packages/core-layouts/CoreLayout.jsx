import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

MainLayout.defaultProps = {
  content: ''
};

export { MainLayout };
