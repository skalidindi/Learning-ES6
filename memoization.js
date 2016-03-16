/**
 * A memoize function to cache return values where possible.
 *
 * @author Callum Macrae (@callumacrae)
 * @license Public domain.
 *
 * @param fn The function to memoize.
 * @param sort If true, arguments will be sorted. Useful for functions where
 *             the order of arguments don't matter.
 */
function memoize(fn, sort) {
    var cache = {};

    return function () {
        var args = Array.prototype.slice.call(arguments);

        if (sort) {
            args.sort();
        }

        if (cache[JSON.stringify(args)] !== undefined) {
            return cache[JSON.stringify(args)];
        }

        var result = fn.apply(this, args);
        cache[JSON.stringify(args)] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Without memoization
console.time('Plain function call');
for (var i = 0; i < 3; i++) {
    fibonacci(43);
}
console.timeEnd('Plain function call');

// WIth memoization
var fibonacci = memoize(fibonacci);

console.time('Memoized function call');
for (var i = 0; i < 3; i++) {
    fibonacci(43);
}
console.timeEnd('Memoized function call');
