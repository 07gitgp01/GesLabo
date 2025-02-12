export interface login {
    email: string;
    password: string;
}

export interface register {
    firstName: string;
    lastName: string;
    ufr: string;
    university: string;// optionel: par defaut cest UJKZ
    speciality: string; // optionel
    phone: string;
    email: string;
    status : string // Etudiant, Ensegn-chercheur, Resp-labo, administrateur
}