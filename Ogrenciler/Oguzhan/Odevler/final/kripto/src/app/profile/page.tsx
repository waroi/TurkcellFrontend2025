"use client"

import { useAuthStore } from '@/store/authStore'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/atoms/Button'

const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Ad alanı zorunlu'),
    surname: Yup.string().required('Soyad alanı zorunlu'),
    email: Yup.string().email('Geçersiz email formatı').required('Email zorunlu'),
})

const PasswordSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Mevcut şifre gereklidir'),
    newPassword: Yup.string()
        .min(6, 'En az 6 karakter olmalı')
        .required('Yeni şifre gereklidir'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Şifreler eşleşmiyor')
        .required('Şifre tekrarı gereklidir'),
})

export default function ProfilePage() {
    const { user, updateProfile, changePassword } = useAuthStore()

    if (!user) return <div className="container py-5">Lütfen giriş yapın</div>

    return (
        <div className="container py-5">
            <h1 className="mb-4">Profil Yönetimi</h1>


            <div className="card mb-4">
                <div className="card-body">
                    <h3 className="mb-3">Kişisel Bilgiler</h3>
                    <Formik
                        initialValues={{
                            name: user.name,
                            surname: user.surname,
                            email: user.email,
                        }}
                        validationSchema={ProfileSchema}
                        onSubmit={async (values) => {
                            await updateProfile(values)
                        }}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form>
                                <div className="mb-3">
                                    <label>Adınız</label>
                                    <Field
                                        name="name"
                                        className="form-control"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && touched.name && (
                                        <div className="text-danger small">{errors.name}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label>Soyadınız</label>
                                    <Field
                                        name="surname"
                                        className="form-control"
                                        disabled={isSubmitting}
                                    />
                                    {errors.surname && touched.surname && (
                                        <div className="text-danger small">{errors.surname}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label>Email Adresiniz</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && touched.email && (
                                        <div className="text-danger small">{errors.email}</div>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Güncelleniyor...' : 'Bilgileri Güncelle'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h3 className="mb-3">Güvenlik Ayarları</h3>
                    <Formik
                        initialValues={{
                            currentPassword: '',
                            newPassword: '',
                            confirmPassword: '',
                        }}
                        validationSchema={PasswordSchema}
                        onSubmit={async (values, { resetForm }) => {
                            await changePassword(values.currentPassword, values.newPassword)
                            resetForm()
                        }}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form>
                                <div className="mb-3">
                                    <label>Mevcut Şifreniz</label>
                                    <Field
                                        name="currentPassword"
                                        type="password"
                                        className="form-control"
                                        disabled={isSubmitting}
                                    />
                                    {errors.currentPassword && touched.currentPassword && (
                                        <div className="text-danger small">{errors.currentPassword}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label>Yeni Şifreniz</label>
                                    <Field
                                        name="newPassword"
                                        type="password"
                                        className="form-control"
                                        disabled={isSubmitting}
                                    />
                                    {errors.newPassword && touched.newPassword && (
                                        <div className="text-danger small">{errors.newPassword}</div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label>Yeni Şifre Tekrar</label>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        className="form-control"
                                        disabled={isSubmitting}
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <div className="text-danger small">{errors.confirmPassword}</div>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="btn btn-danger"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Değiştiriliyor...' : 'Şifreyi Değiştir'}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}