import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
import { pricingPlans } from "../../utils/pricing-plan"
import { Plan } from "../cards/Plan"

export const Pricing = () => {
    return (
        <section id="pricing" className="py-5 ">
            <Container className="text-center">
                <Title >
                    Pricing
                </Title>
                <Paragraph className="mt-4">
                    Choose the plan that's right for you.
                </Paragraph>
            </Container>
            <Container className="mt-12">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {pricingPlans.map((plan, key) => (
                    <div>
                    <Plan key={key} title={plan.title} price={plan.price} features={plan.features} bestValue={plan.bestValue}></Plan>
                    </div>
                ))
                }
            </div>
            </Container>
        </section>
    )
}