import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("firstName", {
    header: "First Name",
    id: "firstName",
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    id: "lastName",
  }),
  columnHelper.accessor("startDate", {
    header: "Start Date",
    id: "startDate",
  }),
  columnHelper.accessor("department", {
    header: "Department",
    id: "department",
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Date of Birth",
    id: "dateOfBirth",
  }),
  columnHelper.accessor("street", {
    header: "Street",
    id: "street",
  }),
  columnHelper.accessor("city", {
    header: "City",
    id: "city",
  }),
  columnHelper.accessor("state", {
    header: "State",
    id: "state",
  }),
  columnHelper.accessor("zipCode", {
    header: "Zip Code",
    id: "zipCode",
  }),
];

export default columns;
