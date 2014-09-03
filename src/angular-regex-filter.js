'use strict';

angular.module('regex.filter', ['ng'])
    .filter('regex', ['$filter', function ($filter) {
        return function (array, expression) {
            var fields = [],
                fillFields = function (expression) {
                    for (var key in expression) {
                        if (typeof key === 'object') {
                            fillFields(expression[key]);
                        }
                        fields.push(key);
                    }
                },
                isObject = typeof expression === 'object';
            if (isObject) {
                fillFields(expression);
            }
            var regexCheck = function (regex, value) {
                    return ('' + value).match(new RegExp(regex));
                },
                matches = function (value) {
                    if (!isObject) {
                        return regexCheck(expression, value);
                    }
                    if (fields.length > 0) {
                        var match;
                        for (var key in fields) {
                            match = regexCheck(expression[fields[key]], value);
                        }
                        return match;
                    }
                    return true;
                },
                regexPredicate = function (value) {
                    if (typeof value !== 'object') {
                        return matches(value);
                    }
                    for (var key in value) {
                        var exists = fields.length ? fields.indexOf(key) >= 0 : true;
                        if (exists && regexPredicate(value[key])) {
                            return true;
                        }
                    }
                };
            return $filter('filter')(array, regexPredicate);
        };
    }]);
