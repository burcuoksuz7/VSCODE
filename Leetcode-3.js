var lengthOfLongestSubstring = function(s) {
    
};

var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    }
    var p = 0;
    var q = 1;
    var result = 1;
    while (q < length) {
        var sub = s.slice(p, q);
        var i = sub.indexOf(s[q]);
        if (i !== -1) {
            p = p + i + 1;
        }
        q++;
        result = q - p > result ? q - p : result;
    }
    return result;
};
