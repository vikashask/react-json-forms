import Tags from "./tags";

export const CustomTags = (props) => {
  const { handleChange, data, schema, path } = props;
  const onHandleTag = (value) => {
    handleChange(path, value);
  };
  return (
    <Tags
      sx={{ marginY: "12px" }}
      tagList={data || []}
      handleTag={onHandleTag}
    />
  );
};
