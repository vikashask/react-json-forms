import { FormattedMessage } from "react-intl";
import CustomDateTime from "./../../CustomDateTime";

export const CustomDateInput = (props) => {
  const { handleChange, data, schema, path, id, label, required, rootSchema } =
    props;
  const onHandleDate = (_, value) => {
    console.log({
      value,
      id,
      minDate: rootSchema?.properties?.[schema?.meta?.ref]?.meta?.minDate,
      ref: schema?.meta?.ref,
    });
    handleChange(path, value);
    if (
      schema?.meta?.ref &&
      id === rootSchema?.properties?.[schema?.meta?.ref]?.meta?.minDate
    ) {
      rootSchema.properties[schema.meta.ref].meta.minDate = value;
    }
  };
  return (
    <CustomDateTime
      id={path}
      sx={{ marginY: "12px" }}
      label={<FormattedMessage id={label} />}
      value={data || null}
      minDate={schema?.meta?.minDate}
      required={required}
      handleChange={onHandleDate}
    />
  );
};
