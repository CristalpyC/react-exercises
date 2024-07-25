import { useState } from "react";

type ShowFunctions = () => void;

// Custom hook to manage form visibility
export const useUpdating = (): [boolean, ShowFunctions, ShowFunctions] => {
    const [isUpdating, setUpdating] = useState(false);

    const showUpdatingForm: ShowFunctions = () => setUpdating(true);
    const showNotUpdatingForm: ShowFunctions = () => setUpdating(false);

    return [isUpdating, showUpdatingForm, showNotUpdatingForm];
};
