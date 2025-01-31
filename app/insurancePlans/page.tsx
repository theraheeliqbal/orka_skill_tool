import TopBanner from "@/components/common/TopBanner";
import { insurancePackagePlans } from "@/constants";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function InsurancePage() {
  return (
    <>
      <TopBanner notHome bannerImage="https://megaone.acrothemes.com/insurance/img/plan-cover.jpg" title="Insurance Plans" subTitle="We Give The Best And Reasonable Pricing Plans" />
      <section className="bg-[#f9f8fa] relative py-[7.5rem]">
        <div className="container text-center">
          <h4 className="text-center">Most Economical Pricing</h4>
          <h2>Our Best Pricing</h2>

          <div className="max-[700px] mx-auto">
            <p className="about-max pt-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim, vulputate at justo tristique, tempor sagittis dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet ligula consequat urna posuere convallis.</p>
          </div>

          <div className="flex gap-[30px]">
            {insurancePackagePlans.map((insurancePackagePlan) => {
              const { title, price, description, currency, duration, benefits, btnClasses } = insurancePackagePlan;
              return (
                <div className="w-1/3" key={title}>
                  <div className="price-item text-left">
                    <h3 className="text-[#2c3459] d-inline-block font-weight-600 mb-4 blue text-capitalize">{title}</h3>

                    <div className="price-tag flex items-center">
                      <div className="price alt-font text-dark-gray">
                        <h3 className="currency text-capitalize m-0"><span className="sign">{currency}</span>{price}</h3>
                        <span className="month text-capitalize">{duration}</span>
                      </div>

                      <p className="price-text no-margin">{description}</p>
                    </div>

                    <ul className="packages">
                      {benefits.map(benefit => <li key={benefit}> <FontAwesomeIcon icon={faCheck} color="#99d747" className="fa-fw" />
                        {benefit}</li>
                      )}
                    </ul>

                    <a href="javascript:void(0);" className={`${btnClasses} !w-full !text-center`}>Get Started Now</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
