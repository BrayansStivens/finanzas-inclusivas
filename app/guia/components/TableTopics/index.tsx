export interface ContentTopics {
  name: string;
}

export interface Topics {
  id: string;
  title: string;
  content: ContentTopics[];
}

function TableTopics({ id, title, content }: Topics) {
  return (
    <>
      <div className="bg-[#102e6a] text-lg md:text-2xl font-semibold text-[#fff] py-5 px-5 w-full text-center">
        {title}
      </div>
      <div className="divide-y divide-[#102e6a] w-full ">
        {content.map(({ name }, index: number) => (
          <div
            key={index}
            className="text-center py-4 px-5 w-full text-base md:text-xl font-medium "
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

export default TableTopics;
