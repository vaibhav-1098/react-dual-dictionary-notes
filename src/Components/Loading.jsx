import React from "react";

const Loading = () => {
    const containerStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1050,
    };

    const spinnerStyle = {
        width: "3rem",
        height: "3rem",
    };

    return (
        <div style={containerStyle}>
            <div className="spinner-border text-primary" role="status" style={spinnerStyle}>
                <span className="sr-only"></span>
            </div>
        </div>
    );
};

export default Loading;
