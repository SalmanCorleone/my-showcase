const GridContents = () => {
  return (
    <div className="px-4 md:px-6 border flex justify-center flex-wrap gap-4 py-4">
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <div key={`block_${idx}`} className="flex flex-col w-40 h-40 md:w-80 md:h-80 rounded border"></div>
        ))}
    </div>
  );
};

export default GridContents;
