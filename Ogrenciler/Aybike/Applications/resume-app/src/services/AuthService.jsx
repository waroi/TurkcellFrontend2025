class AuthService {
    static getRole() {
      const user = this.getUser();
      return user?.role || null;
    }
  }
  
  export default AuthService;