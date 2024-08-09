// // ClientLayout.tsx (client-side)
// "use client";

// import React, { useState } from 'react';
// import Navbar from './navbar/page';
// import HSidebar from './hover-sidebar/page';
// import Sidebar from './sidebar/page';
// import { Cdata } from './commondata/page';



// export default function AllLayout() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <Navbar />
//       <button onClick={toggleSidebar}>
//         {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
//       </button>
//       <div style={{ display: "flex" }}>
//         <HSidebar />
//         {isSidebarOpen && <Sidebar />}
//         <main style={{ flex: 1 }}>
//           <Cdata/>
         
//         </main>
//       </div>
//     </>
//   );
// }
