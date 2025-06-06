import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { features } from "../../utils/features";
import { Feature } from "../cards/Feature";

export const Features = () => {
  return (
    <section id="features" className="relative mt-12 md:mt-16">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Features That Make Purrivacy Purr-fect</Title>
          <Paragraph>
            The VPN that puts your digital safety first while keeping things charmingly simple.
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, key) => (
            <Feature key={key} title = {feature.title} description = {feature.description} icon = {feature.icon} />
          ))
            }
        </div>

      </Container>
    </section>
  )
}