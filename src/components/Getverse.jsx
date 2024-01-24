import PropTypes from "prop-types";
// import { useGetsloka } from "../utils/useGetsloka";
export const Getverse = ({ data }) => {
  return (
    <div className="w-[500px] h-[500px] border-8 border-solid rounded-2xl border-transparent/10 flex flex-col gap-5 text-black">
      <div className="w-[470px] h-56 border-4 m-2 rounded-2xl border-transparent/10 backdrop-blur-sm shadow-lg">
        <h1 className="font-bold p-3 text-lg">{data?.slok}</h1>
        <h1 className="font-bold p-3 text-lg">{data?.transliteration}</h1>
      </div>
      <div className="w-[470px] h-56 border-4 m-2 rounded-2xl border-transparent/10 backdrop-blur-sm shadow-lg">
        <h1 className="font-bold p-3 text-lg">{data?.san.et}</h1>
      </div>
    </div>
  );
};
Getverse.propTypes = {
  data: PropTypes.shape({
    slok: PropTypes.string,
    transliteration: PropTypes.string,
    san: PropTypes.shape({
      et: PropTypes.string,
      // Add other properties if needed
    }),
  }),
};
