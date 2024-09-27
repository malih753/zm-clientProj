import useSWR from "swr";
import { server } from "../../../../../Constants/server";
import { fetcher } from "../../../../../utils/fetcher";
import { useAuth } from "../../../../../Context/AuthContext";

const rows = [
  {
    sku: 1,
    reference_id: "DXB-S-7954",
    event_data: "31/03/2024",
    event_type: "Private Parties",
    budget: "100 to 150",
    pax: 100,
    venue_name: "Nad Al Sheba",
    enquiry_status: "New Enquiry",
    action: "Not Responded",
  },
  {
    sku: 1,
    reference_id: "DXB-S-7954",
    event_data: "31/03/2024",
    event_type: "Private Parties",
    budget: "100 to 150",
    pax: 100,
    venue_name: "Nad Al Sheba",
    enquiry_status: "New Enquiry",
    action: "Not Responded",
  },
  {
    sku: 1,
    reference_id: "DXB-S-7954",
    event_data: "31/03/2024",
    event_type: "Private Parties",
    budget: "100 to 150",
    pax: 100,
    venue_name: "Nad Al Sheba",
    enquiry_status: "New Enquiry",
    action: "Not Responded",
  },
  {
    sku: 1,
    reference_id: "DXB-S-7954",
    event_data: "31/03/2024",
    event_type: "Private Parties",
    budget: "100 to 150",
    pax: 100,
    venue_name: "Nad Al Sheba",
    enquiry_status: "New Enquiry",
    action: "Not Responded",
  },
  {
    sku: 1,
    reference_id: "DXB-S-7954",
    event_data: "31/03/2024",
    event_type: "Private Parties",
    budget: "100 to 150",
    pax: 100,
    venue_name: "Nad Al Sheba",
    enquiry_status: "New Enquiry",
    action: "Not Responded",
  },
];

const colums = [
  "#",
  "Reference Id",
  "Event Data",
  "Event Type",
  "Budget",
  "Pax",
  "Venue Name",
  "Enquiry Status",
  "Action",
];

export default function Table() {

  const {user} = useAuth()

  const {data,}= useSWR(`${server}/enquiry/byUserId/${user?.userId}`, fetcher);
  console.log("data",data);
  return (
    <div className="relative">
      <table className="w-full text-sm text-left rtl:text-left border-separate  border-spacing-y-2">
        <thead className="text-xs text-[#515B6B]  ">
          <tr>
            {colums.map((colum, index) => (
              <th
                key={colum}
                scope="col"
                className={`pl-0 py-0 ${index === 0 && "pl-[84px]"}`}
              >
                {colum}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr className="bg-[#F9FBFF] border border-[#AAB3C1]">
              <td
                className="pr-6 border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#AAB3C1] rounded-l-[10px] pl-[84px] py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.sku}
              </td>
              <td
                className="pr-6 border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1]  py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.reference_id}
              </td>
              <td
                className="pr-6  border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1] py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.event_data}
              </td>
              <td
                className="pr-6 border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1] py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.event_type}
              </td>
              <td
                className="pr-6 border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1]  py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.budget}
              </td>
              <td
                className="pr-6 border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1]  py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.pax}
              </td>
              <td
                className="pr-6 border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1]  py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.venue_name}
              </td>
              <td
                className="pr-6 border-t-[0.5px] border-b-[0.5px]  border-[#AAB3C1]  py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.enquiry_status}
              </td>{" "}
              <td
                className="pr-6 rounded-r-[10px] border-r-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[#AAB3C1]  py-4 text-sm font-medium text-dark-blue
            "
              >
                {row.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
