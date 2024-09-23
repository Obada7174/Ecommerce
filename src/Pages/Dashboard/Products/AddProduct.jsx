import {
  DashHeader,
  Input,
  DashButton,
  ImageUploader,
  ImagePreview,
  DashContainer,
} from "../../../Components/export";
import { useStateContext } from "../../../Contexts/ContextProvider";
import { useDashboardContext } from "../../../Contexts/DashboardContext";
import { ADD, PRODUCT } from "../../../Api/Api";
import { Axios } from "../../../Api/Axios";
import { useNavigate } from "react-router-dom";
import { CAT } from "../../../Api/Api";
import { useState, useEffect, useRef } from "react";
import { Alert, Snackbar } from "@mui/material";

export default function AddProduct() {
  const { currentColor } = useDashboardContext();
  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const { setLoading } = useStateContext();
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(0);
  const [id, setId] = useState();
  const progress = useRef([]);
  const nav = useNavigate();

  const ImagesUploader = useRef(null);
  const ids = useRef([]);
  const [completeUpload, setCompleteUploading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await Axios.get(`/${CAT}`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`${PRODUCT + "/edit/" + id}`, form);
      setLoading(false);
      nav("/dashboard/products");
    } catch (e) {
      console.log(e);
      setLoading(false);
      if (e.response.status === 422) {
        setErr("Email is already been taken");
      } else {
        setErr("Internal Server Error");
      }
    }
  }

  async function createForm() {
    try {
      const dummy = {
        category: null,
        title: "title",
        description: "description",
        price: 1,
        discount: 1,
        About: "About",
      };
      const res = await Axios.post(`${PRODUCT + "/" + ADD}`, dummy);
      setId(res.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelect(e) {
    setForm((p) => ({ ...p, category: e.target.value }));
    if (sent !== 1) {
      createForm();
    }
    setSent(1);
  }
  const j = useRef(-1);
  async function handleUploadImages(e) {
    const newImagesFiles = Array.from(e.target.files);
    setImages((prev) => [...prev, ...newImagesFiles]);

    const newProgressRefs = newImagesFiles.map(() => ({ progress: 0 }));
    progress.current = [...progress.current, ...newProgressRefs];

    setCompleteUploading(false);

    for (let i = 0; i < newImagesFiles.length; i++) {
      j.current++;
      const data = new FormData();
      data.append("image", newImagesFiles[i]);
      data.append("product_id", id);

      try {
        const res = await Axios.post(`/product-img/add`, data, {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const perc = Math.floor((loaded * 100) / total);
            progress.current[j.current].progress = perc;
            setImages((prev) => [...prev]);
          },
        });
        ids.current[j.current] = res.data.id;
      } catch (error) {
        console.log(error);
      }
    }
    setCompleteUploading(true);
  }

  function deleteImage(image, index) {
    if (!completeUpload) {
      setOpenSnackbar(true);
      return;
    }
    const imgId = ids.current[index];
    try {
      Axios.delete(`/product-img/${imgId}`);
      j.current--;
      ids.current = ids.current.filter((id) => id !== imgId);
      setImages((prev) => prev.filter((img) => img !== image));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashContainer>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="warning">
          Wait until the upload is complete before deleting images.
        </Alert>
      </Snackbar>
      <DashHeader category="Page" title="Add Product" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={form.category}
          onChange={handleSelect}
          className={`w-full h-[35px] rounded-md outline-none border-2 border-b-4 dark:border-[#303030] bg-slate-100 dark:border-b-[#9a9a9a] pl-2 pr-2 dark:bg-[#2d2d2d] dark:text-white transition-all duration-300 ease-in-out placeholder-[#9a9a9a] dark:hover:bg-[#313131] dark:focus:bg-[#1e1f20] focus:border-border focus:drop-shadow-lg invalid:focus:border-b-red-600 valid:focus:border-b-[var(--current-color)]`}
          style={{ "--current-color": currentColor || "primary" }}
          required
        >
          <option value="" disabled hidden>
            Select Category
          </option>

          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <Input
          form={form}
          setForm={setForm}
          value={form.title}
          name="title"
          type="text"
          placeholder="Title"
          currentColor={currentColor}
          disabled={!sent}
          isFirst={!sent}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.description}
          name="description"
          type="text"
          placeholder="Description"
          disabled={!sent}
          currentColor={currentColor}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.price}
          name="price"
          placeholder="Price"
          currentColor={currentColor}
          disabled={!sent}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.discount}
          name="discount"
          placeholder="Discount"
          currentColor={currentColor}
          disabled={!sent}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.About}
          name="About"
          type="text"
          placeholder="About"
          currentColor={currentColor}
          disabled={!sent}
        />

        <ImageUploader
          sent={sent}
          currentColor={currentColor}
          handleUploadImages={handleUploadImages}
          text="Upload Production Images"
        />

        {err !== "" && <p className="text-sm text-red-600">{err}</p>}

        {images.length > 0 && (
          <div className="dark:bg-main-dark-bg p-6 rounded-lg space-y-4">
            {images.map((image, index) => (
              <ImagePreview
                key={index}
                image={image}
                index={index}
                deleteImage={deleteImage}
                completeUpload={completeUpload}
                currentColor={currentColor}
                progress={progress.current[index]?.progress || 0}
                ref={(e) => (progress.current[index] = e)}
              />
            ))}
          </div>
        )}
        <DashButton
          type="submit"
          size="md"
          className="font-bold w-full"
          text="Add New Product"
          borderRadius="10px"
        />
      </form>
    </DashContainer>
  );
}
