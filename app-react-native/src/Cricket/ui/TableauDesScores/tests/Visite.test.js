import {grouper} from '../Visite';

describe('<Visite />', () => {
  it('groupe les chiffres', () => {
    expect(grouper([17, 17, 18, 25, 25])).toEqual([
      ['17', 2],
      ['18', 1],
      ['25', 2],
    ]);
  });
});
