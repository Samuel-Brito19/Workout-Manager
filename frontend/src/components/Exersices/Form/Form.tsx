import { useRef, useEffect, ChangeEvent } from 'react'




export const Form = ({ getExercises, onEdit, setOnEdit }) => {

    const ref = useRef()

    useEffect(() => {
        if (onEdit) {
            const exercise = ref.current

            exercise.name.value = onEdit.name,
                exercise.series.value = onEdit.series,
                exercise.repetitions.value = onEdit.repetitions
        }
    }, [onEdit])

    const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const exercise = ref.current
        if (
            !exercise.name.value ||
            !exercise.series.value ||
            !exercise.repetitions.value ||
        ) {
            return
        }
    }

    return (
        <div>Messi</div>
    )
}