const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const questionnaireTemplate = path.resolve(`src/templates/questionnaire.tsx`);

  // Create Questionnaire page, and pass the Gravity Forms form ID to it.
  createPage({
    path: `/questionnaire`,
    component: questionnaireTemplate,
    context: {
      formId: 4,
    },
  });
};
