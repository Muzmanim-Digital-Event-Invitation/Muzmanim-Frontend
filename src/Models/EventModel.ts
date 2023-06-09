export interface EventModel {
    id?: string;
    userEmail?: string;
    eventType: number;
    hallName: string;
    name1: string;
    name2?: string;
    food: boolean;
    vegetarian: boolean;
    vegan: boolean;
    kids: boolean;
    regular: boolean;
    city: string;
    street: string;
    eventDate: Date;
    eventStartHour: string;
    imageId: string;
    background: string;
    colorText: string;
    iconId: string;
    image: File;

}