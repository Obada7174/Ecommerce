import { Pagination, PaginationItem } from "@mui/material";
import { Filter, ProductCard } from "../../Components/export";
import { useEffect, useRef, useState } from "react";
import { Axios } from "../../Api/Axios";
import { CAT, PRODUCTS } from "../../Api/Api";

export default function AllProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const productsCount = useRef(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Axios.get(`/${CAT}`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 12,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get(
          `/${PRODUCTS}?page=${paginationModel.page}&limit=${paginationModel.pageSize}`,
        );
        productsCount.current = response.data.total;
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [paginationModel]);

  const totalPages = Math.ceil(
    productsCount.current / paginationModel.pageSize,
  );

  const handlePageChange = async (event, newPage) => {
    setPaginationModel({
      page: newPage,
      pageSize: 12,
    });
  };

  const handleFirstPageButtonClick = () => {
    setPaginationModel((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  const handleLastPageButtonClick = () => {
    setPaginationModel((prev) => ({
      ...prev,
      page: totalPages - 1,
    }));
  };

  return (
    <div className="container mx-auto py-6">
      <div className="text-center flex flex-col items-center gap-4 py-6">
        <h1 className="font-bold text-[2.2rem] text-primary">
          Experience the Future of Technology with Our Topico.
        </h1>
        <p className="text-parg max-w-[48rem]">
          Find everything you need to transform your home into a smart,
          connected space. Our Topico store offers a wide range of devices to
          fit your needs.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6">
        <div className="bg-white p-4 col-span-1 h-[398px] shadow-lg">
          <h1 className="font-bold text-xl">Filter</h1>
          <div>
            <h1 className="my-4 pb-3 border-b border-border">Categories</h1>
            <div>
              <Filter items={categories} />
            </div>
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-center gap-6">
          <div className="grid grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="max-w-[19rem]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <Pagination
            count={totalPages}
            page={paginationModel.page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                style={{
                  ...(item.selected && {
                    color: "#fcb700",
                    borderColor: "#fcb700",
                    backgroundColor: "#fcb70015",
                  }),
                }}
                sx={{
                  "&:hover": {
                    color: "#fcb700",
                    borderColor: "#fcb700",
                    backgroundColor: "#fcb70015",
                  },
                  "&:active": {
                    color: "#fcb700",
                    borderColor: "#fcb700",
                    backgroundColor: "#fcb70015",
                  },
                }}
              />
            )}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
}
