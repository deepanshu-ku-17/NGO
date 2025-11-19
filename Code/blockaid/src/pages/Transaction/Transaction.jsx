// src/pages/Transaction/Transaction.jsx
import React from "react";
import "./Transaction.css";

const Transaction = () => {
    const cryptoData = [
        { name: "BTC", address: "XXXXXXXXXXXXXXXXX#X##x" },
        { name: "DOGECOIN", address: "XXXXXXXXXXXXXXXXX#X##x" },
        { name: "ETH", address: "XXXXXXXXXXXXXXXXX#X##x" },
        { name: "LITECOIN", address: "XXXXXXXXXXXXXXXXX#X##x" },
    ];

    return (
        <div className="transaction-container">
            <div className="transaction-header-box">
                <h1 className="transaction-title">DONATE</h1>
                    <p className="transaction-description">
                        We are using a Gnosis Multi-Signature Wallet to handle the donations,
                        in a transparent way.
                    </p>
            </div>
            <div className="transaction-box">
                <table className="crypto-table">
                    <tbody>
                        {cryptoData.map((crypto, index) => (
                        <tr key={index} className="crypto-row">
                            <td className="crypto-name">{crypto.name}</td>
                            <td className="crypto-address">{crypto.address}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transaction;

