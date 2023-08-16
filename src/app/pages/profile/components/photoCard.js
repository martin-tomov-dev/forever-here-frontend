function PhotoCard(props) {
  console.log(props);
  return (
    <div className="min-w-[350px] flex flex-col ">
      <div className="bg-[#D9D9D9] h-[350px]"></div>
      <div className="bg-[#3E716C] max-w-[350px] p-10 flex-1">
        <p className="w-full">{props.data.title}</p>
        <p className="w-full">{props.data.detail}</p>
      </div>
    </div>
  );
}

export default PhotoCard;
