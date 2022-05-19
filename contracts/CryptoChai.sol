// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract CryptoChai {
    // Event to emit a Memo
    event NewMemo(
        address indexed from,
        string fromName,
        address indexed to,
        string toName,
        string message,
        uint256 timestamp
    );

    // Memo structure
    struct Memo {
        address from;
        string fromName;
        address to;
        string toName;
        string message;
        uint256 timestamp;
    }

    // Address of conract deployer
    address payable public contractDeployer;

    // Address of contract owner
    address payable public owner;

    // Name of contract owner
    string public ownerName;

    // List of memos
    Memo[] public Memos;

    // Chai tracker
    uint256 public chais;

    // Constructor to assign owner
    constructor() {
        owner = payable(msg.sender);
        contractDeployer = payable(msg.sender);
        ownerName = "yupuday";
        chais = 0;
    }

    /**
     * @dev Returns all the memos
     */
    function getMemos() public view returns (Memo[] memory) {
        return Memos;
    }

    /**
     * @dev Buy a Chai
     * @param _name Name of the buyer
     * @param _message Message from the buyer
     */
    function buyChai(string memory _name, string memory _message)
        public
        payable
    {
        // Minimum value sent should be greater than 0
        require(msg.value > 0, "Insufficient Amount!");

        // Adding memo to Memos
        Memos.push(
            Memo(msg.sender, _name, owner, ownerName, _message, block.timestamp)
        );

        // Emitting the event
        emit NewMemo(
            msg.sender,
            _name,
            owner,
            ownerName,
            _message,
            block.timestamp
        );

        // Sending Chai to owner
        owner.transfer(address(this).balance);

        // Increasing count of served chais
        chais++;

        // Changing owner address
        owner = payable(msg.sender);

        // Changing owner name
        ownerName = _name;
    }
}
