import Text from "../atoms/Text";

const EmptyState = ({image, message='No data available'}) => {
  return (
    <>
      <div className="flex-col py-6">
        <div className="flex justify-center items-center py-3">
          <img className="w-[25%] h-[25%]" src={image} />
        </div>
        <Text className="flex justify-center items-center">
          {message}
        </Text>
      </div>
    </>
  );
}

export default EmptyState