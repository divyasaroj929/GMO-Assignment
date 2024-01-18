import { useState } from "react";
import "./index.css";
interface SubDepartment {
  id: number;
  name: string;
}

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

const departmentData: Department[] = [
  {
    id: 1,
    name: "Department A",
    subDepartments: [
      { id: 11, name: "Sub Department A1" },
      { id: 12, name: "Sub Department A2" },
    ],
  },
  {
    id: 2,
    name: "Department B",
    subDepartments: [
      { id: 21, name: "Sub Department B1" },
      { id: 22, name: "Sub Department B2" },
    ],
  },
];

const Department = () => {
  const [expandedDepartments, setExpandedDepartments] = useState<number[]>([]);

  const toggleDepartment = (departmentId: number) => {
    setExpandedDepartments((prevExpanded: any) =>
      prevExpanded.includes(departmentId)
        ? prevExpanded.filter((id: any) => id !== departmentId)
        : [...prevExpanded, departmentId]
    );
  };
  const renderSubDepartments = (subDepartments: SubDepartment[]) => {
    return subDepartments.map((subDept) => (
      <li key={subDept.id}>{subDept.name}</li>
    ));
  };
  const renderDepartments = () => {
    return departmentData.map((department) => (
      <li key={department.id}>
        <div>
          <span>{department.name}</span>
          <button
            className="button"
            onClick={() => toggleDepartment(department.id)}
          >
            {expandedDepartments.includes(department.id)
              ? "Collapse"
              : "Expand"}
          </button>
        </div>
        {expandedDepartments.includes(department.id) && (
          <ul>
            <li>{renderSubDepartments(department.subDepartments)}</li>
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="department-container">
      <h2>Department List</h2>
      <ul>{renderDepartments()}</ul>
    </div>
  );
};

export default Department;
