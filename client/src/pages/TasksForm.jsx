import { Form, Formik } from "formik";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

import { createTaskRequest } from "../api/tasks.api.js";

function TasksForm() {
  return (
    <div>
      <Formik
        //funcion para iniciar 
        initialValues={{
          title: "",
          description: "",
        }}

        //funcion
        onSubmit={async (values, actions) => {
          try {
            const response = createTaskRequest(values);
            actions.resetForm();
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            {/* Input for title */}
            <div className="p-inputgroup flex-1 mt-5">
              <FloatLabel>
                <InputText
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
                <label htmlFor="title">Write a title</label>
              </FloatLabel>
            </div>

            {/* Input Area for description */}
            <div className="p-inputgroup flex-1 mt-5">
              <FloatLabel>
                <InputTextarea
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  rows={3}
                  cols={30}
                />
                <label htmlFor="description">Write a description</label>
              </FloatLabel>
            </div>

            {/* Button for save */}
            <div className="p-inputgroup flex-1 mt-5">
              <Button
                severity="success"
                raised
                type="submit"
                disabled={isSubmitting}
                label={isSubmitting ? "Saving..." : "Save"}
                icon="pi pi-check"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
