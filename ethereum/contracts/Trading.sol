pragma solidity ^0.4.17;

contract Trading {
  address seller;
  string name;
  uint price;

  function sellItem(string _name, uint _price) public {
    seller = msg.sender;
    name = _name;
    price = _price;
  }

  function getItem() public view
    returns (address _seller, string _name, uint _price)
  {
    return (seller, name, price);
  }
}
