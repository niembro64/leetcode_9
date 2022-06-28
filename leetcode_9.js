function isPalindrome(x) {
    var s = x.toString();
    for (var i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}
var a = [123, 121, 222, 3443, 34543, 33322];
a.forEach(function (x, i) {
    console.log(isPalindrome(x));
});
