import { AreaIcon, UserIcon } from "../Common/Venues Card/Icons";
import { FaRegStar } from "react-icons/fa6";
const PencilIcon = () => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 13H13M8.18961 2.54114C8.18961 2.54114 8.18961 3.63089 9.27936 4.72064C10.3691 5.81039 11.4589 5.81039 11.4589 5.81039M3.87975 10.992L6.16823 10.6651C6.49833 10.618 6.80424 10.465 7.04003 10.2292L12.5486 4.72064C13.1505 4.11879 13.1505 3.14299 12.5486 2.54114L11.4589 1.45139C10.857 0.849537 9.88121 0.849537 9.27936 1.45139L3.77078 6.95997C3.53499 7.19576 3.38203 7.50167 3.33488 7.83177L3.00795 10.1202C2.9353 10.6288 3.3712 11.0647 3.87975 10.992Z"
      stroke="#28303F"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
  </svg>
);
export const detailCardData = [
  {
    title: "Area (sqm)",
    Icon: <AreaIcon color={"#001942"} width={17} height={17}/>,
    value: 987.923,
  },
  {
    title: "Capacity",
    Icon: <UserIcon color={"#001942"} width={24} height={24}/>,
    value: 987.923,
  },
  {
    title: "Ratings",
    Icon: <FaRegStar className="text-dark-blue text-lg" />,
    value: 4.5,
  },
  {
    title: "Reviews",
    Icon: <PencilIcon/>,
    value: "1.5k",
  },
];
