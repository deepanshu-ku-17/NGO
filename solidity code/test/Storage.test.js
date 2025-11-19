const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Storage Contract", function () 
{
    let Storage;
    let storage;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () 
    {
        // Get contract factory and signers
        Storage = await ethers.getContractFactory("Storage");
        [owner, addr1, addr2] = await ethers.getSigners();
        
        // Deploy contract
        storage = await Storage.deploy();
    });
    
    describe("NGO Registration", function () 
    {
        it("Should register a new NGO", async function () 
        {
            // Register an NGO
            await storage.connect(addr1).registerNGO("Test NGO");
            
            // Get NGO details
            const ngo = await storage.ngos(addr1.address);
            
            // Verify registration
            expect(ngo.name).to.equal("Test NGO");
            expect(ngo.isVerified).to.equal(true);
        });
    });
});
