import {useEffect} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';

import {carService} from '../../services';
import {carValidator} from '../../validator';

const CarForm = ({setNewCar, carForUpdate, setUpdatedCar, setCarForUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])

    const submit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                const {data} = await carService.create(car);
                setNewCar(data);
            }
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    }
    const clearForm = () => {
        setCarForUpdate(false);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>Save</button>
        </form>
    );
};

export {
    CarForm
};