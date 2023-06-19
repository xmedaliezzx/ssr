export interface AppointementMemberData {
    firstname?: string;
    lastname?: string;
    birthDate?: Date;
    address?: string;
    city?: string;
}


export interface SocketRdvReqDTO {
    subject?: string;
    description?: string;
    typePrestataire?: string;
    maxDistance?: number;
    duration?: number;
    childId?: string;
    date?: string;
    gender?: string;
    inconnuAddress?: string;
    ordonnance?: boolean;
    ordonnance_file?: string;
    type?: string;
    category?: string;
    souscategory?: string;
    member?: AppointementMemberData;
}