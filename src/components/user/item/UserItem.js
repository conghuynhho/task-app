const getGender = (gender) => {
  return gender ? "Male" : "Female";
};

const UserItem = (props) => {
  const handleOnDelete = (e) => {
    const id = e.target.closest("tr").firstChild.innerText;
    props.remove(id);
  };

  const handleOnEdit = () => {
    const data = { ...props };
    props.edit(data);
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.birthday}</td>
      <td>{getGender(props.gender)}</td>
      <td>{props.address}</td>
      <td>
        <div className="button-group">
          <button onClick={handleOnEdit}>Edit</button>
          <button onClick={handleOnDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
