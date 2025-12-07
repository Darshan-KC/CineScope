const SkeletonCard = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="bg-gray-300 dark:bg-gray-700 h-60 w-full rounded-xl"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 mt-3 rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 mt-2 w-2/3 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
