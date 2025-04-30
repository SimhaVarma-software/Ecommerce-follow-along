const express = require("express");
const router = express.Router();
const addressModel = require("../models/addressSchema");

// Get all addresses
router.get("/", async (req, res) => {
    try {
        const addresses = await addressModel.find();
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific address by ID
router.get("/:id", async (req, res) => {
    try {
        const address = await addressModel.findById(req.params.id);
        if (!address) {
            return res.status(404).json({ message: "Address not found" });
        }
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new address
router.post("/", async (req, res) => {
    const address = new addressModel(req.body);
    try {
        const newAddress = await address.save();
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an address by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedAddress = await addressModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }
        res.status(200).json(updatedAddress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an address by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedAddress = await addressModel.findByIdAndDelete(req.params.id);
        if (!deletedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }
        res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;