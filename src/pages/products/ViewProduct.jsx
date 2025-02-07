import { useLocation } from "react-router-dom";

const ViewProduct = () => {
    const location = useLocation();

    const { state } = location || {};


    if (!state) {
        return (
            <div className="flex justify-center items-center h-40 text-gray-500">
                No product details available
            </div>
        );
    }

    return (
        <div className="bg-white grid grid-cols-2 gap-4">

            <div>
                <img src="https://www.shutterstock.com/image-photo/cellphone-phone4-smart-phone-advertisement-600nw-2255695631.jpg" alt="" />
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold"> Name : <span>{state.name}</span></p>
                <p className="text-xl font-semibold"> Capacity : <span>{state.data.capacity || state.data.Capacity}</span></p>
                <p className="text-xl font-semibold"> Color : <span>{state.data.color }</span></p>
                <p className="text-xl font-semibold"> Generation : <span>{state.data.generation || "None"}</span></p>
                <p className="text-xl font-semibold"> Price : $<span>{state.data.price || "N/A"}</span></p>
            </div>

        </div>
    )
}

export default ViewProduct
