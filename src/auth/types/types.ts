export interface LoginCredential {
    email: string
    password: string
}

export interface LoginUserData {
    email: string
    name: string
}

export interface LoginResponse {
    status: number
    isSuccess: boolean
    isError: boolean
    loginAt: string | null
    message: string
    _token: {
        accessToken: string
    },
    data: LoginCredential
}


export interface SignupDataType {
    userName:string
    email:string
    password:string
    userInfo:{
        gender:string
        dob:string
        profileImage?:object
    }

}
