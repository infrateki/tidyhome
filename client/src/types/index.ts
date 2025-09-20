export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  services?: string[];
  note?: string;
  cta?: string;
}

export interface Language {
  code: 'en' | 'es';
  name: string;
}

export interface Translation {
  [key: string]: string | Translation;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
