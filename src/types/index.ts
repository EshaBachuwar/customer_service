export interface Ticket {
    id: number;
    title: string;
    status: string;
    group:string;
    createdAt: Date;
    description: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }