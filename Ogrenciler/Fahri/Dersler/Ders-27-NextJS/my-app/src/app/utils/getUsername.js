export const generateUserName = email => {
    const splittedEmail = email.split('')
    const atIndex = splittedEmail.findIndex(char => char === '@')
    return splittedEmail.slice(0, atIndex).join('')
}