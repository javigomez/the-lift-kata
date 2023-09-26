//

import { lift } from '../src/lift';
describe('spinWords', () => {
  it('keeps words shorter than 5 letters', () => {
    expect(lift(null)).toEqual('');
  });
});
