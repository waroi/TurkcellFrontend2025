export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  export const validatePassword = (password: string): boolean => {
    return password.length >= 8
  }
  
  export const validateCryptoAddress = (address: string, currency: string): boolean => {
    // Basic validation - would need to be currency-specific in production
    return address.length > 25 && address.length < 60
  }