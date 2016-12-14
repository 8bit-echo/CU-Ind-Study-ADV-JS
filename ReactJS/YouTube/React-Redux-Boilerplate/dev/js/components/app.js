/* jshint esversion: 6 */
import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-details';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr />
        <h2> User Details: </h2>
        <UserDetail />
     </div>
);

export default App;
