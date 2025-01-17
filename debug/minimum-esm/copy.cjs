const fs = require('node:fs');
const fsPromises = require('node:fs/promises');

const path = require('node:path');

function copy(entry, srcDir, dstDir) {
    fs.cpSync(path.join(srcDir, entry), path.join(dstDir, entry), {
        recursive: true,
    });
}

async function main() {
    await fsPromises.rm('./dist', {recursive: true, force: true});

    console.log('copy index.html');
    [
        'index.html'
    ].forEach( file => {
        copy(file, './', `./dist/`);
    });
    console.log('finish copy mapray core');


    console.log('copy css');
    copy("mapray.css", '../../packages/ui/dist/', `./dist/styles/v1`);
    console.log('finish copy css');
}


main().catch(e => console.log(e));
