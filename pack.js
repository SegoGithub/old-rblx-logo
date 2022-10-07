// Pack and minify the extension into a zip file ready for uploading to Chrome Web Store and Mozilla Add-ons.

const fs = require('fs');
const jsonminify = require("jsonminify");
const fse = require("fs-extra");
const minify = require('@node-minify/core');
const csso = require('@node-minify/csso');
const uglifyES = require('@node-minify/uglify-es');
const archiver = require('archiver');


console.log("Packing extension for chrome...");
fs.mkdir('chrome-tmp', err => {
    if (err) {
        throw err;
    }
    console.log('Created chrome-tmp directory');
})

fse.copy('manifest-chrome.json', 'chrome-tmp/manifest.json', err => {
    if (err) {
        throw err;
    }
    console.log('Copied manifest-chrome.json to chrome-tmp/manifest.json');
})

try {
    fse.copy("./icon/", "./chrome-tmp/icon/");
    console.log("Copied icons to chrome-tmp");
} catch (err) {
    console.log(err);
}

fs.mkdir('chrome-tmp/css', err => {
    if (err) {
        throw err;
    }
    console.log('Created chrome-tmp/css directory');
})

fse.copy('./css/', './chrome-tmp/css/', err => {
    if (err) {
        throw err;
    }
    console.log('Copied css folder to chrome-tmp');
})

fs.mkdir('chrome-tmp/js', err => {
    if (err) {
        throw err;
    }
    console.log('Created chrome-tmp/js directory');
})

fse.copy('./js/', './chrome-tmp/js/', err => {
    if (err) {
        throw err;
    }
    console.log('Copied js folder to chrome-tmp');
})

fs.copyFile('LICENSE', 'chrome-tmp/LICENSE', err => {
    if (err) {
        throw err;
    }
    console.log("Copied LICENSE to chrome-tmp");
});

setTimeout(() => {
    console.log("Creating old-rblx-logo-chrome.zip...");
    const output = fs.createWriteStream('old-rblx-logo-chrome.zip');
    const archive = archiver('zip');
    output.on('close', () => {
        console.log(`Created old-rblx-logo-chrome.zip with ${archive.pointer()} total bytes`);
    });
    archive.on('error', err => {
        throw err;
    });
    archive.pipe(output);
    archive.directory('chrome-tmp/', false);
    archive.finalize();
    console.log("✅ Successfully packed extension for Chrome!")
}, 5000);

// firefox

console.log("Packing extension for firefox...");
fs.mkdir('firefox-tmp', err => {
    if (err) {
        throw err;
    }
    console.log('Created firefox-tmp directory');
})

fse.copy('manifest.json', 'firefox-tmp/manifest.json', err => {
    if (err) {
        throw err;
    }
    console.log('Copied manifest.json to firefox-tmp/manifest.json');
})

try {
    fse.copy("./icon/", "./firefox-tmp/icon/");
    console.log("Copied icons to firefox-tmp");
} catch (err) {
    console.log(err);
}

fs.mkdir('firefox-tmp/css', err => {
    if (err) {
        throw err;
    }
    console.log('Created firefox-tmp/css directory');
})

fse.copy('./css/', './firefox-tmp/css/', err => {
    if (err) {
        throw err;
    }
    console.log('Copied css folder to firefox-tmp');
})

fs.mkdir('firefox-tmp/js', err => {
    if (err) {
        throw err;
    }
    console.log('Created firefox-tmp/js directory');
})

fse.copy('./js/', './firefox-tmp/js/', err => {
    if (err) {
        throw err;
    }
    console.log('Copied js folder to firefox-tmp');
})

fs.copyFile('LICENSE', 'firefox-tmp/LICENSE', err => {
    if (err) {
        throw err;
    }
    console.log("Copied LICENSE to firefox-tmp");
});

setTimeout(() => {
    console.log("Creating old-rblx-logo-firefox.zip...");
    const output = fs.createWriteStream('old-rblx-logo-firefox.zip');
    const archive = archiver('zip');
    output.on('close', () => {
        console.log(`Created old-rblx-logo-firefox.zip with ${archive.pointer()} total bytes`);
    });
    archive.on('error', err => {
        throw err;
    });
    archive.pipe(output);
    archive.directory('firefox-tmp/', false);
    archive.finalize();
    console.log("✅ Successfully packed extension for FireFox!")
}, 5000);
setTimeout(() => {
    console.log("Cleaning up temporary files...");
    fse.removeSync('chrome-tmp');
    fse.removeSync('firefox-tmp');
    console.log("✅ Successfully cleaned up temporary files!")
}, 6000);
