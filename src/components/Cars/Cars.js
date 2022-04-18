import {useEffect, useState} from "react";

import { carService } from '../../services';
import { Car } from '../Car/Car';

const Cars = ({newCar, setCarForUpdate, updateCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [newCar, updateCar, deletedCarId]);

    return(
        <div>
            {cars.map((car) => <Car key = {car.id} car={car} setCarForUpdate={setCarForUpdate} setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
};

export {
    Cars
}