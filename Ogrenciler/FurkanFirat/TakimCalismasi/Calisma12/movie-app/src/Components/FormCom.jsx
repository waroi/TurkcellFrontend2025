export default function FormCom({ setQuery, handleSubmit }) {
    return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="movieSearchInput" className="form-label">
                        Film ara 🔎
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="movieSearchInput"
                        aria-label="Search"

                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
    );
}

