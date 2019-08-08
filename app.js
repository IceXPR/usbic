var child_process = require('child_process')

const args = process.argv.slice(2);
const sourceImage = args[0]
const targetDisks = args.splice(1);

var done = 0;
var date = new Date();

console.log('Source Image:', sourceImage);
console.log('Targe Disks:', targetDisks);
console.log("Starting cloning at: ", date.toLocaleTimeString());

for (let i = 0; i < targetDisks.length; i++) {
    let dd_child = child_process.fork('./dd_process');
    date = new Date();
    console.log("child ", i, " started at: ", date.toLocaleTimeString());
    dd_child.send({
        sourceImage: sourceImage,
        targetDisk: targetDisks[i]
    });
    dd_child.on('message', function (message) {
        date = new Date();
        console.log("child ", i, " ended at: ", date.toLocaleTimeString());
        console.log(message)
        done++;
        if (done === targetDisks.length) {
            date = new Date();
            console.log('Ended cloning at:', date.toLocaleTimeString());
        }
    })
}