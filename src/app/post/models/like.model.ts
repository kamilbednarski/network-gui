import { UserPublicDetails } from "src/app/profile/models/user-public-details.model";
import { Post } from "./post.model";

export interface Like {
    userData: UserPublicDetails,
    post: Post,
    comment: Comment
}