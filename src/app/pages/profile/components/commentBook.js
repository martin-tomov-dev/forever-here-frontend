import CommentCard from "./commentCard";
import Pagination from "./pagination";

function CommentBook() {
  const comments = [
    {
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      detail:
        "Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];
  return (
    <div className="bg-white p-24 pb-0">
      <div className="flex justify-center">
        <span className="text-[#E5AC9C] font-bold text-lg underline underline-offset-4 py-3">
          Leave a comment
        </span>
      </div>
      <h1 className="text-[#E5AC9C] text-3xl py-10 font-bold text-center">
        Comments Book
      </h1>
      <div className="flex flex-wrap items-stretch gap-24 justify-evenly pt-20">
        {comments.map((item, index) => {
          return <CommentCard data={item} />;
        })}
      </div>
      <div className="flex w-full justify-center pt-40">
        <Pagination />
      </div>
      <div className="flex justify-center">
        <span className=" font-bold text-lg underline underline-offset-4 py-3">
          Invite someone to comment
        </span>
      </div>
    </div>
  );
}

export default CommentBook;
