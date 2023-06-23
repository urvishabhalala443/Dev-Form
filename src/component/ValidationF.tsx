// import React from "react";
// import "../style/ValidationF.css";
// import { Form, Field, Formik } from "formik";
// import * as yup from "yup";
// interface Props {}
// const ValidationF: React.FC<Props> = () => {
//   const formvalue = {
//     Comapny_Name: "",
//     Employe_count: "",
//     Description: "",
//   };
//   const validationvalue = yup.object().shape({
//     Comapny_Name: yup.string().required().max(100),
//     Employe_count: yup.number().required().min(0),
//     Description: yup.string().required().max(500),
//   });

//   const sub = (values) => {
//     console.log(values);
//   };
//   return (
//     <>
//       <section className="sec">
//         <div className="main">
//           <h1>Form</h1>
//           <Formik
//             initialValues={formvalue}
//             validationSchema={validationvalue}
//             onSubmit={sub}
//           >
//             {({ dirty, isSubmitting, errors, values, setFieldValue }) => (
//               <Form>
//                 {console.log(values)}

//                 <div className="c-part">
//                   <Field
//                     type="text"
//                     placeholder="Company Name"
//                     value={values.Comapny_Name}
//                     onChange={(e) =>
//                       setFieldValue("Comapny_Name", e.target.value)
//                     }
//                   />
//                 </div>
//                 <br />
//                 <div className="num-part">
//                   <Field
//                     type="number"
//                     placeholder="Employe Count"
//                     value={values.Employe_count}
//                     onChange={(e) =>
//                       setFieldValue("Employe_count", e.target.value)
//                     }
//                   />
//                 </div>
//                 <div className="des-part">
//                   <Field
//                     type="text"
//                     placeholder="Description"
//                     value={values.Description}
//                     onChange={(e) =>
//                       setFieldValue("Description", e.target.value)
//                     }
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={
//                     Object.keys(errors).length > 1 || !dirty || isSubmitting
//                   }
//                 >
//                   SAVE
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ValidationF;

import React from "react";
import { Form, Field, Formik } from "formik";
import * as yup from "yup";
interface Props {}
const ValidationF: React.FC<Props> = () => {
  const formvalue = {
    Comapny_Name: "",
    Employe_count: "",
    Description: "",
  };
  const validationvalue = yup.object().shape({
    Comapny_Name: yup.string().required().max(100),
    Employe_count: yup.number().required().min(0),
    Description: yup.string().required().max(500),
  });
  const sub = (values) => {
    console.log(values);
  };
  return (
    <>
      <section className="sec">
        <div className="main">
          <h3>Vlidation Form</h3>
          <h1>Hii</h1>

          <Formik
            initialValues={formvalue}
            validationSchema={validationvalue}
            onSubmit={sub}
          >
            {({ isSubmitting, isValid, dirty, setFieldValue, values }) => (
              <Form>
                <div className="c-part">
                  <Field
                    type="text"
                    placeholder="Company Name"
                    name="Comapny_Name"
                    value={values.Comapny_Name}
                    onChange={(e) =>
                      setFieldValue("Comapny_Name", e.target.value)
                    }
                  />
                </div>
                <br />
                <div className="num-part">
                  <Field
                    type="number"
                    placeholder="Employe Count"
                    name="Employe_count"
                    value={values.Employe_count}
                    onChange={(e) =>
                      setFieldValue("Employe_count", parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="des-part">
                  <Field
                    type="text"
                    placeholder="Description"
                    value={values.Description}
                    onChange={(e) =>
                      setFieldValue("Description", e.target.value)
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  SAVE
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default ValidationF;
