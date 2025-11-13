import type { Item, ItemRequest } from '@/types/item';

// Use relative path for production (ALB proxy) or env variable for custom setup
// In production, ALB routes /api/* to backend service
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api/v1';

export async function getAllItems(): Promise<Item[]> {
  const response = await fetch(`${API_BASE_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
}

export async function getItem(id: number): Promise<Item> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch item');
  }
  return response.json();
}

export async function createItem(data: ItemRequest): Promise<Item> {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create item');
  }
  return response.json();
}

export async function updateItem(id: number, data: ItemRequest): Promise<Item> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update item');
  }
  return response.json();
}

export async function deleteItem(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
}
