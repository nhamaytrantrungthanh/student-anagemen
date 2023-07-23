import Student from "../Student/Student";

const StudentTable = (props) => {
  const { studentList, deleteStudent, selectEditingStudent } = props;

  const tableBody = studentList.map((student, index) => {
    return (
      <Student
        student={student}
        order={index}
        deleteStudent={deleteStudent}
        selectEditingStudent={selectEditingStudent}
      />
    );
  });

  return (
    <div className="student-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Điểm toán</th>
            <th scope="col">Điểm lý</th>
            <th scope="col">Điểm hoá</th>
            <th scope="col">GPA</th>
            <th scope="col">...</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;
