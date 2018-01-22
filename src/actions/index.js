import { SAVE_COMMENT } from './types';
import comment_list from '../components/comment_list';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}