import React, { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import style from './calculator.module.scss'


const options: {[index: string]: any} = {
    panPrice: 1.68,
    height: {
        "0": 0,
        "1": 0,
        "2": 0.05,
        next: 0.10
    },
    angle: {
        "0": 0,
        "30": 0.15,
        "60": 0.25
    },
    location: {
        riga: 10,
        rigaNov: 15
    }
};


const Calculator = () => {

    const { t } = useTranslation()
    const [panCount, setPanCount] = useState<string>("20");
    const [height, setHeight] = useState<string>("1");
    const [angle, setAngle] = useState<string>("0");
    const [location, setLocation] = useState<string>("riga");

    const [price, setPrice] = useState<string>("0.00");

    useEffect(() => {
        if (!options.angle.hasOwnProperty(angle) || !options.location.hasOwnProperty(location) || Number(panCount) < 1 || Number(height) < 0)
            return;

        const panPrice = options.panPrice * Number(panCount);

        let heightPrice;
        if (!options.height.hasOwnProperty(height)) {
            heightPrice = (options.height.next * Number(height) - options.height.next * 2)  * Number(panCount);
        }
        else
            heightPrice = options.height[height] * Number(height) * Number(panCount);


        let anglePrice;
        if (Number(height) === 0 || Number(height) === 1)
            anglePrice = 0;
        else
            anglePrice = options.angle[angle] * Number(panCount);

        const locationPrice = options.location[location];

        const res: string = ((panPrice + heightPrice + anglePrice + locationPrice) * 1.21).toFixed(2);

        setPrice(res);

    }, [panCount, height, angle, location])

    return (
        <div className={style.calcBlock}>
            <div className={style.row}>
                <div className={style.heading}>{t("cleaning:calculator.count")}</div>
                <div className={style.input}>
                    <span>{panCount}</span>
                    <input className={style.range} type="range" value={panCount} min="1" max="350" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPanCount(e.target.value)}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.heading}>{t("cleaning:calculator.height")}</div>
                <div className={style.input}>
                    <div className={style.input}>
                        <span>{height}</span>
                        <input className={style.range} type="range" value={height} min="0" max="12" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className={Number(height) > 1 ? style.row + " " + style.visible : style.row + " " + style.unVisible}>
                <div className={style.heading}>{t("cleaning:calculator.angle")}</div>
                <div className={style.input}>
                    <select name="angle" id="angle" value={angle} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAngle(e.target.value)}>
                        <option value="0">0 - 30°</option>
                        <option value="30">30° - 60°</option>
                        <option value="60">60°+</option>
                    </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.heading}>{t("cleaning:calculator.location")}</div>
                <div className={style.input}>
                    <select name="angle" id="angle" value={location} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)}>
                        <option value="riga">{t("cleaning:calculator.riga")}</option>
                        <option value="rigaNov">{t("cleaning:calculator.rigaNov")}</option>
                    </select>
                </div>
            </div>
            <div className={style.price}>{price} €</div>
        </div>
    )
}

export default Calculator;
