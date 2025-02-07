import { useLocation } from "react-router-dom";


function UserDetails() {
    const location = useLocation();

    const { state } = location || {};


    if (!state) {
        return (
            <div className="flex justify-center items-center h-40 text-gray-500">
                No user details available
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center  p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full">
                <div className="flex flex-col items-center">
                    <img
                        src={state?.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-blue-500"
                    />
                    <h2 className="text-xl font-semibold mt-4 text-gray-900">{state?.name}</h2>
                    <p className="text-gray-600 flex items-center mb-2">@ {state?.username}</p>
                    <p className="text-gray-600 flex items-center">Website:  <a className="text-orange-500 bg-orange-50 rounded-xl px-2" target="_blank" href={`https://${state.website}`}>{state.website}</a></p>
                    <div className="mt-4 flex gap-2 flex-col items-center">
                        <span className="bg-blue-50 text-blue-500 px-4 py-1 rounded-full text-sm">
                            {state?.email || "User"}
                        </span>
                        <span className="bg-blue-50 text-blue-500 px-4 py-1 rounded-full text-sm">
                            {state?.phone || "phone"}
                        </span>
                    </div>
                    <div>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                            <p className="text-gray-600">{state.address.street}, {state.address.suite}</p>
                            <p className="text-gray-600">{state.address.city}, {state.address.zipcode}</p>
                        </div>

                        {/* Company Details */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-700">Company</h3>
                            <p className="text-gray-900 font-medium">{state.company.name}</p>
                            <p className="text-gray-600 italic">{state.company.catchPhrase}</p>
                            <p className="text-gray-500 text-sm">{state.company.bs}</p>
                        </div>
                    </div>
                    {state.address.geo && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-700">Location</h3>
                            <iframe
                                className="w-full h-48 rounded-lg shadow-md"
                                src={`https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${state.address.geo.lat},${state.address.geo.lng}`}
                                title="User Location"
                            ></iframe>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default UserDetails;
