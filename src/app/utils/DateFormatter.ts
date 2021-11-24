import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

export class DateFormatter {
    public static displayObjectCreationDateForToday(object: Post | Comment): string {
        return "today at " + object.timeOfCreation;
    }

    public static displayObjectCreationDateForYesterday(object: Post | Comment): string {
        return "yesterday at " + object.timeOfCreation;
    }
}