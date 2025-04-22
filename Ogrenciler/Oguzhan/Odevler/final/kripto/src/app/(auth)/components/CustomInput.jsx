import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function CustomInput({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className="mb-3">
            <label htmlFor={props.id || props.name} className="form-label d-block">
                {label}
            </label>
            <input
                {...field}
                {...props}
                className={`form-control ${meta.touched && meta.error ? "is-invalid" : ""}`}
            />
            {meta.touched && meta.error && (
                <div className="invalid-feedback">{meta.error}</div>
            )}
        </div>
    );
}

export default CustomInput;
