import { calculateCircleArea } from './shapes/circle';
import { calculateSquareArea } from './shapes/square';
import { calculateRectangleArea } from './shapes/rectangle';

const app = () => {
    const circleArea = calculateCircleArea(5);
    const squareArea = calculateSquareArea(4);
    const rectangleArea = calculateRectangleArea(3, 6);

    console.log(`Área do Círculo: ${circleArea}`);
    console.log(`Área do Quadrado: ${squareArea}`);
    console.log(`Área do Retângulo: ${rectangleArea}`);
};

app();