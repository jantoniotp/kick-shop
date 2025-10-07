import { jacketSizes, heelSizes } from "../data/sizes"
import { categories } from "../data/categories"
import { useCatalogStore } from "../store"
import { SelectFilter } from "./SelectFilter";

export const Filter = () => {

    const { sizeCurrent, categoryCurrent, setSize, setCategory } = useCatalogStore();
    const sizes = categoryCurrent == '2' ? jacketSizes : heelSizes;

    return (
        <form className="filter-container">
            <SelectFilter
            label="Categoria"
            options={categories}
            value={categoryCurrent}
            onChange={setCategory}
            />
            <SelectFilter
                label="Talla"
                options={sizes}
                value={sizeCurrent}
                onChange={setSize}
            />
        </form>
    )
}