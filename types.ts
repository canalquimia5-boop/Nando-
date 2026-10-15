
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  icon: string;
}
