import { FormInput } from '../atoms/FormInput';

export const ApplicationForm = () => {
  const fields = [
    {
      column: '1',
      type: 'text',
      id: 'firstName',
      name: 'firstName',
      placeholder: 'First Name',
    },
    {
      column: '2',
      type: 'text',
      id: 'lastName',
      name: 'lastName',
      placeholder: 'Last Name',
    },
    {
      column: '1',
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Email',
    },
  ];
  return (
    <form>
      {fields.map((field) => (
        <div>
          <FormInput type={field.type} />
        </div>
      ))}

      {/* <FormInput
        type='text'
        id='firstName'
        name='firstName'
        placeholder='First Name'
      />
      <FormInput
        type='text'
        id='lastName'
        name='lastName'
        placeholder='Last Name'
      /> */}
    </form>
  );
};
