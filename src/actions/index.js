export const ADD_STUDENT = "ADD_STUDENT";

export function submitForm(data) {
    return { type: ADD_STUDENT, payload: data };
}