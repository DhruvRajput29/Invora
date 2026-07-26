import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Upload,
    Image as ImageIcon,
    Package,
    Save,
    X,
} from "lucide-react";
import {
    basicFields,
    pricingFields,
    inventoryFields,
} from "../../../Data/ProductFormData";
const Addproduct = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: "",
        sku: "",
        category: "",
        unit: "Piece",
        purchasePrice: "",
        sellingPrice: "",
        tax: "",
        discount: "",
        stock: "",
        status: "In Stock",
        description: "",
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const Cancel = () =>{
        navigate("/Productpage");
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        navigate("/Productpage");

        alert("Product Added Successfully!");
    };

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* Header */}

            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                    Add Product
                </h1>

                <p className="text-gray-500 mt-2">
                    Add a new product into your inventory.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-md shadow-md p-4"
            >

                {/* BASIC INFORMATION */}

                <div className="border-b pb-8">

                    <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
                        <Package size={22} />
                        Basic Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {basicFields.map((field) => (
                            <div key={field.name}>

                                <label className="font-medium">
                                    {field.label}
                                </label>

                                {field.type === "input" ? (
                                    <input
                                        type={field.inputType}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    />
                                ) : (
                                    <select
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    >
                                        <option value="">
                                            Select {field.label}
                                        </option>

                                        {field.options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}

                            </div>
                        ))}

                    </div>

                </div>

                {/* Pricing */}

                <div className="py-8 border-b">
                    <h2 className="text-xl font-bold mb-6">
                        Pricing
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {pricingFields.map((field) => (
                            <div key={field.name}>
                                <label className="font-medium">
                                    {field.label}
                                </label>

                                {field.type === "select" ? (
                                    <select
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    >
                                        <option value="">
                                            Select {field.label}
                                        </option>

                                        {field.options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        min="0"
                                        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inventory */}

                <div className="py-8 border-b">

                    <h2 className="text-xl font-bold mb-6">
                        Inventory
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {inventoryFields.map((field) => (
                            <div key={field.name}>

                                <label className="font-medium">
                                    {field.label}
                                </label>

                                {field.type === "input" ? (
                                    <input
                                        type={field.inputType}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-300"
                                        min="0"
                                        required
                                    />
                                ) : (
                                    <select
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-blue-300"
                                        required
                                    >
                                        {field.options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}

                            </div>
                        ))}

                    </div>

                </div>

                {/* Description */}

                <div className="py-8 ">

                    <h2 className="text-xl font-bold mb-5">
                        Description
                    </h2>

                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product Description..."
                        className="w-full border rounded-lg p-4"
                    ></textarea>

                </div>

                {/* Buttons */}

                <div className="flex justify-end gap-4 ">

                    <button
                        type="button"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg border hover:bg-gray-100"
                        onClick={Cancel}
                    >
                        <X size={18} />
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                        <Save size={18} />
                        Add Product
                    </button>

                </div>

            </form>
        </div>
    );
};

export default Addproduct;