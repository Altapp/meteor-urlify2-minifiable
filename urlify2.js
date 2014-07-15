URLify2 = function (s, num_chars) {
    s = URLify2.downcode(s); // Convert to ASCII
    //s = URLify2.nfd(s).replace(/[^\u0000-\u00FF]/g, ""); // Remove unwanted characters
    s = s.replace(/[^\u0000-\u00FF]/g, ""); // Remove unwanted characters
    s = s.replace(/[^\w\s-]/g, ''); // Trim leading/trailing dashes
    s = s.replace(/^\s+|\s+$/g, '');
    s = s.replace(/[-\s]+/g, '-'); // Convert spaces to dashes
    s = s.replace(/^-+|-+$/g, ''); // Trim leading/trailing dashes
    s = s.toLowerCase();
    if (num_chars) {
        if (s.length <= num_chars) {
            return s;
        }
        var splits = s.split('-');
        if (splits.length === 1) {
            return s.substring(0, num_chars);
        }
        else {
            s = splits.shift();
            while (splits[0] && s.length + splits[0].length + 1 <= num_chars) {
                s += '-' + splits.shift();
            }
            return s;
        }
    }
    else {
        return s;
    }
};