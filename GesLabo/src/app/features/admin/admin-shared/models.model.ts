interface Materiel {
    // id: string;
    nom: string;
    description?: string;
    categorie: string; // Utilisez l'ID de catégorie en fonction de votre implémentation
    numero_serie: string;
    etat: 'disponible' | 'en_reparation' | 'hors_service';
    image?: File; 
    laboratoire: string; // Utilise l'ID de laboratoire en fonction de l'implémentation
    est_stock_general: boolean;
    notice?: string;
}

interface Category{
    // id: string;
    nom: string;
    code: number;
    description: string;

}