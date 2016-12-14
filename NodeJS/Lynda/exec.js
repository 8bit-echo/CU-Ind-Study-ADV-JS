var exec = require('child_process').exec;

//execute terminal commands
//exec(command, callback(error, output){})

exec("ls", function(err, stdout){
    if (err) {
        throw err;
    }
    console.log('Listening Finished');
    console.log(stdout);
});
