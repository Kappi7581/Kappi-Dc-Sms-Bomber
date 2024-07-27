function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / github.com/Kappi7581-Dc-Sms-Bomber";
    } else {
        process.stdout.write('\x1b]2;' + x + " / github.com/Kappi7581/Kappi-Dc-Sms-Bomber" + '\x1b\x5c');
    }
}

module.exports = console_title;
