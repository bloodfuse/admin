import Text from '../atoms/Text';

const TitleHeader = ({title, hasSubtitle, isEmpty, subtitle}) => {
  return (
    <>
      <div className="flex justify-between">
        <Text className={"font-semibold"}>{title}</Text>
        {!isEmpty ? (
          <Text className={"font-base !text-[16px]"}>See All</Text>
        ) : (
          ""
        )}
      </div>
      {hasSubtitle ? (
        <Text className={"font-base !text-xs"}>
          {subtitle}
        </Text>
      ) : (
        ""
      )}
    </>
  );
}

export default TitleHeader