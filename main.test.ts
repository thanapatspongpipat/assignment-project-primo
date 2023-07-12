import { merge } from './main';

describe('merge function', () => {
  it('should merge two sorted arrays into a single sorted array', () => {
    const collection1 = [1, 4, 5, 7];
    const collection2 = [2, 6, 9, 10];
    const expected = [1, 2, 4, 5, 6, 7, 9, 10];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it('when merge result should be an empty arrays', () => {
    const collection1 = [];
    const collection2 = [];
    const expected = [];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it('should merge when collection1 is empty', () => {
    const collection1 = [];
    const collection2 = [4, 5, 6];
    const expected = [4, 5, 6];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it('should merge when collection2 is empty', () => {
    const collection1 = [1, 2, 3];
    const collection2 = [];
    const expected = [1, 2, 3];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });

  it('should merge when both collection empty', () => {
    const collection1 = [];
    const collection2 = [];
    const expected = [];

    const result = merge(collection1, collection2);

    expect(result).toEqual(expected);
  });
});
