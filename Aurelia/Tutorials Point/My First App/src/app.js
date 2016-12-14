/* jshint esversion: 6 */
import { inject } from 'aurelia-framework';
import { DependencyTest } from './dependency-test';

@inject(DependencyTest)

export class App {
  constructor(DependencyTest) {
    this.heading = 'My First Aurelia App';
    this.subheading = "";
    console.log(DependencyTest);
    this.twoWayBinding = "";

  }

  injectSubheading() {
    this.subheading = "BAM. Subheading";
  }

}

export class CustomComponent {}
