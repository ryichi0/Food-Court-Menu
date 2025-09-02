export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  description: string;
  menu: MenuItem[];
}