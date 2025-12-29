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
    token: {
        accessToken: string
    },
    data: LoginUserData
}

