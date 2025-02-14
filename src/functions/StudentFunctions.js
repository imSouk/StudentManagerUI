export async function fetchStudent(setStudent, id) {
  try {
    const response = await fetch(
      `https://localhost:7216/Student/Details/${id}`,
      { method: "GET" }
    );
    const data = await response.json();
    console.log(data);
    const formattedDate = new Date(data.enrollmentDate).toLocaleDateString(
      "pt-BR"
    );
    setStudent({
      id: data.id,
      name: data.name,
      enrollmentDate: formattedDate,
    });
  } catch (error) {
    console.error(`ERROR:${error}`);
    setStudent(null);
  }
}
export async function createStudent(Student) {
  try {
    const myData = Student;
    const result = await fetch(`https://localhost:7216/Student/Create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    });
  } catch (error) {
    console.error(`ERROR:${error}`);
  }
}
export async function listStudents(setStudentResponse) {
  try {
    const response = await fetch(`https://localhost:7216/Student/`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    if (Array.isArray(data)) {
      setStudentResponse(
        data.map((student) => ({
          id: student.id,
          name: student.name,
          enrollmentDate: student.enrollmentDate,
        }))
      );
    } else {
      console.error("Formato de dados inesperado:", data);
    }
  } catch (error) {
    console.log("erro:", error);
  }
}
export async function delStudent(id) {
  try {
    const myData = parseInt(id);
    const response = await fetch(
      `https://localhost:7216/Student/Delete/${myData}`,
      { method: "POST" }
    );
  } catch (error) {
    console.error(`ERROR:${error}`);
  }
}
