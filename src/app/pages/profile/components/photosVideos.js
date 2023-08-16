import PhotoCard from "./photoCard";
import Pagination from "./pagination";

function PhotoVideo() {
  const data = [
    {
      url: "",
      title: "Lorem ipsum",
      detail: "Lm ipsum",
    },
    {
      url: "",
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      url: "",
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      url: "",
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      url: "",
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      url: "",
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];
  return (
    <div className="bg-white p-24 pb-0">
      <h1 className="text-[#E5AC9C] text-3xl font-bold text-center">
        Photo's & Videos
      </h1>
      <div className="flex flex-wrap items-stretch gap-24 justify-evenly pt-20">
        {data.map((item, index) => {
          return <PhotoCard data={item} />;
        })}
      </div>
      <div className="flex w-full justify-center pt-40">
        <Pagination />
      </div>
    </div>
  );
}

export default PhotoVideo;
