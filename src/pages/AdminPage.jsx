import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
    const [ideas, setIdeas] = useState([]);
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);

    const url = "https://68219a21259dad2655afc28a.mockapi.io/ideas";

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url).then((res) => {
            setIdeas(res.data)
            setFiltered(res.data)
        })
    }

    const addIdea = () => {
        if (!title.trim()) {
            alert("Please enter a project idea")
            return
        }

        axios.post(url, { title }).then((res) => {
            const updated = [...ideas, res.data]
            setIdeas(updated)
            setFiltered(updated)
            setTitle("")
        })
    }

    const deleteIdea = (id) => {
        if (confirm("Are you sure you want to delete this idea?")) {
            axios.delete(`${url}/${id}`).then(() => {
                const updated = ideas.filter((idea) => idea.id !== id)
                setIdeas(updated)
                setFiltered(updated)
            });
        }
    };

    const searchIdeas = () => {
        const result = ideas.filter((idea) =>
            idea.title.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(result)
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8 flex items-center justify-center gap-2">
                Add Project Ideas to users</h2>

            <div className="flex justify-center mb-10 gap-4">
                <input type="text" placeholder="Enter project idea" value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 w-2/3 border rounded" />

                <button onClick={addIdea}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Add Idea </button>
            </div>

            <div className="flex justify-center items-center mb-6">
                <input type="text" placeholder="Search ideas" value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 w-2/6 border rounded m-2" />

                <button
                    onClick={searchIdeas}
                    className="bg-indigo-600 text-white px-4 p-2 m-2 rounded hover:bg-indigo-700" >
                    Search</button>
            </div>

            {filtered.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">No project ideas found.</p>
            ) : (
                <div className="flex flex-col items-center justify-center gap-6">
                    {filtered.map((idea) => (
                        <div key={idea.id}
                            className="bg-white rounded shadow p-4 w-[90%] flex justify-between items-center" >
                            <p className="text-lg py-1">{idea.title}</p>

                            <button onClick={() => deleteIdea(idea.id)}
                                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" >
                                Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
