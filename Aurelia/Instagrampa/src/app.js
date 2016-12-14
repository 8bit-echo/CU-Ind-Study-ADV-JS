/* jshint esversion: 6 */
// Auth0 clientID=h1zHM4kD1cN1YOD5UJzGru6FqKKAzjk6
// Auth0 client secret = zBtjI1BDKDsVlRkf5IIi85V7Mae3p8sE61Z7rVMQQsDrCt3cG9V3UtBOocm7c2VG

export class App {
  message = "Welcome to Aurelia";

  configureRouter(config, router) {
    config.title = "Instagrampa";

    config.map(
      [{
        route: ['', 'home'],
        name: 'home',
        moduleId: './home',
        nav: true,
        title: 'Home'
      }, {
        route: ['me', 'me'],
        name: 'me',
        moduleId: './me',
        nav: true,
        title: 'Me'

    }]);

    this.router = router;
  }
}
