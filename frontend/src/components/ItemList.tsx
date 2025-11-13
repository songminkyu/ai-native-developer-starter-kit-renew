'use client';

import { useEffect, useState } from 'react';
import type { Item, ItemRequest } from '@/types/item';
import { getAllItems, createItem, updateItem, deleteItem } from '@/lib/api/items';

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [formData, setFormData] = useState<ItemRequest>({ name: '', description: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getAllItems();
      setItems(data);
      setError(null);
    } catch (err) {
      setError('Failed to load items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await updateItem(editingItem.id, formData);
      } else {
        await createItem(formData);
      }
      setFormData({ name: '', description: '' });
      setIsFormOpen(false);
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      setError('Failed to save item');
      console.error(err);
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setFormData({ name: item.name, description: item.description || '' });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      await deleteItem(id);
      fetchItems();
    } catch (err) {
      setError('Failed to delete item');
      console.error(err);
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', description: '' });
    setIsFormOpen(false);
    setEditingItem(null);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Items</h3>
          {!isFormOpen && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
            >
              + Add Item
            </button>
          )}
        </div>

        {isFormOpen && (
          <form
            onSubmit={handleSubmit}
            className="mb-6 p-6 border-2 border-purple-100 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50"
          >
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              {editingItem ? '✏️ Edit Item' : '✨ New Item'}
            </h2>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2 text-gray-700">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                placeholder="Enter item name..."
                required
                maxLength={100}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white resize-none"
                placeholder="Add a description..."
                rows={3}
                maxLength={500}
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-semibold"
              >
                {editingItem ? 'Update Item' : 'Create Item'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-all duration-200 font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {!isFormOpen && (
          <div className="space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-gray-500 text-lg mb-2">No items yet</p>
                <p className="text-gray-400 text-sm">
                  Click &quot;Add Item&quot; to create your first item!
                </p>
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  className="border-2 border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-200 bg-white"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 truncate">{item.name}</h3>
                      {item.description && (
                        <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                      )}
                      <p className="text-xs text-gray-400 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                        title="Edit item"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                        title="Delete item"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
