import { Button } from "../shared/Button"

interface Props {
    title: string;
    price: string;
    features: string[];
    bestValue: boolean;
}

export const Plan = ({ title, price, features, bestValue }: Props) => {
    return (
        <div className="relative group h-full text-center">
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div className="bg-box-bg rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                    {bestValue && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
                            Best Value
                        </div>
                    )}
                    <h3 className="text-2xl font-semibold text-heading-1">{title}</h3>
                    <p className="mt-4 text-4xl font-semibold text-heading-1">
                        {price}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                        {features.map((feature, keyF) =>
                            <li className="flex items-center gap-2" key={keyF}>
                                <span className="text-primary">✔️</span>
                                <span>{feature}</span>
                            </li>
                        )}
                    </ul>
                    <Button className="mt-6 w-full transform transition-tranform duration-100 hover:scale-105 text-white">Get {title}</Button>


                </div>
            </div>
        </div>
    )
}
