export default function SectionHeader({
  content,
}: {
  content: {
    index: number; // The index of the section
    title: string; // The title of the section
  };
}) {
  return (
    <div className="flex">
      {/* Display the index with leading zero if less than 10 */}
      <sup className="text-[16px] mr-5 mt-5 text-[#61616E] dark:text-[#545460]">
        {content.index < 10 ? `0${content.index}` : content.index}
      </sup>
      {/* Display the title of the section */}
      <h1 className="text-[32px] font-medium capitalize">{content.title}</h1>
    </div>
  );
}
