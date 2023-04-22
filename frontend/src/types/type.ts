export interface LeatherInfo {
  id: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
}

export interface CartInfo extends LeatherInfo {
  id: string;
  qty: number;
}
