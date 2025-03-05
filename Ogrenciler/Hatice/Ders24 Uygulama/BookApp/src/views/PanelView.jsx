import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import AddBook from "../components/AddBook";

const PanelView = () => {
    const [showAddBook, setShowAddBook] = useState(false);

    return (
        <div className="d-flex">
            <Sidebar setShowAddBook={setShowAddBook} />
            <div className="flex-grow-1 p-3">
                {showAddBook && <AddBook />}
            </div>
        </div>
    );
};

export default PanelView;
