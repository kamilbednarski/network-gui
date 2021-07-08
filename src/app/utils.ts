import { Post } from './post';
import { PostComment } from './comment';

export const formatNumber = (number: number) => {
    return Math.abs(number) > 999
      ? Math.sign(number) * (Math.round(Math.abs(number) / 100) / 10) + 'k'
      : Math.sign(number) * Math.abs(number);
}

export const displayObjectCreationDateForToday = (object: Post | PostComment) => {
    return "today at " + object.timeOfCreation;
}

export const displayObjectCreationDateForYesterday = (object: Post | PostComment) => {
    return "yesterday at " + object.timeOfCreation;
}