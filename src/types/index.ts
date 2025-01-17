export interface Ticket {
    ticket_id: number;
    ticket_name: string;
    status: string;
    assigned_team:string;
    timestamp: string;
    category:string;
    module:string;
    priority:string;
    project_name:string;
    ticket_description:string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }