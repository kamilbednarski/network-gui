import { User } from "./user";

export interface Post {
    id: number;
    user: User;
    content: string;
    numberOfLikes: number;
    numberOfShares: number;
    commentCounter: number;
    dateOfCreation: string;
    timeOfCreation: string;
    wasItModified: boolean;
    dateOfModofication: string | null;
    timeOfModification: string | null;
    ageOfPostInYears: number;
    ageOfPostInMonths: number;
    ageOfPostInDays: number;
    ageOfPostInMinutes: number;
}
