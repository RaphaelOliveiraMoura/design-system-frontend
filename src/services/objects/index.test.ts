import { MapObject } from './types';

import { merge, getValueFromKeyPath, createObjectFromKeyPath } from '.';

describe('ObjectManipulator', () => {
  it('should merge objects', () => {
    const testCases = [
      [{ a: 'a' }, { b: 'b' }, { a: 'a', b: 'b' }],
      [{ a: 'a' }, {}, { a: 'a' }],
      [
        { a: 'a', b: { c: 'c', d: 'd', e: { f: 'f' } } },
        { b: { c: 'c2', e: { f: 'f2' } } },
        { a: 'a', b: { c: 'c2', d: 'd', e: { f: 'f2' } } }
      ],
      [null, null, {}],
      [{}, '', {}],
      ['', '', {}]
    ];

    testCases.forEach(([object1, object2, result]) =>
      expect(merge(object1 as MapObject, object2 as MapObject)).toEqual(result)
    );
  });

  it('should create a object from a key path', () => {
    const testCases = [
      ['a', '', { a: null }],
      ['a', 'value', { a: 'value' }],
      ['a.b.c', '', { a: { b: { c: null } } }],
      ['a.b.c', 'value', { a: { b: { c: 'value' } } }]
    ];

    testCases.forEach(([keyPath, value, result]) =>
      expect(
        createObjectFromKeyPath(keyPath as string, value as string)
      ).toEqual(result)
    );
  });

  it('should get a value by key path from object', () => {
    const testCases = [
      ['a', { a: 'b' }, 'b'],
      ['a.b.c', { a: { b: { c: 'value' } } }, 'value'],
      ['a.b.c.d.e', { a: { b: {} } }, undefined]
    ];

    testCases.forEach(([keyPath, source, result]) =>
      expect(
        getValueFromKeyPath(keyPath as string, source as MapObject)
      ).toEqual(result)
    );
  });
});
