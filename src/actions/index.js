export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export function submitForm(data) {
    return { type: ADD_EMPLOYEE, payload: data };
}