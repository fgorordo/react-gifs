import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const handleAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        return setCategories((categories) => [newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                setCategories={setCategories}
                onNewCategory={(event) => handleAddCategory(event)}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
export default GifExpertApp;
