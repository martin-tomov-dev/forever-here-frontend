function CommentCard(props) {
  return (
    <div className="p-40 flex flex-col bg-[#3E716C] rounded-[40px]">
      <div className="flex flex-col min-h-[250px] bg-[#648d89] rounded-[30px] p-20 max-w-[350px]">
        <p className="max-w-[350px] text-2xl text-center p-10 text-white">
          {props.data.title}
        </p>
        <p className="flex-1 text-center text-white">{props.data.detail}</p>
      </div>
    </div>
  );
}

export default CommentCard;
