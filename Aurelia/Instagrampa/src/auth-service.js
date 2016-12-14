/* jshint esversion: 6 */
import { Auth0 } from 'auth0-js';

var Auth0ClientID = "h1zHM4kD1cN1YOD5UJzGru6FqKKAzjk6";
var Auth0ClientSecret = "zBtjI1BDKDsVlRkf5IIi85V7Mae3p8sE61Z7rVMQQsDrCt3cG9V3UtBOocm7c2VG";

export class AuthService {
  constructor() {
    // Initialize Auth0
    this.auth0 = new Auth0({
      domain:       'http://localhost:9000',
      clientID:     Auth0ClientID,
      callbackURL:  'http://localhost:9000/#/',
      callbackOnLocationHash: true
    });
  }

  sigin() {
    //Keep a copy of 'original' this
    const _this = this;
    // Login with IG
    this.auth0.login({
      connection: 'instagram',
      popup: true
    },
    function(err, profile) {
      if (err) {
        alert("something went wrong: " + err.message);
        return;
      }
      // Use ID token to get Instagram user profile
      _this.auth0.getProfile(profile.idToken, function (err, profile) {
        if(err) {
          alert(err);
          return;
        }
        localStorage.setItem('token', profile.identities[0].access_token);
      });
    });
  }

  signout() {
    localStorage.removeItem('token');
  }

}
