# Angular Regular Expression Filter

## Description
An AngularJS filter for searching by a regular expression

### Use cases

    expect(regex(items, '').length).toBe(4);
    expect(regex(items, '.*oo.*').length).toBe(1);
    expect(regex(items, '.*oo.*')[0]).toBe('hook');
    expect(regex(items, '.*pa.*').length).toBe(1);
    expect(regex(items, '.*pa.*')[0]).toEqual(items[1]);
    expect(regex(items, '.*nd.*').length).toBe(2);
    expect(regex(items, '.*nd.*')).toEqual([items[1], items[2]]);
    expect(regex(items, '.*12.*').length).toBe(2);
    expect(regex(items, '.*12.*')).toEqual([items[1], 121242]);
    expect(regex(items, '.*land$').length).toBe(1);
    expect(regex(items, '.*land$')[0]).toEqual(items[1]);
    expect(regex(items, "I don't exist").length).toBe(0);
    
## Install

### Via bower

    bower install --save angular-regex-filter

Include `src/angular-regex-filter.js` or `dist/angular-regex-filter.js` to your project.

    <script src="/bower_components/angular-regex-filter/dist/angular-regex-filter.js"></script>
    
Don't forget to add `regex.filter` module to app's dependecies.

## Test && Build

    $ npm install
    $ bower install

### Test

    $ gulp test

### Build

    $ gulp js