import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
    const [ideas, setIdeas] = useState([]);
    const url = "https://68219a21259dad2655afc28a.mockapi.io/ideas";

    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!user || user.role !== "user") {
    //     return <p className="text-center mt-10 text-red-500">Unauthorized access</p>
    // }

    useEffect(() => {
        axios.get(url).then((res) => {
            setIdeas(res.data)
        })
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8 flex items-center justify-center gap-2">
               Explore Project Ideas </h2>

            {ideas.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">No project ideas found.</p>
            ) : (
                <div className="flex flex-col items-center justify-center gap-6">
                    {ideas.map((idea) => (
                        <div key={idea.id}
                            className="bg-white rounded shadow p-4 w-[90%]" >
                            <p className="text-lg py-1">{idea.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
