import React, { useState } from "react";
import { registerDonor, donateToNGO } from "../../contract"; // Import contract functions

const Transaction = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        ngoAddress: "",
        donationAmount: "",
        transactionId: "",
        tokenNo: "",
    });

    const [loading, setLoading] = useState({ register: false, donate: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDonorRegistration = async () => {
        setLoading((prev) => ({ ...prev, register: true }));
        try {
            await registerDonor();
            alert("✅ Donor Registered Successfully!");
        } catch (error) {
            console.error("Donor registration error:", error);
            alert("❌ Error registering donor: " + error.message);
        } finally {
            setLoading((prev) => ({ ...prev, register: false }));
        }
    };

    const handleDonation = async () => {
        const { name, address, ngoAddress, donationAmount, transactionId, tokenNo } = formData;

        if (!name || !address || !ngoAddress || !donationAmount || !transactionId || !tokenNo) {
            alert("⚠️ Please fill all the fields.");
            return;
        }

        if (isNaN(donationAmount) || Number(donationAmount) <= 0) {
            alert("⚠️ Donation amount must be a positive number.");
            return;
        }

        setLoading((prev) => ({ ...prev, donate: true }));
        try {
            await donateToNGO(ngoAddress, donationAmount);
            alert("🎉 Donation Successful!");

            // Optionally reset form
            setFormData({
                name: "",
                address: "",
                ngoAddress: "",
                donationAmount: "",
                transactionId: "",
                tokenNo: "",
            });
        } catch (error) {
            console.error("Donation error:", error);
            alert("❌ Error during donation: " + error.message);
        } finally {
            setLoading((prev) => ({ ...prev, donate: false }));
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Donate to NGO</h1>
            <p style={styles.description}>
                We are using a Gnosis Multi-Signature Wallet for secure and transparent transactions.
            </p>

            <button onClick={handleDonorRegistration} style={styles.registerButton} disabled={loading.register}>
                {loading.register ? "Registering..." : "Register as Donor"}
            </button>

            {Object.entries(formData).map(([field, value]) => (
                <div key={field} style={styles.inputGroup}>
                    <label style={styles.label}>
                        {field.replace(/([A-Z])/g, " $1").replace(/^\w/, (c) => c.toUpperCase())}
                    </label>
                    <input
                        type={field === "donationAmount" ? "number" : "text"}
                        name={field}
                        placeholder={`Enter ${field}`}
                        value={value}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
            ))}

            <button onClick={handleDonation} style={styles.donateButton} disabled={loading.donate}>
                {loading.donate ? "Processing Donation..." : "Donate"}
            </button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        background: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    heading: { color: "#007bff" },
    description: { fontSize: "14px", color: "#555", marginBottom: "20px" },
    registerButton: {
        backgroundColor: "#28a745",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        marginBottom: "15px",
        fontWeight: "bold",
    },
    inputGroup: {
        textAlign: "left",
        marginBottom: "10px",
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
        fontSize: "14px",
        color: "#333",
    },
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "14px",
    },
    donateButton: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        marginTop: "15px",
        fontWeight: "bold",
    },
};

export default Transaction;
