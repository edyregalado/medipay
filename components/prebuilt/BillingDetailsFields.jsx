import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Nombre"
        type="text"
        placeholder="Eduardo Regalado"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="eduardoregalado@ejemplo.com"
        required
      />
      <FormField
        name="address"
        label="Domicilio"
        type="text"
        placeholder="De las gardenias 540"
        required
      />
      <FormField
        name="zip"
        label="CP"
        type="text"
        placeholder="45110"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
