import "./Student.css";

const Student = (props) => {
  const { student, order, deleteStudent, selectEditingStudent } = props;
  const { studentName, classCode, math, phy, chem, id } = student || {};
  const gpa = ((+math + +phy + +chem) / 3).toFixed(1);
  return (
    <tr>
      <th scope="row">{order + 1}</th>
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{gpa}</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-danger" onClick={() => deleteStudent(id)}>
            Xoá
          </button>
          <button
            className="btn btn-success"
            onClick={() => selectEditingStudent(id)}
          >
            Cập nhật
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Student;
