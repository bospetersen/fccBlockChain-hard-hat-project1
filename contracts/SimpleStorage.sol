// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    // Get's initialized to 0
    uint256 public favouriteNumber;
    // People public person = People({favouriteNumber: 34, name: 'Michael'});

    mapping(string => uint256) public nameToFavouriteNumber;

    struct People {
        uint256 favouriteNumber;
        string name;
    }

    // Array of People with there favourite numbers
    People[] public people;

    function store(uint256 _favouriteNumber) public {
        favouriteNumber = _favouriteNumber;
    }

    // Function to add people to array of people and their favourite numbers People[] public people;
    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        // People memory newPerson = People({favouriteNumber: _favouriteNumber, name: _name});
        // People memory newPerson = People({favouriteNumber: _favouriteNumber, name: _name});
        // OR
        // People memory newPerson = People(_favouriteNumber, _name); // Same as above
        // people.push(newPerson);
        // OR
        people.push(People(_favouriteNumber, _name)); // Same as the last two lines above

        // Add person to mapping
        nameToFavouriteNumber[_name] = _favouriteNumber;
    }

    // view-functiions returns state
    // It can never alter state in any way.
    function retrieve() public view returns (uint256) {
        return favouriteNumber;
    }
}
