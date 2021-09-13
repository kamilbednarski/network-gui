import { PostResponseObject } from './postResponseObject';
import { CommentResponseObject } from './commentResponseObject';

export const formatNumber = (number: number) => {
    return Math.abs(number) > 999
      ? Math.sign(number) * (Math.round(Math.abs(number) / 100) / 10) + 'k'
      : Math.sign(number) * Math.abs(number);
}

export const displayObjectCreationDateForToday = (object: PostResponseObject | CommentResponseObject) => {
    return "today at " + object.timeOfCreation;
}

export const displayObjectCreationDateForYesterday = (object: PostResponseObject | CommentResponseObject) => {
    return "yesterday at " + object.timeOfCreation;
}