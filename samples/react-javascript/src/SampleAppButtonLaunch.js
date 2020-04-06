import * as React from 'react';
import { AzureAD, LoginType, AuthenticationState } from 'react-aad-msal';
import { basicReduxStore } from './reduxStore';
import GetAccessTokenButton from './GetAccessTokenButton';
import GetIdTokenButton from './GetIdTokenButton';

// Import the authentication provider which holds the default settings
import { authProvider } from './authProvider';

class SampleAppButtonLaunch extends React.Component {
  constructor(props) {
    super(props);

    // Change the login type to execute in a Popup
    const options = authProvider.getProviderOptions();
    options.loginType = LoginType.Popup;
    authProvider.setProviderOptions(options);
  }

  render() {
    return (
      <AzureAD provider={authProvider} reduxStore={basicReduxStore}>
        {({ login, logout, authenticationState }) => {
          const isInProgress = authenticationState === AuthenticationState.InProgress;
          const isAuthenticated = authenticationState === AuthenticationState.Authenticated;
          const isUnauthenticated = authenticationState === AuthenticationState.Unauthenticated;

          if (isAuthenticated) {
            return (
              <React.Fragment>
                <div className="d-none d-md-inline" onClick={logout} disabled={isInProgress}>Login</div>

              </React.Fragment>
            );
          } else if (isUnauthenticated || isInProgress) {
            return (
              <div className="d-none d-md-inline" onClick={login} disabled={isInProgress}>Login</div>

            );
          }
        }}
      </AzureAD>
    );
  }
}
export default SampleAppButtonLaunch;
