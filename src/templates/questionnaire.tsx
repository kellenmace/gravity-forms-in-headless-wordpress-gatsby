import * as React from "react";
import { graphql } from "gatsby";

import { GravityFormsForm } from "../../generated/graphql";
import GravityForm from '../components/GravityForm';

interface Props {
  data: {
    wpGravityFormsForm: GravityFormsForm;
  };
}

export default function Questionnaire({ data }: Props) {
  const { wpGravityFormsForm: form } = data;

  return (
    <main>
      <h1>{form.title}</h1>
      <p>{form.description}</p>
      <GravityForm form={form} />
    </main>
  );
}

export const query = graphql`
  query getForm($formId: Int!) {
    wpGravityFormsForm(formId: { eq: $formId }) {
      ...GravityFormFields
    }
  }
`;
