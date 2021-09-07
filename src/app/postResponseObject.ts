export interface PostResponseObject {
    postId: number;
    content: string;
    numberOfLikes: number;
    numberOfShares: number;
    numberOfComments: number;
    authorId: number;
    authorFirstName: string;
    authorLastName: string;
    authorUsername: string;
    dateOfCreation: string;
    timeOfCreation: string;
    ageOfPostInYears: number;
    ageOfPostInDays: number;
    ageOfPostInHours: number;
    ageOfPostInMinutes: number;
    wasItModified: boolean;
    dateOfModofication: string | null;
    timeOfModification: string | null;
}
