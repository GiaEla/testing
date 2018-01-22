import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commentReducer from '../../src/reducers/comments';

describe('comment reducer', () => {
  it('handles default case correctly', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles SAVE_COMMENT case correctly', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
