import react from "react";


function Results ({results}) {
    console.log(results);

    return (
        <div className='results'>
            {results.map(result => (
            <div className="result">
                <img src ={result.Poster} />
                <h3>{result.Title}</h3>
            </div>
            ))}
        </div>
    )
}

export default Results;