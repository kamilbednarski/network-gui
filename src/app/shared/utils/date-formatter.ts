import { Post } from '../../post/models/post.model';
import { Comment } from '../../comment/models/comment.model';

export class DateFormatter {
    public static displayObjectCreationDateForToday(object: Post | Comment): string {
        return "today at " + object.timeOfCreation;
    }

    public static displayObjectCreationDateForYesterday(object: Post | Comment): string {
        return "yesterday at " + object.timeOfCreation;
    }
}