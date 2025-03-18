export default function FormInput({type,name,value,onChange}){
    return(
        <input
              type={type}
              name={name}
              className='form-control'
              value={value}
              onChange={onChange}
              required
            />
        );
}


