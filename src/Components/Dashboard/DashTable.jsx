import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Axios } from "../../Api/Axios";
import { DashButton, Input, DashContainer, DashHeader } from "../export";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../../Contexts/DashboardContext";

export default function DashTable({ ITEMS, ITEM, columns, ADD, isEditable }) {
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchDataCount, setSearchDataCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const { currentColor } = useDashboardContext();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `/${ITEMS}?page=${paginationModel.page}&limit=${paginationModel.pageSize}`,
        );
        setItemsCount(response.data.total);
        setItems(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [paginationModel]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getSearchData();
    }, 400);

    return () => clearTimeout(timeOut);
  }, [search]);

  const handleDelete = async () => {
    if (selectedItems.length === 0) {
      return;
    }

    try {
      await Promise.all(
        selectedItems.map((id) => Axios.delete(`/${ITEM}/${id}`)),
      );
      setItems(items.filter((product) => !selectedItems.includes(product.id)));
      setSelectedItems([]);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const getRowHeight = () => "auto";
  async function getSearchData() {
    try {
      const res = await Axios.post(`${ITEM}/search?title=${search}`);
      setSearchData(res.data);
      setSearchDataCount(res.data.length);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRowUpdate = async (updatedRow) => {
    const { id } = updatedRow;

    try {
      await Axios.post(`/${ITEM}/edit/${id}`, updatedRow);
      return updatedRow;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };

  return (
    <DashContainer>
      <DashHeader category="Page" title={ITEMS} />
      <Box
        sx={{
          width: "100%",
          marginBottom: "30px",
          height: "90vh",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            gap: "20px",
          }}
        >
          <Input
            className={`max-w-md dark:border-b-[var(--current-color)] border-b-[var(--currentColor)] h-full`}
            placeholder="Search for Product"
            value={search}
            currentColor={currentColor}
            handleChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="gap-4 flex">
            <DashButton
              className="max-w-44  "
              text="Add"
              size={"md"}
              borderRadius={"5px"}
              onClick={() => {
                nav(`/dashboard/${ADD}`);
              }}
            />
            <DashButton
              className="max-w-44 "
              text="Delete"
              size={"md"}
              borderRadius={"5px"}
              onClick={handleDelete}
            />
          </div>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            overflowX: "auto",
            overflowY: "hidden",
            maxWidth: "100%",
          }}
        >
          <DataGrid
            rows={search.length === 0 ? items : searchData}
            columns={columns}
            pagination
            paginationMode="server"
            rowCount={search.length === 0 ? itemsCount : searchDataCount}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10, 20, 50, 100]}
            checkboxSelection
            disableSelectionOnClick
            sortingOrder={["asc", "desc"]}
            getRowHeight={getRowHeight}
            editMode={isEditable && "row"}
            experimentalFeatures={isEditable && { newEditingApi: true }}
            processRowUpdate={(newRow) => isEditable && handleRowUpdate(newRow)}
            sx={{
              maxWidth: "100%",
              height: "100%",
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "gray",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              },
              "& .MuiDataGrid-cell": {
                paddingBlock: "6px",
                display: "flex",
                alignItems: "center",
                color: "white",
                whiteSpace: "normal",
                wordWrap: "break-word",
              },
              "& .MuiTablePagination-root": {
                color: "white",
              },
              "& .MuiTablePagination-actions button": {
                color: currentColor,
              },
            }}
            onRowSelectionModelChange={(newSelection) => {
              setSelectedItems(newSelection);
            }}
            loading={loading}
          />
        </Box>
      </Box>
    </DashContainer>
  );
}
