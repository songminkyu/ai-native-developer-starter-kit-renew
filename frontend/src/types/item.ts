export interface Item {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ItemRequest {
  name: string;
  description?: string;
}
