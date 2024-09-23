import { Routes, Route, Outlet } from "react-router-dom";
import {
  Dashboard,
  Register,
  GoogleCallback,
  Login,
  Home,
  RequireAuth,
  AddUser,
  Users,
  Writer,
  NotFound,
  CategoriesManage,
  AddCategory,
  Products,
  AddProduct,
  EditProduct,
  ProductDetails,
  AllProducts,
  Checkout,
} from "./Pages/export";
import { Header, Loading, Cart, Footer } from "./Components/export";
import { useStateContext } from "./Contexts/ContextProvider";
import { DashboardContext } from "./Contexts/DashboardContext";
import RequireBack from "./Pages/Auth/RequireBack";

export default function App() {
  const { loading } = useStateContext();

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route element={<RequireBack />}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* </Route> */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/auth/google/callback" element={<GoogleCallback />} />
        </Route>
        <Route element={<DashboardContext />}>
          <Route element={<RequireAuth allowedRole={["1995", "1996"]} />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route element={<RequireAuth allowedRole={["1995"]} />}>
                {/* Dashboard */}
                {/* <Route path="" element={<Ecommerce />} /> */}
                {/* <Route path="ecommerce" element={<Ecommerce />} /> */}

                {/* Pages */}
                {/* <Route path="orders" element={<Orders />} />
              <Route path="employees" element={<Employees />} /> */}
                <Route path="users" element={<Users />} />
                <Route path="adduser" element={<AddUser />} />
                <Route path="products" element={<Products />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="product/:id" element={<EditProduct />} />
              </Route>
              <Route element={<RequireAuth allowedRole={["1995", "1996"]} />}>
                <Route path="writer" element={<Writer />} />
              </Route>
              <Route element={<RequireAuth allowedRole={["1995", "1999"]} />}>
                <Route path="categories" element={<CategoriesManage />} />
                <Route path="addcategory" element={<AddCategory />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

function MainLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Cart />
      <div className="pt-[160px] relative bg-[#f5f6f9]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

//   {
//     /* Apps */
//   }
//   {
//     /* <Route path="/editor" element={<Editor />} />
// <Route path="color-picker" element={<ColorPicker />} />
// <Route path="kanban" element={<Kanban />} />
// <Route path="calendar" element={<Calendar />} /> */
//   }

//   {
//     /* Charts */
//   }
//   {
//     /* <Route path="line" element={<Line />} />
// <Route path="area" element={<Area />} />
// <Route path="bar" element={<Bar />} />
// <Route path="pie" element={<Pie />} />
// <Route path="financial" element={<Financial />} />
// <Route path="pyramid" element={<Pyramid />} />
// <Route path="color-mapping" element={<ColorMapping />} />
// <Route path="stacked" element={<Stacked />} /> */
//   }
