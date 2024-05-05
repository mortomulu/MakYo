import { useFormik, Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default function MessageForm() {
  const defaultBorder =
    "mt-2 border-2 border-border-color rounded xl:w-[323px] lg:w-[273px] h-[38px] md:w-[185px] sm:w-[400px]";
  const defaultBordertextArea =
    "mt-2 border-2 border-border-color rounded xl:w-[323px] lg:w-[273px] h-[100px] md:w-[185px] sm:w-[400px]";
  const errorBorder = "mt-2 border-2 border-red-500 rounded xl:w-[323px] lg:w-[273px] md:w-[185px] sm:w-[400px] h-[38px]";
  const errorBordertextArea =
    "mt-2 border-2 border-red-500 rounded xl:w-[323px] lg:w-[273px] md:w-[185px] sm:w-[400px] h-[100px]";

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
        onSubmit={(values, { resetForm }) => {
          console.log("name : ", values.name);
          console.log("email : ", values.email);
          console.log("message : ", values.message);

          resetForm();
        }}
      >
        {() => (
          <Form className="w-fit">
            <div className="flex-col flex">
              <label className="mt-4 lg:text-2xl md:text-xl font-lexend-deca" htmlFor="name">
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
              <label className="mt-4 lg:text-2xl md:text-xl font-lexend-deca" htmlFor="email">
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
              <label className="mt-4 lg:text-2xl md:text-xl font-lexend-deca" htmlFor="message">
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
