const fs = require('fs');
const fse = require('fs-extra');
const archiver = require('archiver');

function zipDir(srcDir, outFile) {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outFile);
        const archive = archiver('zip', { zlib: { level: 9 } });
        output.on('close', () => resolve(archive.pointer()));
        archive.on('warning', err => { if (err.code !== 'ENOENT') reject(err); });
        archive.on('error', reject);
        archive.pipe(output);
        archive.directory(srcDir, false);
        archive.finalize();
    });
}

async function build(target, manifestSrc, tmpDir, outZip) {
    console.log(`Packing extension for ${target}...`);

    await fse.remove(tmpDir);
    await fse.ensureDir(tmpDir);

    await fse.copy(manifestSrc, `${tmpDir}/manifest.json`);
    await fse.copy('./icon/', `${tmpDir}/icon/`);
    await fse.copy('./css/', `${tmpDir}/css/`);
    await fse.copy('./js/', `${tmpDir}/js/`);
    await fse.copy('LICENSE', `${tmpDir}/LICENSE`);

    const bytes = await zipDir(tmpDir, outZip);
    await fse.remove(tmpDir);

    console.log(`✅ Created ${outZip} (${bytes} bytes)`);
}

(async () => {
    try {
        await build('Chrome', 'manifest-chrome.json', 'chrome-tmp', 'old-rblx-logo-chrome.zip');
        await build('Firefox', 'manifest.json', 'firefox-tmp', 'old-rblx-logo-firefox.zip');
        console.log('Done.');
    } catch (err) {
        console.error('Pack failed:', err);
        process.exit(1);
    }
})();
