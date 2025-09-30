import { supabase } from './supabaseClient';
import type { Product } from '../types'

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data || [];
}
