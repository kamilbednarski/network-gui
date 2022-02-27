import { UserPublicDetails } from "src/app/profile/models/user-public-details.model";

export interface Comment {

    commendId: number,
    content: string,
    numberOfLikes: number,
    numberOfShares: number,
    postId: number,
    dateOfCreation: string,
    timeOfCreation: string,
    ageOfCommentInYears: number,
    ageOfCommentInDays: number,
    ageOfCommentInHours: number,
    ageOfCommentInMinutes: number
    isModified: boolean,
    dateOfModification: string,
    timeOfModification: string,
    authorId: number,
    authorData: UserPublicDetails
}
