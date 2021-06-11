import * as React from "react";
import { graphql } from "gatsby";

import { TimeField as TimeFieldType, FieldError } from "../../../generated/graphql";
import useGravityForm, { ACTION_TYPES, FieldValue, StringFieldValue } from "../../hooks/useGravityForm";

export const TIME_FIELD_FIELDS = graphql`
  fragment TimeFieldFields on WpTimeField {
    id
    formId
    label
    description
    cssClass
    isRequired
  }
`;

interface Props {
  field: TimeFieldType;
  fieldErrors: FieldError[];
}

const DEFAULT_VALUE = '';

export default function TimeField({ field, fieldErrors }: Props) {
  const { id, formId, type, label, description, cssClass, isRequired } = field;
  const htmlId = `field_${formId}_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as StringFieldValue | undefined;
  const value = fieldValue?.value || DEFAULT_VALUE;

  return (
    <div className={`gfield gfield-${type} ${cssClass}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <input
        type="time"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateTimeFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      />
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length ? fieldErrors.map(fieldError => (
        <p key={fieldError.id} className="error-message">{fieldError.message}</p>
      )) : null}
    </div>
  );
}
