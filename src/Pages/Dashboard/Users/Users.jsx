import { USERS, USER } from "../../../Api/Api";
import { Select, MenuItem } from "@mui/material";
import { DashTable } from "../../../Components/export";
import { useStateContext } from "../../../Contexts/ContextProvider";
import TransformDate from "../../../helpers/TransformDate";

export default function Users() {
  const { currentUser } = useStateContext();

  const RoleEditCell = (params) => {
    const handleChange = (event) => {
      const value = event.target.value;
      params.api.setEditCellValue({ id: params.id, field: "role", value });
    };

    return (
      <Select
        value={params.value}
        onChange={handleChange}
        sx={{ width: "100%" }}
      >
        <MenuItem value="1995">admin</MenuItem>
        <MenuItem value="2001">user</MenuItem>
        <MenuItem value="1996">writer</MenuItem>
        <MenuItem value="1999">Products Manager</MenuItem>
      </Select>
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
    },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      renderCell: (params) => {
        return params.id === currentUser.id
          ? `${params.value} (You)`
          : params.value;
      },
      minWidth: 90,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      editable: true,
      flex: 1,
      minWidth: 180,
    },
    {
      field: "role",
      headerName: "Role",
      editable: true,
      renderEditCell: RoleEditCell,
      renderCell: (params) => {
        return params.value === "1995"
          ? "admin"
          : params.value === "1996"
          ? "writer"
          : params.value === "1999"
          ? "product manager"
          : params.value === "2001"
          ? "user"
          : "";
      },
      maxWidth: 120,
      minWidth: 70,
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Created Date",
      resizable: false,
      minWidth: 130,
      renderCell: (params) => {
        const date = TransformDate(params.value);
        return `${date.getFullYear}/${date.getMonth}/${date.getDay}`;
      },
    },
    {
      field: "updated_at",
      headerName: "Updated Date",
      resizable: false,
      minWidth: 130,
      renderCell: (params) => {
        const date = TransformDate(params.value);
        return `${date.getFullYear}/${date.getMonth}/${date.getDay}`;
      },
    },
  ];

  return (
    <DashTable
      ITEM={USER}
      ITEMS={USERS}
      columns={columns}
      ADD="adduser"
      isEditable={true}
    />
  );
}
