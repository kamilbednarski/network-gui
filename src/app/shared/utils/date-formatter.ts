import { Post } from '../../post/models/post.model';
import { Comment } from '../../comment/models/comment.model';

export class DateFormatter {

    static displayObjectCreationDateForToday(object: Post | Comment): string {
        return "today at " + object.timeOfCreation;
    }

    static displayObjectCreationDateForYesterday(
        object: Post | Comment): string {
        return "yesterday at " + object.timeOfCreation;
    }
}
