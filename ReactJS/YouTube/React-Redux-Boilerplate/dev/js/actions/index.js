/* jshint esversion: 6 */
export const selectUser = (user) => {
    console.log('you cliked on user: ', user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    };
};
