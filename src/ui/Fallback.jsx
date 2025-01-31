import SvgLoader from "./SvgLoader";

function Fallback() {
  return (
    <div className="flex items-center justify-center gap-x-4 my-12 mx-auto">
      <span className="text-secondary-500">در حال بارگذاری اطلاعات</span>
      <SvgLoader />
    </div>
  );
}

export default Fallback;
