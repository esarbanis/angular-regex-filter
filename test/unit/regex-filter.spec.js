describe('regex', function () {

  beforeEach(module('regex.filter'));

  describe('regex filter', function () {
    var regex;
    beforeEach(inject(function ($filter) {
      regex = $filter('regex');
    }));

    it('should filter any kind of object by specified regex', function () {
      var items = ['hook', {name: 'peter', surname: 'pan', address: {country: 'neverland', number: '12'}}, ['wendy'], 121242];

      expect(regex(items, '').length).toBe(4);
      expect(regex(items, undefined).length).toBe(4);

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
    });
    it('should filter on specific property', function () {
      var items = ['hook', {name: 'peter', surname: 'pan', address: {country: 'neverland', number: '12'}}, ['wendy'], 121242];
      expect(regex(items, {}).length).toBe(4);

      expect(regex(items, {name: '.*a.*'}).length).toBe(0);

      expect(regex(items, {surname: '.*a.*'}).length).toBe(1);

      expect(regex(items, {name: '.*r$'}).length).toBe(1);

      expect(regex(items, {name: 'pe.*r$'})[0].name).toBe('peter');
    });
  });

});