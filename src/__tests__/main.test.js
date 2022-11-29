/* eslint-disable */

import {obj,orderByProps } from '../main'

test('check orderByProps', () => {
    const expected = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 }
      ]
    const received = orderByProps(obj, ["name", "level"]);
    console.log("received", received)
    expect(received).toStrictEqual(expected);
});