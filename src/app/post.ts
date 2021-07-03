export interface Post {
    id: number;
    content: string;
    numberOfLikes: number;
    numberOfShares: number;
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
