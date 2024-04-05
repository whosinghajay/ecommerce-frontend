const Loading = () => {
  return <div>Loading</div>;
};

export default Loading;

interface SkeletonLoaderProps {
  width?: string;
  length?: number;
}
export const SkeletonLoader = ({
  width = "unset",
  length = 3,
}: SkeletonLoaderProps) => {
  const skeletons = Array.from({ length }, (_, idx) => (
    <div key={idx} className="skeleton-shape"></div>
  ));
  return (
    <div className="skeleton-loader" style={{ width }}>
      {skeletons}
    </div>
  );
};
