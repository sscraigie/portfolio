/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZABLHT4vQTu
 */
// import { Button } from "@/components/ui/button";
// import {
//   PopoverTrigger,
//   PopoverContent,
//   Popover,
// } from "@/components/ui/popover";

// export default function Component() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button>Place Order</Button>
//         </PopoverTrigger>
//         <PopoverContent className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
//           <div className="absolute right-[-10px] top-[-10px]">
//             <div>
//               <button
//                 className="rounded-full bg-white p-1 text-red-500 dark:bg-gray-800 dark:text-red-400"
//                 variant="ghost"
//               >
//                 <XIcon className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-col items-center space-y-4">
//             <CheckIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
//             <h2 className="text-2xl font-bold">Woohoo!</h2>
//             <h3 className="text-lg font-bold">Your order has been placed</h3>
//             <p className="text-center text-gray-500 dark:text-gray-400">
//               Pull up a chair, sit back and relax as your order is on its way to
//               you!
//             </p>
//           </div>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// function CheckIcon(props: { className: string }) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="20 6 9 17 4 12" />
//     </svg>
//   );
// }

// function XIcon(props: { className: string }) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }
