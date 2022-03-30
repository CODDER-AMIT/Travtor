export interface CancellationDetails {
    isCancellationFree: boolean;
    freeCancellationEndDate: string;
}
export interface Fare {
    totalAmount: number;
    perDay: number;
}
export interface Specifications {
    baggageCapacity: string;
    passengerCapacity: string;
}
export interface Vehicle {
    name: string;
    type: string;
    image: string;
    specifications: Specifications
}
export interface CarItineraries {
    id: string;
    unlimitedMileage: boolean;
    cancellationDetails: CancellationDetails;
    fare: Fare;
    vehicle: Vehicle;
}

export interface CarList {
    currency: string;
    CarItineraries: Array<CarItineraries>
}