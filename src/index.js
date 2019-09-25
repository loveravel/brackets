module.exports = function check(str, bracketsConfig) {
    if (!str.length || str.length % 2 !== 0) {
        return false;
    }

    let i = 0;

    while (i < bracketsConfig.length) {
        const currentConfig = bracketsConfig[i].join('');
        if (str.includes(currentConfig)) {
            str = str.replace(currentConfig, '');
            i = 0;
        } else {
            i++;
        }
    }

    return !str;
}
