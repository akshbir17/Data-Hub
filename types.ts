
export interface User {
  usn: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Resource {
  title: string;
  type: 'PDF' | 'LINK' | 'NOTE';
  url: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  topics: string[];
  color: string;
  resources?: Resource[];
}

export enum AppView {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  SUBJECT_DETAIL = 'SUBJECT_DETAIL',
  AKSHBIR_SECTION = 'AKSHBIR_SECTION',
  DEPLOYMENT_GUIDE = 'DEPLOYMENT_GUIDE'
}
