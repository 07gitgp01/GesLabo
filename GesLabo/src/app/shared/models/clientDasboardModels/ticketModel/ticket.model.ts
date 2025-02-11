export interface Ticket {
    id: string; 
    statut: string;  
    priorite: string;    
    titre: string;  
    client: string;     
    dateDebut: Date;   
    dateFin: Date;   
    reponse: string;
}

export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}