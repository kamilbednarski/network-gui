import { UserPublicDetails } from "src/app/profile/models/user-public-details.model";

export interface Post {

    postId: number;
    content: string;
    numberOfLikes: number;
    numberOfShares: number;
    numberOfComments: number;
    dateOfCreation: string;
    timeOfCreation: string;
    ageOfPostInYears: number;
    ageOfPostInDays: number;
    ageOfPostInHours: number;
    ageOfPostInMinutes: number;
    wasItModified: boolean;
    dateOfModofication: string | null;
    timeOfModification: string | null;
    authorId: number;
    authorData: UserPublicDetails;
}
