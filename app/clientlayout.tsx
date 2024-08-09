// // ClientLayout.tsx (client-side)
// "use client";

// import React, { useState } from 'react';

// import HSidebar from './componenet/hover-sidebar/page';
// import Navbar from './componenet/navbar/page';
// import Sidebar from './componenet/sidebar/page';
// import { Cdata } from './componenet/commondata/page';

// export default function ClientLayout({ children }: { children: React.ReactNode }) {
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
//           {children}
//         </main>
//       </div>
//     </>
//   );
// }
