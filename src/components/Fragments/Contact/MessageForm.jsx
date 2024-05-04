import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function MessageForm() {
  const handleSubmit = (values) => {
    console.log("name : ", values.name);
    console.log("email : ", values.email);
    console.log("message : ", values.message);
  };

  const defaultBorder =
    "mt-3 border-2 border-border-color rounded w-[323px] h-[38px]";
  const defaultBordertextArea =
    "mt-3 border-2 border-border-color rounded w-[323px] h-[100px]";
  const errorBorder = "mt-3 border-2 border-red-500 rounded w-[323px] h-[38px]";
  const errorBordertextArea =
    "mt-3 border-2 border-red-500 rounded w-[323px] h-[100px]";

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("required"),
          email: Yup.string()
            .email("invalid email address")
            .required("required"),
          message: Yup.string().required("required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-fit">
            <div className="flex-col flex">
              <label className="text-2xl font-lexend-deca" htmlFor="name">
                Name
              </label>
              <Field type="text" name="name">
                {({ field, meta: { touched, error } }) => (
                  <input
                    className={touched && error ? errorBorder : defaultBorder}
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className="flex-col flex">
              <label className="text-2xl font-lexend-deca" htmlFor="email">
                Email
              </label>
              <Field type="text" name="email">
                {({ field, meta: { touched, error } }) => (
                  <input
                    className={touched && error ? errorBorder : defaultBorder}
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className="flex-col flex">
              <label className="text-2xl font-lexend-deca" htmlFor="message">
                Massage
              </label>
              <Field type="text" name="message">
                {({ field, meta: { touched, error } }) => (
                  <textarea
                    className={
                      touched && error
                        ? errorBordertextArea
                        : defaultBordertextArea
                    }
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-button-color font-noto-serif rounded-xl px-6 pt-[2px] pb-[4px] mt-4 text-white"
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
