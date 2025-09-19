import { sizes } from "../data/sizes"
import { useCatalogStore } from "../store"
import type { SizeFilter } from "../types";

export const Filter = () => {

    const setSize = useCatalogStore((state) => state.setSize);

    return (
        <div className="filter-content">
            <form>
                <div>
                    <label htmlFor="size">Filtrar por Talla</label>
                    <select onChange={(e) => setSize(e.target.value as SizeFilter)}>
                        <option value="">-- Todas las Tallas</option>
                        {sizes.map(size => (
                            <option 
                                value={size.id}
                                key={size.id}
                            >
                                {size.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}