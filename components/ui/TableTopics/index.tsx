export interface ContentTopics {
  name: string;
  isSubtitle?: boolean;
}

export interface Topics {
  id: string;
  title: string;
  bgColor: string;
  content: ContentTopics[];
}

function TableTopics({ id, title, content, bgColor }: Topics) {
  return (
    <>
      <div className={`${bgColor} text-lg md:text-xl font-semibold text-[#fff] py-2 px-2 w-full text-center`}>
        {title}
      </div>
      <div className=" divide-y divide-[#102e6a] w-full ">
        {content.map(({ name, isSubtitle }, index: number) => (
          <div
            key={index}
            className={`${isSubtitle ? 'bg-[#2B6595] mt-2 text-[#fff] py-2' : 'py-4'} text-center  px-5 w-full text-base md:text-xl font-medium`}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

export default TableTopics;
