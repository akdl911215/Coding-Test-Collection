Array.matrix = function (m, n, initial) {
    var a,
        i,
        j,
        mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// matrix('행', '열', '기본값')
var arr = Array.matrix(5, 2, 0);
console.log(arr)
