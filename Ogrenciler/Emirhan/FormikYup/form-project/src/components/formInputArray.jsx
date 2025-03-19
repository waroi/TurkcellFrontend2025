import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';


import React from 'react'

function formInputArray() {
    return (
        <div>
            <FieldArray name="friends">
                {({ insert, remove, push }) => (
                    ...
                )}
            </FieldArray>
        </div>
    )
}

export default formInputArray

