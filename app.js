import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <React.Fragment>
      {console.log('Hello from app.js!1')}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
