import { User } from "./user";

export interface PostComment {
    id: number,
    user: User,
    content: string,
    numberOfLikes: number,
    numberOfShares: number,
    dateOfCreation: string,
    timeOfCreation: string,
    wasItModified: boolean,
    dateOfModification: string,
    timeOfModification: string,
    ageOfCommentInYears: number,
    ageOfCommentInDays: number,
    ageOfCommentInHours: number,
    ageOfCommentInMinutes: number
}
