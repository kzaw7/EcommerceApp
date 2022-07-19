import { Component, OnInit } from '@angular/core';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { OktaAuth } from '@okta/okta-auth-js';
import myAppConfig from 'src/app/config/my-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignIn: any;

  constructor(private oktaAuth: OktaAuthService) { 

this.oktaSignIn = new OktaSignIn({
  logo:'assets/images/logo.png',
  baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
  clientId: myAppConfig.oidc.clientId,
  redirectUri: myAppConfig.oidc.redirectUri,
  authParams:{
    pkce: true,
    issuer: myAppConfig.oidc.issuer,
    scopes: myAppConfig.oidc.scopes
  }
});

}
ngOnInit(): void {
  this.oktaSignIn.remove();

  this.oktaSignIn.renderEl({
    el: '#okta-sign-in-widget'}, // this name should be same as div tag id in login.component.html
    (response) => {
      if (response.status === 'SUCCESS') {
        this.oktaAuthService.signInWithRedirect();
      }
    },
    (error) => {
      throw error;
    }
  );
}
  
}

