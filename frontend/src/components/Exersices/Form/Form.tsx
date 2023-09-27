import { useRef, useEffect } from 'react'


export const Form = ({ getExercises, onEdit, setOnEdit }) => {

    const ref = useRef()

    useEffect(() => {
        if (onEdit) {
            const exercise = ref.current

            exercise.name.valu
        }
    })

    return (
        <div>Messi</div>
    )
}