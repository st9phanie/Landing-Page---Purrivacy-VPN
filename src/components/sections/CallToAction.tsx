import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
    return (
        <section className="pb-20 relative">
            {" "}
            <Container className="flex flex-col lg:flex-row gap-10 lg:gap-5">
                <div className="relative rounded-2xl overflow-hidden">
                    <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
                            {" "}
                            A VPN service  {" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                                trusted              </span>{" "}
                            by tech experts and users
                        </h1>
                        <Paragraph className="pt-10">
                            Ready to take control of your online privacy?
                            Join the thousands who trust PurrivacyVPN to keep their digital lives safe and secure.
                        </Paragraph>
                        <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-white">
                            <Button> Download Now</Button>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                    <span
                        className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-80 
                        skew-x-22 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl opacity-40 lg:opacity-45 lg:block hidden"
                    ></span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img
                        src="https://media.gettyimages.com/id/1818874719/photo/maintenance-engineers-in-server-room.jpg?s=2048x2048&w=gi&k=20&c=19CBbDqeDg5ikVQJFC9r3vsNp1MQwu7_rCqkuqGxpaY="
                        width={2350}
                        height={2359}
                        className="lg:absolute lg:w-full lg:h-full rounded-4xl object-cover lg:max-h-none max-h-96" />
                </div>


            </Container>
        </section>
    );
};