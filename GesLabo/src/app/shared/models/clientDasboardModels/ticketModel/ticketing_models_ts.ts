export interface Client {
    id: string;
    name: string;
    address?: string;
    phone: string;
    status: 'ACTIVE' | 'INACTIVE'; // Statut du client
    subscriptionPlan: string; // Exemple : "Basic", "Premium", etc.
    employees: Employee[];
  }

  
  export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: 'ADMIN' | 'USER'; // Rôle de l'employé
  }

  export interface Ticket {
    id: string;
    title: string;
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH'; // Niveau de priorité
    status: 'NEW' | 'IN_PROGRESS' | 'COMPLETED'; // Statut du ticket
    createdDate: Date;
    updatedDate: Date;
    completionDate?: Date; // Date de complétion
    
    initiator: Employee|string; // Employé ayant créé le ticket
    assignedEmployees: Employee[]|string[]; // Liste des employés assignés
    tasks: Task[]|string[]; // Liste des tâches du ticket
  }

  export interface Task {
    id: string;
    description: string;
    status: 'TO_DO' | 'IN_PROGRESS' | 'DONE'; // Statut de la tâche
    assignedTo?: Employee; // Peut être un employé ou une tierce personne
    comments: string[]; // Liste des commentaires
    deadline?: Date; // Date limite pour la tâche
    creationDate: Date;
    completionDate?: Date; // Date de complétion
    lastUpdated: Date;
  }
  export interface Notification {
    id: string;
    type: 'EMAIL' | 'SMS'; // Type de notification
    content: string;
    ticketId: string; // Référence au ticket concerné
    recipient: string; // Email ou téléphone du destinataire
    sentDate: Date;
  }
  
  

  
  