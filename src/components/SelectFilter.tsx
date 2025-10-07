import type { ChangeEvent } from 'react';

interface SelectFilterProps<T> {
  label: string;
  options: { id: T; name: string }[];
  value: T | '';
  onChange: (value: T | '') => void;
}

export function SelectFilter<T extends string | number>({
  label,
  options,
  value,
  onChange,
}: SelectFilterProps<T>) {
  
  return (
    <div className="filter-group">
      <label>{label}</label>
      <select value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value as T)}>
        {label != 'Categoria' && (<option value="">-- Todas --</option>)}
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
