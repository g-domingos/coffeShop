import { useFormik } from "formik";
import { Formik } from "./styles";

export const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      postalCode: "",
      street: "",
      number: "",
      complement: "",
      bairro: "",
      city: "",
      state: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Formik onSubmit={formik.handleSubmit}>
      <div>
        <input
          placeholder="CEP"
          id="postalCode"
          name="postalCode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
        />
      </div>
      <div>
        <input
          placeholder="Rua"
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.street}
        />
      </div>
      <div>
        <input
          placeholder="Número"
          id="number"
          name="number"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        <input
          placeholder="Complemento"
          id="complement"
          name="complement"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.complement}
        />
      </div>
      <div>
        <input
          placeholder="Bairro"
          id="bairro"
          name="bairro"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bairro}
        />
        <input
          placeholder="Cidade"
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <input
          placeholder="UF"
          id="state"
          name="state"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
      </div>
      <button style={{display:"none"}} type="submit">Submit</button>
    </Formik>
  );
};
