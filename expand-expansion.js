var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;

export default expand;
export {expand};

function expand(target) {
    var hasFunc = false;
    var source;
    var key;
    var l = arguments.length;

    if (target == null) {
        target = {};
    };

    for (var i = 1; i < l; ) {
        if (source = arguments[i++]) {
            if (typeof source === 'function') {
                hasFunc = true;
                source = source.prototype;
            };

            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                    //target[key] = source[key];
                };
            };
        };
    };

    if (hasFunc) {
        for (var i = 1; i < l; ) {
            source = arguments[i++]
            if (typeof source === 'function') {
                source.call(target);
            };
        );
    };

    return target;
};
