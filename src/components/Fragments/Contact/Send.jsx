import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function Send() {
  const handleSubmit = (values) => {
    console.log("name : ", values.name)
    console.log("email : ", values.email)
    console.log("massage : ", values.massage)
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          massage: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("required"),
          email: Yup.string()
            .email("invalid email address")
            .required("required"),
          massage: Yup.string().required("required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-fit">
            <div className="flex-col flex">
              <label className="text-2xl font-lexend-deca" htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="mt-3 border-2 border-border-color rounded w-[323px] h-[38px]"
              />
              <ErrorMessage
                name="name"
                id="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex-col flex">
              <label className="text-2xl font-lexend-deca" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-3 border-2 border-border-color rounded w-[323px] h-[38px]"
              />
              <ErrorMessage
                name="email"
                id="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex-col flex">
              <label className="text-2xl font-lexend-deca" htmlFor="massage">
                Massage
              </label>
              <Field
                as="textarea"
                name="massage"
                id="massage"
                className="mt-3 border-2 border-border-color rounded w-[323px] h-[100px]"
              />
              <ErrorMessage
                name="massage"
                id="massage"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-button-color font-noto-serif rounded-xl px-6 pt-[2px] pb-[4px] mt-4 text-white">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
