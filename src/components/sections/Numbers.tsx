import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                        border border-violet-900 shadow-lg shadow-box-shadow md:divide-x divide-violet-700
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              1M+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Users</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              Ad Blocker{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Dodge Annoying Ads & Malware</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              5K{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Business Customers</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              118+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Locations Across The Globe</p>
          </div>
        </div>
      </Container>
    </section>
  );
};