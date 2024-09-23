import { useState, useEffect } from "react";
import {
  DashHeader,
  Input,
  DashButton,
  ImageUploader,
  DashContainer,
} from "../../../Components/export";
import { useStateContext } from "../../../Contexts/ContextProvider";
import { useDashboardContext } from "../../../Contexts/DashboardContext";
import { FormControl } from "@mui/material";
import { Axios } from "../../../Api/Axios";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { MdDelete } from "react-icons/md";

export default function AddCategory() {
  const { currentColor } = useDashboardContext();
  const [form, setForm] = useState({
    title: "",
    image: null,
    imageURL: null,
  });
  const { setLoading } = useStateContext();
  const [err, setErr] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const nav = useNavigate();

  const handleUploadImage = (e) => {
    try {
      const files = e.target.files;
      if (files.length > 1) {
        setOpenSnackbar(true);
        return;
      }
      const imageFile = files[0];
      setForm({
        ...form,
        image: imageFile,
        imageURL: URL.createObjectURL(imageFile),
      });
    } catch (e) {}
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("image", form.image);

    setLoading(true);
    try {
      await Axios.post(`/category/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setLoading(false);
      nav("/dashboard/categories");
      console.log("done");
    } catch (e) {
      setLoading(false);
      console.log(e);
      if (e.response && e.response.status === 422) {
        setErr("Email is already been taken");
      } else {
        setErr("Internal Server Error");
      }
    }
  }

  useEffect(() => {
    return () => {
      if (form.imageURL) {
        URL.revokeObjectURL(form.imageURL);
      }
    };
  }, [form.imageURL]);

  return (
    <DashContainer>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="warning">
          You can only upload one image at a time.
        </Alert>
      </Snackbar>
      <DashHeader category="Page" title="Add Category" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormControl fullWidth>
          <Input
            form={form}
            setForm={setForm}
            value={form.title}
            name="title"
            type="text"
            placeholder="Title"
            currentColor={currentColor}
            isFirst={true}
          />
        </FormControl>

        <FormControl fullWidth>
          <ImageUploader
            text="Upload Category Image"
            sent={true}
            currentColor={currentColor}
            handleUploadImages={handleUploadImage}
          />
        </FormControl>

        {form.imageURL && (
          <div className="group rounded-lg overflow-hidden relative">
            <img
              src={form.imageURL}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {err && <p className="text-sm text-red-600">{err}</p>}

        <DashButton
          type="submit"
          size="md"
          className="font-bold w-full"
          text="Add New Category"
          borderRadius="10px"
        />
      </form>
    </DashContainer>
  );
}
