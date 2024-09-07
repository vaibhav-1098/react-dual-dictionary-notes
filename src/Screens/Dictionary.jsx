import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const Dictionary = () => {
    const [word, setWord] = useState("hello");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        setWord("");
        e.preventDefault();
        fetchData();
    };

    const fetchData = async () => {
        setError("");
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            console.log(response.data[0]);
            setData(response.data);
        } catch (error) {
            setError(`${word} not found!`);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        maxLength="45"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>

            {loading && <Loading />}

            {error && <div className="alert alert-danger">{error}</div>}

            {data && (
                <section className="mt-4">
                    <h2>{data[0].word}</h2>
                    <p><em>{data[0].phonetic}</em></p>
                    {data[0].meanings[0].definitions.map((item, index) => (
                        <ul key={index} className="mb-2">
                            <li>{item.definition}</li>
                        </ul>
                    ))}
                </section>
            )}
        </div>
    );
};

export default Dictionary;
