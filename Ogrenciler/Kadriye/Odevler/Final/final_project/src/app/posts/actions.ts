'use server'
import { redirect } from 'next/navigation'
import { changePasswordFirebase, loginFirebase, registerFirebase } from '../../../firebase/authControl'
import { cookies } from "next/headers";

export async function register(formData: FormData) {
    registerFirebase(formData)
    const cookieStore = await cookies()
    cookieStore.set('current_user', "no-user")
    redirect(`/login`)
}
export async function login(formData: FormData) {
    const user = await loginFirebase(formData);
    if (!user) {
        console.error("Giriş başarısız.");
        return;
    }
    const cookieStore = await cookies()
    cookieStore.set('current_user', JSON.stringify(user))
    redirect(`/profile`)
}
export async function changePassword(formData: FormData) {
    const cookieStore = await cookies()
    const user = cookieStore.get('current_user')
    changePasswordFirebase(formData, user);
}

export async function getFilteredData(formData: FormData) {
    const query = new URLSearchParams()
    for (const key of ['price_min', 'price_max', 'market_cap_min', 'market_cap_max', 'sort', 'sort_dir']) {
        const value = formData.get(key)
        if (value) query.append(key, value.toString())
    }
    redirect(`/market?${query.toString()}`)
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.set('current_user', "no-user")
    redirect(`/`)
}
