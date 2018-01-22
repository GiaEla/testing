import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment list', () => {

  let component;

  beforeEach(() => {
    const props = ['First comment', 'second comment']

    component = renderComponent(CommentList, null, { comments: props });
  });

  it('shows an li for each component', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('First comment');
    expect(component).to.contain('second comment');
  });
});
