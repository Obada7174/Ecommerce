import { PRODUCTS, PRODUCT } from "../../../Api/Api";
import { DashTable } from "../../../Components/export";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../../../Contexts/DashboardContext";
import TransformDate from "../../../helpers/TransformDate";

export default function Products() {
  const nav = useNavigate();
  const { currentColor } = useDashboardContext();

  const columns = [
    {
      field: "edit",
      headerName: "Edit",
      width: 60,
      resizable: false,
      renderCell: (params) => (
        <FaEdit
          className="text-lg hover:opacity-90 cursor-pointer"
          style={{ color: currentColor }}
          onClick={() => nav(`/dashboard/product/${params.row.id}`)}
        />
      ),
    },
    { field: "title", headerName: "Title", resizable: false, minWidth: 140 },
    {
      field: "images",
      headerName: "Images",
      resizable: false,
      flex: 1,
      minWidth: 140,

      renderCell: (params) => {
        if (params.row.images && params.row.images.length > 0) {
          return (
            <img
              src={params.row.images[0].image}
              alt="product img"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          );
        } else {
          return null;
        }
      },
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      resizable: false,
      renderCell: (params) => (
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
          {params.value}
        </div>
      ),
      minWidth: 160,
    },
    { field: "price", headerName: "Price", resizable: false },
    { field: "discount", headerName: "Discount", resizable: false },
    { field: "About", headerName: "About", resizable: false, minWidth: 140 },
    {
      field: "rating",
      headerName: "Rating",
      resizable: false,
      maxWidth: 70,
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
      ITEM={PRODUCT}
      ITEMS={PRODUCTS}
      columns={columns}
      ADD="addproduct"
      isEditable={false}
    />
  );
}
