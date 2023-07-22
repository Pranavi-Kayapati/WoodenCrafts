import React, { Dispatch } from "react";
import { User } from "../../../constrainsts/Type";
import "../../AdminPage.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/adminReducer/action";
interface Props {
  item: User;
  setUser: (user: User) => void;
}

const UserCard = ({ item, setUser }: Props) => {
  const { id, username, email, password } = item;

  const dispatch: Dispatch<any> = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = () => {
    setUser(item);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{password}</td>
      <td className="action">
        <button className="sub-head" onClick={handleEdit}>
          <BiEdit />
          <span className="padd-15">Edit</span>
        </button>
        <button
          className="sub-head"
          onClick={() => id !== undefined && handleDelete(id)}
        >
          <RiDeleteBinLine />
          <span className="padd-15">Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default UserCard;
