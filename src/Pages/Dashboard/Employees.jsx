// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page,
//   Search,
//   Inject,
//   Toolbar,
// } from "@syncfusion/ej2-react-grids";

// // import { employeesData, contextMenuItems, employeesGrid } from "../../data/dummy";
// // import { Header } from "../Components/export";

// export default function Employees() {
//   return (
//     <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl">
//       {/* <Header category="Page" title="Employees" /> */}
//       <GridComponent
//         // dataSource={employeesData}
//         allowPaging
//         toolbar={["Search"]}
//         width="auto"
//       >
//         <ColumnsDirective>
//           {/* {employeesGrid.map((item, index) => (
//             <ColumnDirective key={index} {...item} />
//           ))} */}
//         </ColumnsDirective>
//         <Inject services={[Page, Search, Toolbar]} />
//       </GridComponent>
//     </div>
//   );
// }
