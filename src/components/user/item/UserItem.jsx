// const getGender = (gender) => {
//   return gender ? "Male" : "Female";
// };


const generateGender = (gender) => {
  var result = "";
  switch (gender) {
    case 0:
      result += "Male";
      break;
    case 1:
      result += "Female";
      break;
    case 2:
      result += "Không xác định";
      break;
    default:
      break;
  }
  return result;
};

const UserItem = (props) => {

  console.log("render useritem");
  
  const handleOnClickDelete = () => {
    // const id = e.target.closest("tr").firstChild.innerText;
    props.remove(props.id);
  };

  const handleOnClickEdit = () => {
    props.showEditModal(props);
  };


  const formatDateToDisplay = (ymd) => {
    let date = new Date(ymd);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = (date.getFullYear()).toString();
    let formattedDate = day + '/' + month + '/' + year;
    return formattedDate;
  }
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{formatDateToDisplay(props.birthday)}</td>
      <td>{generateGender(props.gender)}</td>
      <td>{props.address}</td>
      <td>
        <div className="button-group">
          <button onClick={handleOnClickEdit}>Edit</button>
          <button onClick={handleOnClickDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
