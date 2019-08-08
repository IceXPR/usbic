const { exec } = require ('child_process');

process.on('message', function (message) {
    console.log('cloning disk:', message)
    exec(`dd bs=4M if=${message.sourceImage} of=${message.targetDisk} conv=fsync`, (err, stdout, stderr) => {
        process.send({
            stdout: stdout,
            stderr: stderr,
            err: err
        })
        process.disconnect();
    });
});