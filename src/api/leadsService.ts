export interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  property: string;
  status: "New" | "Contacted" | "Follow-up";
  date: string;
}

let leads: Lead[] = [
  {
    id: 1,
    name: "Vikram Singh",
    phone: "+91 98765 43210",
    email: "vikram.singh@email.com",
    property: "2BHK Marathahalli",
    status: "New",
    date: "2025-11-14",
  },
  {
    id: 2,
    name: "Anjali Gupta",
    phone: "+91 98765 43211",
    email: "anjali.g@email.com",
    property: "3BHK Bellandur",
    status: "Contacted",
    date: "2025-11-13",
  },
  {
    id: 3,
    name: "Karan Shah",
    phone: "+91 98765 43212",
    email: "karan@email.com",
    property: "1BHK JP Nagar",
    status: "Follow-up",
    date: "2025-11-12",
  },
   {
    id: 3,
    name: "Karan Shah",
    phone: "+91 98765 43212",
    email: "karan@email.com",
    property: "1BHK JP Nagar",
    status: "Follow-up",
    date: "2025-11-12",
  },
];

export const getLeads = async () => leads;


// import axios from "axios";

// export const getLeads = async () => {
//   const res = await axios.get("/api/leads");
//   return res.data;
// };
