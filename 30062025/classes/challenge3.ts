class UserProfile {
    private _email: string;
    constructor(email: string) {
        this._email = email;
    }
    set email(email: string) {
        if (email.includes("@")) {
            this._email = email;
        } else {
            throw new Error("Invalid email");
        }
    }
    get email() {
        return this._email;
    }
}

// Test
const user = new UserProfile("john@example.com");
console.log(user.email); // Should return valid email
user.email = "wrongemail"; // Should throw an error