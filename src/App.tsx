import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div >
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <br />

        </div>
      )}
    </Authenticator>
  );
}

export default App;
