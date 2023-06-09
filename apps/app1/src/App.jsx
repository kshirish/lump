import React from 'react';
import { Button, EnvContext } from '@lump/ui';
// import { sum, subtract } from '@lump/utils';

const App = () => {
  return (
    <EnvContext.Provider value={import.meta.env}>
      <EnvContext.Consumer>
        {({ VITE_API_URL }) => (
          <>
            <h1 className="text-primary">{VITE_API_URL}</h1>
            <Button>Hello World</Button>
          </>
        )}
      </EnvContext.Consumer>
    </EnvContext.Provider>
  );
};

export default App;
