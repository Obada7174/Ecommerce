import { CAT, Cat } from "../../../Api/Api";
import { DashTable } from "../../../Components/export";
import TransformDate from "../../../helpers/TransformDate";

export default function CategoriesManage() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      resizable: false,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
      editable: true,
      resizable: false,
      minWidth: 150,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 2,
      editable: true,
      resizable: false,
      renderCell: (params) => {
        return <img src={params.row.image} alt="img" />;
      },
      minWidth: 150,
    },
    {
      field: "created_at",
      headerName: "Created Date",
      resizable: false,
      minWidth: 130,
      flex: 1,
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
      flex: 1,
      renderCell: (params) => {
        const date = TransformDate(params.value);
        return `${date.getFullYear}/${date.getMonth}/${date.getDay}`;
      },
    },
  ];

  return (
    <DashTable
      ITEM={Cat}
      ITEMS={CAT}
      columns={columns}
      ADD="addcategory"
      isEditable={true}
    />
  );
}
