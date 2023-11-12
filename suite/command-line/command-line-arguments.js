const getCmdArgs = () => process.argv.slice(2);

// node my-script.js --name=John --age=30
getCmdArgs(); // ['--name=John', '--age=30']
