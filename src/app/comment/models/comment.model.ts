export interface Comment {

    commendId: number,
    content: string,
    numberOfLikes: number,
    numberOfShares: number,
    postId: number,
    authorId: number,
    authorFirstName: string,
    authorLastName: string,
    authorUsername: string,
    dateOfCreation: string,
    timeOfCreation: string,
    ageOfCommentInYears: number,
    ageOfCommentInDays: number,
    ageOfCommentInHours: number,
    ageOfCommentInMinutes: number
    isModified: boolean,
    dateOfModification: string,
    timeOfModification: string,
}
