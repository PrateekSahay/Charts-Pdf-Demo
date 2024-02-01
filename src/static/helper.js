import { toPng } from 'html-to-image';

const saveChartAsImage = async (reference) => {
    const pieChartImage = await toPng(reference);
    return pieChartImage;
};  

export {
    saveChartAsImage
}