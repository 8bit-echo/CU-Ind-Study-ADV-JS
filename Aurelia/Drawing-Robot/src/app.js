/* jshint esversion: 6 */

import { data } from './data';
export class App {
    configureRouter(config, router){
        config.title = "Title";
        config.map([
            {route:'' ,       moduleId:'no-selection' , title:'Select' },
            {route:'second/:id' , moduleId:'contact-detail' , name:'contacts' }
    ]);
    this.router = router;
    }

    loop(){
        for (var person in data){
            return person.name;
        }
    }

}
