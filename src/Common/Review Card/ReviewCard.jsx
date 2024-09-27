import { Rating } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
const ReviewCard = ({ name, avatar, review, rating, isLast }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <div
      className={`w-full sm:w-[587px] border-b border-b-[#AAB3C1] pb-[23px] mb-[23px] ${
        isLast && "border-b-0 mb-0"
      }`}
    >
      <p className="text-dark-blue">{review}</p>

      <div className="flex mt-5 gap-[14px] items-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 object-cover rounded-full"
        />
        <div>
          <h1 className="text-dark-blue font-bold">{name}</h1>
          <StyledRating
            name="customized-color"
            value={rating}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            readOnly
            icon={<FaStar className="text-[#005FEA] text-sm" />}
            emptyIcon={<FaStar className="text-[#C8DEFE] text-sm ml-1" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
